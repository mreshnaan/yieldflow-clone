/* eslint-disable react/prop-types */
import { Row, Col, Card, Button } from "antd";

function Banner({ bg, title, content, color, buttons, svgImage }) {
  return (
    <Card
      style={{ borderRadius: "15px", backgroundColor: bg, padding: "30px" }}
    >
      <Row gutter={16} align="middle">
        <Col xs={24} sm={24} md={16} lg={16} >
          <div
            style={{
              textAlign: "left",
              color: color,
              fontWeight: "700",
              wordBreak: "break-word",
              lineHeight: "1.3",
              fontSize: "30px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {title}
          </div>
          <div
            style={{
              textAlign: "left",
              color: color,
              wordBreak: "break-word",
              lineHeight: "1.6",
              fontSize: "14px",
              paddingBottom: "2rem",
            }}
          >
            {content}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {buttons?.map((button, index) => (
              <Button
                key={index}
                style={{
                  ...button.style,
                }}
                type={button.type}
                href={button.path}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </Col>
        
        <Col xs={0} sm={0} md={8} lg={8} >
          <img style={{ maxWidth: "80%" }} src={svgImage} alt="Banner Image" />
        </Col>
      </Row>
    </Card>
  );
}

export default Banner;
