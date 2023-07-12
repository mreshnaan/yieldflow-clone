/* eslint-disable react/prop-types */
import { Col, Modal, Row } from "antd";
import Wallet from "../Cards/Wallet";
const WalletModal = ({ showModal, handleCancel }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };
  return (
    <>
      <Modal
        open={showModal}
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
