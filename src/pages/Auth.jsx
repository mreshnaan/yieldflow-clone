import { Button, Card, Col, Form, Input, Row } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
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
import Logo from "../components/Logo";

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
  //https://firebase.google.com/docs/auth/web/email-link-auth#web-namespaced-api_2
  useEffect(() => {
    // Check if the user already exists on the backend and firebase
    //else register
    if (user) {
      navigate("/profile");
    } else {
      // user is not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem("email");
        if (!email) {
          email = window.prompt("Please provide your email");
          // toast.error("Please provide your email");
        }
        // after that we will complete the login process
        let toastId = toast.loading("Loading Please wait ...");
        signInWithEmailLink(
          auth,
          localStorage.getItem("email"),
          window.location.href
        )
          .then((result) => {
            console.log(result.user);
            localStorage.removeItem("email");
            toast.success("sign-in successful!", {
              id: toastId,
            });
            navigate("/profile");
          })
          .catch((err) => {
            toast.error(err.message, {
              id: toastId,
            });
            navigate("/");
          });
      }
    }
  }, [user, search, navigate]);

  const handleLogin = async (values) => {
    let toastId = toast.loading("Loading Please wait ...");
    try {
      await sendSignInLinkToEmail(auth, values.email, {
        url: "https://yieldflow-clone.vercel.app/" || "http://localhost:4000/",
        handleCodeInApp: true,
      });
      localStorage.setItem("email", values.email);
      toast.success("We have sent you an email with a link to sign in", {
        id: toastId,
      });
    } catch (err) {
      toast.error(err.message, {
        id: toastId,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    let toastId = toast.loading("Loading Please wait ...");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("email", user.email);

      console.log(user);
      toast.success("sign-in successful!", {
        id: toastId,
      });
      navigate("/profile");
    } catch (err) {
      toast.error(err.message, {
        id: toastId,
      });
    }
  };
  const checkUserExistsOnBackend = async (user) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/users/by/email?value=${user.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const registerUserWithBackend = async (user) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
          }),
        }
      );

      const data = await response.json();
      console.log("User registration response:", data);
      return data;
    } catch (error) {
      console.error("Error registering user:", error);
    }
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
          flexDirection: "column",
        }}
      >
        <Logo
          style={{ marginBottom: "0px", zIndex: 1 }}
          imageStyle={{
            width: "300px",
            height: "150px",
          }}
        />
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
          <Row gutter={[16, 16]} justify={"center"}>
            <Col span={24} style={{ padding: "6px" }}>
              <p
                style={{
                  textAlign: "center",
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
