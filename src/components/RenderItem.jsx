/* eslint-disable react/prop-types */
import { Col, Row } from "antd";
import Staking from "./Cards/Staking";

function RenderItem({ items }) {
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "24px",
          paddingBottom: "70px",
        }}
      >
        {items.map((item, index) => (
          <Col xs={24} sm={24} md={24} lg={12} key={index}>
            <Staking
              img={item.img}
              title={item.title}
              tooltip_message={item.tooltip_message}
              data={item.data}
              buttons={item.buttons}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default RenderItem;
