import { Col, Row } from "antd";
import Banner from "../Cards/Banner";
import HeadLine from "../HeadLine";
// import RenderItem from "../RenderItem";
import StakingStatus from "../Cards/StakingStatus";
import StakingStatsWidget from "../Cards/StakingStatsWidget";

function StakingView() {
  return (
    <>
      <HeadLine title={"Staking"} />
      {/* <Banner
        bg="#4b1e96"
        color={"#fff"}
        title="Bake nodes and earn staking rewards in real time."
        content="Join fully transparent node pools to earn staking yields of up to 16.1% in real-time, without the complexity of running nodes yourself."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-3.e88eca3a900035daaafe.png"
        }
      /> */}
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "24px",
          paddingBottom: "70px",
        }}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
          <StakingStatus />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={14}>
          <StakingStatsWidget />
        </Col>
      </Row>

      {/* <RenderItem items={StakingItems} /> */}
    </>
  );
}

export default StakingView;
