/* eslint-disable react/prop-types */
import { Row, Col, Card, Button } from "antd";
import { cloneElement } from "react";

function Status({ bg, title, amount, icon, color, btnBg, onClickHandler }) {
  return (
    <Card
      style={{ borderRadius: "15px", backgroundColor: bg, padding: "30px" }}
    >
      <Row gutter={16} align="middle">
        <Col span={20}>
          <div
            style={{
              textAlign: "left",
              color: color,
              wordBreak: "break-word",
              lineHeight: "1.4705882352941178",
              fontSize: "17px",
              paddingBottom: ".1rem",
            }}
          >
            {title}
          </div>
          <div
            style={{
              textAlign: "left",
              color: color,
              wordBreak: "break-word",
              lineHeight: "1.4705882352941178",
              fontSize: "40px",
            }}
          >
            ${amount}
          </div>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            shape="circle"
            style={{
              background: btnBg ? btnBg : "#fff",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
            onClick={onClickHandler}
          >
            {cloneElement(icon, {
              style: { fontSize: "24px", color: color },
            })}
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Status;
