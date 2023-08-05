/* eslint-disable react/prop-types */
import { Col, Modal, Row, Button } from "antd";
import Wallet from "../Cards/Wallet";
import { useEffect, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
} from "wagmi";
import { toast } from "react-hot-toast";
import { Configs } from "../../utils/configs";
const WalletModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { connector, isConnected, address } = useAccount();

  const { chain } = useNetwork();
  const {
    // connect,
    connectors,
    error,
    isLoading,
    pendingConnector,
    connectAsync,
  } = useConnect();
  const { disconnect } = useDisconnect();
  const {
    data,
    signMessage,
    isSuccess,
    error: signError,
    isLoading: isSignLoading,
    status,
  } = useSignMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleWalletConnect = async (selectConnector) => {
    const { chain } = await connectAsync({ connector: selectConnector });

    if (chain.unsupported) {
      toast(
        <>
          <span style={{ color: "black", fontSize: "14px" }}>
            You're connected to an unsupported network.
          </span>
          <Button
            type="link"
            onClick={() => {
              window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x1",
                    rpcUrls: ["https://mainnet.infura.io/v3/"],
                    chainName: "Ethereum Mainnet",
                    nativeCurrency: {
                      name: "ETH",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://etherscan.io"],
                  },
                ],
              });
            }}
          >
            Switch Network
          </Button>
        </>,
        {
          style: {
            backgroundColor: "#f0f0f0",
            borderRadius: "4px",
            padding: "10px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          },
        }
      );
      disconnect();
    }
  };

  const isChainSupported = chain?.id
    ? Configs.SUPPORTED_CHAIN_IDS.includes(chain.id)
    : false;

  //check if the chain got changed  then disconnect
  useEffect(() => {
    if (!isChainSupported) {
      disconnect();
    }
    // console.log("chain");
    // console.dir(chain);
  }, [chain]);

  //wallet connect status
  useEffect(() => {
    let loadingToastId, errorToastId, successToastId;

    if (isLoading) {
      loadingToastId = toast.loading("Loading please wait ...");
    }

    if (error) {
      errorToastId = toast.error("Error connecting wallet: " + error.message);
    }

    if (isConnected) {
      successToastId = toast.success("Connected");
    }

    return () => {
      if (loadingToastId) {
        toast.dismiss(loadingToastId);
      }
      if (errorToastId) {
        toast.dismiss(errorToastId);
      }
      if (successToastId) {
        generateSignatureMessage();
        toast.dismiss(successToastId);
      }
    };
  }, [isLoading, error, isConnected]);

  //sign message status
  useEffect(() => {
    let loadingToastId, errorToastId, successToastId;
    if (isConnected) {
      if (isSignLoading) {
        loadingToastId = toast.loading("Loading please wait ...");
      }
      if (isSuccess) {
        successToastId = toast.success("Signed");
      }
      if (signError) {
        // if (signError.message === "Connector not found") {
        //   errorToastId = toast.error(
        //     "Error connecting wallet: " + "PLease sign in to Continue"
        //   );
        // } else {
        errorToastId = toast.error(
          "Error connecting wallet: " + signError.message
        );
        disconnect();
        // }
      }
    }
    return () => {
      if (loadingToastId) {
        toast.dismiss(loadingToastId);
      }
      if (errorToastId) {
        toast.dismiss(errorToastId);
      }
      if (successToastId) {
        toast.dismiss(successToastId);
      }
    };
  }, [isSuccess, signError, isSignLoading]);

  const generateSignatureMessage = async () => {
    const signer = address;
    const nonce = Date.now().toString();
    const signatureMessage = `nonce: ${nonce} address:${signer}`;
    await signMessage({ message: signatureMessage });
    console.log("signature : ", data && data);
  };

  // const isCheckUserExist = () => {};

  // const handleLoginWithSignature = async () => {
  //   try {
  //     //check user exist on backend
  //     //else then register
  //     // and get the sign message
  //     //and send the signature and public address to the back end to verify
  //     //get access token
  //     // if (isConnected) {
  //     //   const signature = await signMessage({generateSignatureMessage});
  //     //   // Send the signature and connectedWallet to your backend for verification
  //     //   const response = await fetch("/api/login", {
  //     //     method: "POST",
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //     },
  //     //     body: JSON.stringify({
  //     //       signature: signature,
  //     //       publicAddress: address,
  //     //     }),
  //     //   });
  //     //   const responseData = await response.json();
  //     //   console.log(responseData); // Store the verification response
  //     // } else {
  //     //   console.log("Wallet not connected.");
  //     // }
  //   } catch (error) {
  //     console.error("Error signing message:", error);
  //   }
  // };

  return (
    <>
      {isConnected && (
        <>
          <div>
            {isSuccess && (
              <div>
                <div>Signature: {data}</div>
              </div>
            )}
            <Button
              size="large"
              type="primary"
              style={{
                background: "rgb(75, 30, 150) !important",
                width: "100%",
                height: "40px",
              }}
              onClick={disconnect}
            >
              Disconnect
            </Button>
          </div>
        </>
      )}
      {!isConnected && (
        <>
          <Button
            size="large"
            type="primary"
            style={{
              background: "rgb(75, 30, 150) !important",
              width: "100%",
              height: "40px",
            }}
            onClick={showModal}
          >
            Connect Wallet
            {isLoading && " (Connecting)"}
          </Button>
        </>
      )}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <Row
          gutter={"8px"}
          style={{
            paddingTop: "24px",
            paddingBottom: "70px",
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              border: "2px solid #f7f7f7",
              borderRadius: "16px",
            }}
          >
            <Wallet
              onClickHandler={() => {
                handleWalletConnect(connectors[0]);
                handleCancel();
              }}
              img={
                " https://app.yieldflow.com/static/media/metaMask.b3649ecfe8c45f27ceb9f99d70f3d24e.svg"
              }
              title={"MetaMask"}
              subTitle={"Connect to your MetaMask Wallet"}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              border: "2px solid #f7f7f7",
              borderRadius: "16px",
            }}
          >
            <Wallet
              onClickHandler={() => {
                handleWalletConnect(connectors[1]);
                // connect({ connector: connectors[1] });
                handleCancel();
              }}
              img={
                " https://app.yieldflow.com/static/media/coinbaseWallet.846460966ee16cf502438a2693cef979.svg"
              }
              title={" Coinbase Wallet"}
              subTitle={"Scan with Coinbase Wallet to connect"}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              border: "2px solid #f7f7f7",
              borderRadius: "16px",
            }}
          >
            <Wallet
              onClickHandler={() => {
                handleWalletConnect(connectors[2]);
                // connect({ connector: connectors[2] });
                handleCancel();
              }}
              img={
                " https://app.yieldflow.com/static/media/walletConnect.1115f76e9b92f30d4c6618e80da2fda3.svg"
              }
              title={"WalletConnect"}
              subTitle={" Scan with WalletConnect to connect"}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default WalletModal;
