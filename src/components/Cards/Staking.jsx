/* eslint-disable react/prop-types */
import { Card, Row, Col, Tooltip, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

function Staking({ buttons, title, tooltip_message, img, data }) {
  return (
    <Card
      style={{
        borderRadius: "15px",
        backgroundColor: "#fff",
        padding: "0.1rem !important",
        border: "1px solid #f0f0f0",
      }}
    >
      <Row>
        <Col
          span={24}
          style={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <div
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              style={{
                marginLeft: "30px",
                marginRight: "20px",
                width: "30px",
                height: "30px",
              }}
              src={img}
              alt="Banner Image"
            />
            <p
              style={{
                fontSize: "18px",
                marginRight: "8px",
                color: "rgba(0, 0, 0, 0.88)",
                wordBreak: "break-word",
                lineHeight: " 1.6",
              }}
            >
              {title}
            </p>
            <Tooltip title={tooltip_message}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
        </Col>

        <Col
          span={24}
          style={{
            padding: "24px",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
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
                  display: `${data.apy ? "flex" : "none"}`,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.88)",
                    textTransform: "uppercase",
                  }}
                >
                  <strong>Apy</strong>
                </p>
                <p
                  style={{
                    margin: "0px",
                  }}
                >
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    {data.apy}
                  </span>
                </p>
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
                  display: `${data.pool ? "flex" : "none"}`,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.88)",
                    textTransform: "uppercase",
                  }}
                >
                  <strong>Pool ends</strong>
                </p>
                <p
                  style={{
                    margin: "0px",
                  }}
                >
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    {data.pool}
                  </span>
                </p>
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
                  display: `${data.currentStack ? "flex" : "none"}`,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.88)",
                    textTransform: "uppercase",
                  }}
                >
                  <strong>Current stake</strong>
                </p>
                <p
                  style={{
                    margin: "0px",
                  }}
                >
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                    {" "}
                    {data.currentStack}
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          span={24}
          style={{
            padding: "24px",
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <Row gutter={[16, 16]}>
            {buttons?.map((button, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                style={{
                  padding: "6px",
                }}
              >
                <Button
                  disabled={button.disable}
                  key={index}
                  style={{
                    textTransform: "uppercase",
                    boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
                    fontSize: "14px",
                    height: "40px",
                    padding: "8px 22px",
                    borderRadius: "10px",
                    width: "100%",
                    ...button.style,
                  }}
                  type={button.type}
                  href={button.path}
                >
                  {button.title}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default Staking;
