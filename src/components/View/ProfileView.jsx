import { Button, Form, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import WalletModal from "../Modals/WalletModal";
function ProfileView() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "450px",
            width: "100%",
            borderRadius: "25px",
            padding: "30px",
            border: "1px solid #ffffff40",
            boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
          }}
        >
          <h1 style={{ color: "black" }}>Profile</h1>
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
            <Form.Item label="User ID" name="uid">
              <Input disabled />
            </Form.Item>

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
            <Form.Item
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
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 0,
              }}
            >
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
        </div>
      </div>
    </>
  );
}

export default ProfileView;
