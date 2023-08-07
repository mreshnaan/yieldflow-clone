import { Button, Form, Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import WalletModal from "../Modals/WalletModal";
import { toast } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
function ProfileView() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Set the desired mobile breakpoint

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishAffiliate = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "start",
          textAlign: "left",
        }}
      >
        <h1 style={{ color: "black", marginBottom: "24px" }}>Profile</h1>
        <Form
          layout={"vertical"}
          name="basic"
          initialValues={{ size: "default" }}
          style={{
            width: "70%",
          }}
          size={"middle"}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Wallet Address" name="publicAddress">
            <Input disabled />
          </Form.Item>
          {/* <Form.Item
              style={{
                marginTop: "24px",
                marginBottom: "24px",
              }}
              label="Wallet Connector"
              tooltip={{
                title: "Please link your wallet",
                icon: <InfoCircleOutlined />,
              }}
              wrapperCol={{
                offset: 0,
                span: 0,
              }}
            >
              <WalletModal />
            </Form.Item> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "12px",
            }}
          >
            <label
              style={{
                color: "rgb(18, 18, 18)",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
              htmlFor=""
            >
              Connections
            </label>
            <span
              style={{
                color: "rgb(84, 84, 84)",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "28px",
              }}
            >
              Help collectors verify your account by connecting to web3
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <label htmlFor="">Web3 Wallet Connect</label>
            <WalletModal />
          </div>

          <Form.Item>
            <Button
              type="primary"
              style={{
                width: "150px",
                height: "40px",
              }}
              htmlType="submit"
            >
              Update
            </Button>
          </Form.Item>
        </Form>

        <Form
          layout={"vertical"}
          name="basic"
          initialValues={{ size: "default" }}
          style={{
            width: "70%",
          }}
          size={"middle"}
          onFinish={onFinishAffiliate}
          autoComplete="off"
        >
          <div
            style={{
              width: "100%",
              borderBottom: "2px solid rgb(203 208 211 / 58%)",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "12px",
            }}
          >
            <label
              style={{
                color: "rgb(18, 18, 18)",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
              }}
              htmlFor=""
            >
              Affiliate Program
            </label>
            <span
              style={{
                color: "rgb(84, 84, 84)",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "28px",
              }}
            >
              Share your unique referral link with others and earn rewards when
              they join our platform through your link. Help us grow our
              community together!
            </span>
          </div>
          <Form.Item
            label="Referral Link"
            name="reflink"
            rules={[
              {
                required: true,
                message: "Please input your referral link!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{
                width: "150px",
                height: "40px",
              }}
              htmlType="submit"
            >
              Generate Link
            </Button>
            <Button
              disabled={true}
              icon={<CopyOutlined />}
              ghost
              style={{
                textTransform: "uppercase",
                fontSize: "14px",
                padding: "8px 22px",
                marginLeft: "8px",
                borderRadius: "10px",
                width: "150px",
                height: "40px",
                color: "rgb(75, 30, 150)",
                backgroundColor: "transparent",
                borderColor: "rgb(75, 30, 150)",
              }}
              onClick={() => {
                navigator.clipboard.writeText("referral link copied");
                toast.success("Referral link copied to clipboard!");
              }}
            >
              Copy Link
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default ProfileView;
