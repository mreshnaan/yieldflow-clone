import { Button, Card, Col, Form, Input, Row } from "antd";
import { GoogleOutlined } from "@ant-design/icons"; // Import the Google icon
import { toast } from "react-hot-toast";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../utils/FirebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";

function Auth() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const onFinish = (values) => {
    // Handle form submission here
    console.log("Form submitted:", values);
    handleLogin(values);
  };

  useEffect(() => {
    if (user) {
      // user is already signed in
      navigate("/");
    } else {
      // user is not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem("email");
        if (!email) {
          toast.success("Please provide your email");
        }
        // after that we will complete the login process
        let toastId = toast.loading("Loading Please wait ...");
        signInWithEmailLink(
          auth,
          localStorage.getItem("email"),
          window.location.href
        )
          .then((result) => {
            // we can get the user from result.user but no need in this case
            console.log(result.user);
            localStorage.removeItem("email");
            toast.dismiss(toastId);
            navigate("/portfolio");
          })
          .catch((err) => {
            toast.error(err.message, {
              id: toastId,
            });
            navigate("/");
          });
      } else {
        console.log("enter email and sign in");
      }
    }
  }, [user, search, navigate]);

  const handleLogin = (values) => {
    let toastId = toast.loading("Loading Please wait ...");
    sendSignInLinkToEmail(auth, values.email, {
      // this is the URL that we will redirect back to after clicking on the link in mailbox
      url: "https://yieldflow-clone.vercel.app/",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("email", values.email);
        toast.success("We have sent you an email with a link to sign in", {
          id: toastId,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          id: toastId,
        });
      });
  };

  const handleGoogleSignIn = () => {
    let toastId = toast.loading("Loading Please wait ...");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("We have sent you an email with a link to sign in", {
          id: toastId,
        });
        console.log(user);
      })
      .catch((err) => {
        toast.error(err.message, {
          id: toastId,
        });
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <Card
          style={{
            width: "350px",
            borderRadius: "0.5rem",
            backgroundColor: "rgb(255 255 255)",
            border: "0.0625rem solid rgb(171, 171, 171)",
            maxHeight: "34.688rem",
            boxSizing: "content-box",
            marginTop: "14px",
            padding: "30px 40px",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24} style={{ padding: "6px" }}>
              <p
                style={{
                  margin: "0px 0px 12px",
                  fontSize: "26px",
                  fontWeight: "bold",
                  lineHeight: "28px",
                  letterSpacing: "0.52px",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Sign up or log in
              </p>
            </Col>

            <Col span={24} style={{ padding: "6px" }}>
              <Row gutter={[16, 16]}>
                <Col span={24} style={{ padding: "6px" }}>
                  <Button
                    icon={<GoogleOutlined style={{ marginRight: "8px" }} />}
                    style={{
                      textTransform: "uppercase",
                      boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
                      fontSize: "14px",
                      height: "40px",
                      padding: "8px 22px",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    onClick={handleGoogleSignIn}
                  >
                    Continue with Google
                  </Button>
                </Col>
                <Col span={24} style={{ padding: "6px" }}>
                  <div
                    style={{
                      color: "#5C727D",
                      margin: "10px 0 10px 0",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "6px",
                        flexGrow: "1",
                        borderBottom: "1px solid #5C727D",
                      }}
                    ></div>
                    <p
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "normal",
                        lineHeight: "21px",
                        margin: "0",
                      }}
                    >
                      OR
                    </p>
                    <div
                      style={{
                        marginLeft: "6px",
                        flexGrow: "1",
                        borderBottom: "1px solid #5C727D",
                      }}
                    ></div>
                  </div>
                </Col>
                <Col span={24} style={{ padding: "6px" }}>
                  <Form onFinish={onFinish}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email!",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email address!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="example@email.com"
                        style={{
                          height: "40px",
                          padding: "8px",
                          borderRadius: "10px",
                          border: "1px solid #ccc",
                          fontSize: "14px",
                        }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          textTransform: "uppercase",
                          boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
                          fontSize: "14px",
                          height: "40px",
                          padding: "8px 22px",
                          borderRadius: "10px",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        Continue with Email
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Auth;
