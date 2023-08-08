import { Button, Card, Col, Row } from "antd";

import Status from "../Cards/Status";
import {
  WalletOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  GlobalOutlined,
  FileOutlined,
  ShoppingCartOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import HeadLine from "../HeadLine";
import CustomTable from "../Table/CustomTable";
import { useState } from "react";

function HomeView() {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      sorter: (a, b) => a.product - b.product,
      width: "30%",
    },
    {
      title: "Staked Assets	",
      dataIndex: "stakedassets	",
      sorter: (a, b) => a.stakedassets - b.stakedassets,
    },
    {
      title: "Yield",
      dataIndex: "yield",
      sorter: (a, b) => a.yield - b.yield,
      width: "40%",
    },
  ];
  const data = [];

  const stats = [
    {
      title: "Total Purp",
      amount: "$53,000 ",
      percentage: 55,
      icon: <WalletOutlined style={{ fontSize: "24px" }} />,
    },
    {
      title: "Staking Rewards",
      amount: "$2,300",
      percentage: 5,
      icon: <GlobalOutlined style={{ fontSize: "24px" }} />,
    },
    {
      title: "APY",
      amount: "35%",
      icon: <FileOutlined style={{ fontSize: "24px" }} />,
    },
    {
      title: "Referal Rewards",
      amount: "$173,000",
      percentage: 8,
      icon: <ShoppingCartOutlined style={{ fontSize: "24px" }} />,
    },
  ];

  return (
    <>
      <HeadLine title={"Overview"} />

      <Row gutter={[16, 16]}>
        {stats.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card
              style={{
                padding: "22px",
                backgroundColor: "rgb(245, 248, 252)",
                border: "1px solid rgb(222, 230, 241)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* stats details */}
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      color: "#4b1e96",
                      wordBreak: "break-word",
                      lineHeight: "1.4705882352941178",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      paddingBottom: ".1rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "left",
                        fontWeight: "500",

                        color: "#4b1e96",
                        wordBreak: "break-word",
                        lineHeight: "1.4705882352941178",
                        fontSize: "1.125rem",
                      }}
                    >
                      {item.amount}
                    </div>
                    {item.percentage && (
                      <>
                        <div style={{ display: "flex" }}>
                          {item.percentage > 0 ? (
                            <span style={{ color: "green" }}>
                              <ArrowUpOutlined />
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>
                              <ArrowDownOutlined />
                            </span>
                          )}
                          <p
                            style={{
                              marginLeft: "5px",
                              opacity: "0.8",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            {Math.abs(item.percentage)}%
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* icon */}
                <div
                  type="primary"
                  shape="circle"
                  style={{
                    background: "rgb(75, 30, 150)",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  // onClick={onClickHandler}
                >
                  {item.icon}
                </div>
              </div>
            </Card>
          </Col>
        ))}

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            style={{
              color: "#fff",
              textAlign: "left",
              borderRadius: "12px",
              backgroundColor: "#4b1e96",
              border: "1px solid #dee6f1",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h5
              style={{
                color: "#fff",
                lineHeight: "24px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Refereal Reward
            </h5>
            <Row gutter={[16, 16]}>
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={8}
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontSize: "10px",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Sign ups
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: "700",
                        }}
                      >
                        10
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={8}
                lg={8}
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontSize: "10px",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    REWARDS
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: "700",
                        }}
                      >
                        10,000 PURP
                      </span>
                    </p>
                  </div>
                </div>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={8}
                lg={8}
                style={{
                  paddingTop: "6px",
                  paddingBottom: "6px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontSize: "10px",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Average Reward Per Sign up
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>
                      <span
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontWeight: "700",
                        }}
                      >
                        1000 PURP
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "24px",
          paddingBottom: "70px",
        }}
      >
        <Col xs={24} sm={24} md={24} lg={6}>
          <Status
            btnBg="rgb(245 245 245 / 17%)"
            bg="#4b1e96"
            icon={<WalletOutlined style={{ fontSize: "25px" }} />}
            title="Total Purp"
            amount={show ? "0.00" : "****"}
            color={"white"}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Status
            btnBg="rgb(245, 245, 245)"
            bg="#fff"
            icon={
              show ? (
                <EyeInvisibleOutlined style={{ fontSize: "25px" }} />
              ) : (
                <EyeOutlined style={{ fontSize: "25px" }} />
              )
            }
            title="Total Rewards"
            amount={show ? "0.00" : "****"}
            color={"black"}
            onClickHandler={showHandler}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Status
            btnBg="rgb(245, 245, 245)"
            bg="#fff"
            icon={
              show ? (
                <EyeInvisibleOutlined style={{ fontSize: "25px" }} />
              ) : (
                <EyeOutlined style={{ fontSize: "25px" }} />
              )
            }
            title="Total Apy"
            amount={show ? "0.00" : "****"}
            color={"black"}
            onClickHandler={showHandler}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Status
            btnBg="rgb(245, 245, 245)"
            bg="#fff"
            icon={
              show ? (
                <EyeInvisibleOutlined style={{ fontSize: "25px" }} />
              ) : (
                <EyeOutlined style={{ fontSize: "25px" }} />
              )
            }
            title=" Stak Purp"
            amount={show ? "0.00" : "****"}
            color={"black"}
            onClickHandler={showHandler}
          />
        </Col>
      </Row> */}
      <CustomTable data={data} columns={columns} title={"Stats"} />
    </>
  );
}

export default HomeView;
