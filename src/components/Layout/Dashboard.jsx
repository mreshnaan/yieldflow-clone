/* eslint-disable react/prop-types */
import { Button, Drawer, Layout } from "antd";
import MenuItems from "../MenuItems";
import Logo from "../Logo";
import { useMediaQuery } from "react-responsive";
import WalletModal from "../Modals/WalletModal";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Amount from "../Cards/Amount";

const { Header, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};

const Dashboard = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Set the desired mobile breakpoint here

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isModalOpen && (
        <WalletModal handleCancel={handleCancel} showModal={showModal} />
      )}
      {isMobile ? (
        <Header style={{ background: "white" }}>
          <div
            style={{
              margin: "0px auto",
              padding: "30px 30px",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="ghost"
              onClick={showDrawer}
              icon={<MenuOutlined />}
            ></Button>
            <Logo style={{ marginBottom: "0px" }} />
            <Drawer width={280} placement="left" onClose={onClose} open={open}>
              <div
                style={{
                  height: "80vh",
                  display: "flex",
                  maxWidth: "230px",
                  margin: "auto",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <div>
                  <MenuItems />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  <Amount amount={"9.8"} />
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      width: "100%",
                    }}
                    onClick={showModal}
                  >
                    Connect Wallet
                  </Button>
                </div>
              </div>
            </Drawer>
          </div>
        </Header>
      ) : (
        <Sider
          width={250}
          style={{ position: "fixed", height: "100vh", background: "white" }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              maxWidth: "230px",
              margin: "auto",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "space-between",
              paddingTop: "60px",
              paddingBottom: "60px",
              textAlign: "left",
            }}
          >
            <div>
              <Logo />
              <MenuItems />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
              }}
            >
              <Amount amount={"9.8"} />
              <Button
                size="large"
                type="primary"
                style={{
                  width: "100%",
                }}
                onClick={showModal}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </Sider>
      )}
      <Layout>
        <Content style={contentStyle}>
          <div
            style={{
              marginTop: `${isMobile ? "5vh" : "10vh"}`,
              marginBottom: "3vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                maxWidth: "1050px",
                margin: "0px auto",
                padding: "0px 30px",
                width: "100%",
              }}
            >
              {children}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
