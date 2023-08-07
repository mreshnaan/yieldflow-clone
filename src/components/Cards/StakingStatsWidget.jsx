import { Card, Col, Row } from "antd";

function StakingStatsWidget() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Card
            style={{
              height: "140px",
              textAlign: "left",
              borderRadius: "12px",
              backgroundColor: "#f5f8fc",
              border: "1px solid #dee6f1",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "left",
                gap: "15px",
              }}
            >
              <div>
                <h5
                  style={{
                    color: "#57627b",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  Total Staked
                </h5>
                <p>
                  <span style={{ fontSize: "30px", fontWeight: "700" }}>
                    52,507,741
                    <span
                      style={{
                        color: "#57627b",
                        marginLeft: "4px",
                        lineHeight: "28px",
                        fontSize: "20px",
                      }}
                    >
                      AXS
                    </span>
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      lineHeight: "20px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    $307.17m
                  </span>
                </p>
              </div>

              <img
                style={{}}
                src="https://stake.axieinfinity.com/lock-decor.png"
                alt="Background Image"
                width="38"
                height="50"
              />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Card
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "20px",
              marginBottom: "20px",
              textAlign: "left",
              height: "140px",
              backgroundImage: "linear-gradient(256.28deg,#1c94f4,#1273ea)",
              width: "100%",
              borderRadius: "12px",
              backgroundColor: "#f5f8fc",
              border: "1px solid #dee6f1",
            }}
          >
            <img
              src="https://stake.axieinfinity.com/axs-decor.png"
              alt="AXS Background"
              width="145"
              height="173"
              style={{
                position: "absolute",
                top: "-18px",
                right: "-23px",
              }}
            />
            <div style={{ color: "white" }}>
              <h5
                style={{
                  color: "#c4e3fb",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
              >
                Estimated Rewards
              </h5>
              <p>
                <span style={{ fontSize: "30px", fontWeight: "700" }}>35%</span>
              </p>
              <p>
                <span
                  style={{
                    color: "#c4e3fb",
                    lineHeight: "20px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  APR
                </span>
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            style={{
              textAlign: "left",
              borderRadius: "12px",
              backgroundColor: "#f5f8fc",
              border: "1px solid #dee6f1",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h5
              style={{
                color: "#57627b",
                lineHeight: "24px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              AXS Stats
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
                      color: "#57627b",
                      fontWeight: "600",
                    }}
                  >
                    AXS Price
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
                        $5.85
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
                      color: "#57627b",
                      fontWeight: "600",
                    }}
                  >
                    DAILY REWARDS
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
                        50,516 AXS
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
                      color: "#57627b",
                      fontWeight: "600",
                    }}
                  >
                    CIRCULATING SUPPLY
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
                        113,853,028 AXS
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default StakingStatsWidget;
