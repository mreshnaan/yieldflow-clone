/* eslint-disable react/prop-types */
import { Button, Drawer, Layout } from "antd";
import MenuItems from "../MenuItems";
import Logo from "../Logo";
import { useMediaQuery } from "react-responsive";
import { signOut } from "firebase/auth";

// import WalletModal from "../Modals/WalletModal";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Amount from "../Cards/Amount";
import { auth } from "../../utils/FirebaseConfig";

const { Header, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#fff",
};

const Dashboard = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Set the desired mobile breakpoint

  const [open, setOpen] = useState(false);

  function logoutUser() {
    signOut(auth)
      .then(() => {
        // clear session storage
        sessionStorage.clear();
        window.location.replace("/");
        alert("Logged Out Successfully");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <Header style={{ background: "white" }}>
          <div
            style={{
              margin: "0px auto",
              padding: "30px 30px",
              paddingTop: "10px",
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
            <Logo
              style={{ marginBottom: "0px", zIndex: 1 }}
              imageStyle={{
                width: "200px",
                height: "100px",
              }}
            />
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
                  <Amount amount={"1.3"} />
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      background: "rgb(75, 30, 150) !important",
                      width: "100%",
                      height: "40px",
                    }}
                    onClick={logoutUser}
                  >
                    logOut
                  </Button>

                  {/* <WalletModal /> */}
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
              <Amount amount={"1.3"} />
              <Button
                size="large"
                type="primary"
                style={{
                  background: "rgb(75, 30, 150) !important",
                  width: "100%",
                  height: "40px",
                }}
                onClick={logoutUser}
              >
                logOut
              </Button>
              {/* <WalletModal /> */}
            </div>
          </div>
        </Sider>
      )}
      <Layout
        style={{
          marginLeft: isMobile ? 0 : "250px",
        }}
      >
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
                // maxWidth: "1050px",
                margin: "0px auto",
                marginRight: `${isMobile ? "0px" : "0%"}`,
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
