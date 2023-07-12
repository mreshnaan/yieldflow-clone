import { Col, Row } from "antd";
import Banner from "../Cards/Banner";
import Staking from "../Cards/Staking";
import HeadLine from "../HeadLine";

function YflowView() {
  const buttons = [
    {
      title: "Learn More",
      path: "/learn-more",
      style: {
        color: "#1061FE",
        borderColor: "#1061FE",
        fontSize: "14px",
        height: "40px",
        width: "135px",
        padding: "8px 22px",
        borderRadius: "10px",
        textTransform: "uppercase ",
        fontWeight: "600",
      },
    },
    {
      title: "Buy $Yflow",
      path: "/buy-yflow",
      style: {
        fontWeight: "600",
        color: "#1061FE",
        borderColor: "#1061FE",
        fontSize: "14px",
        height: "40px",
        width: "135px",
        padding: "8px 22px",
        borderRadius: "10px",
        textTransform: "uppercase ",
      },
    },
  ];

  const StackingButtons = [
    {
      title: "APPROVE",
      disable: false,
      path: "",
      style: {
        color: "#fff",
        backgroundColor: "#1061fe",
        boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
      },
    },
    {
      title: "STAKE",
      disable: true,
      path: "",
    },
    {
      title: "STAKE",
      disable: true,
      path: "",
      style: {
        color: "#000000",
        backgroundColor: "transparent",
        borderColor: "#000000",
        boxShadow: "none",
      },
    },
    {
      title: "CLAIM REWARDS",
      disable: false,
      path: "",
      style: {
        color: "#3881ff",
        backgroundColor: "transparent",
        borderColor: "#3881ff",
        boxShadow: "none",
      },
    },
    {
      title: "RESTAKE",
      disable: false,
      path: "",
      style: {
        color: "#3881ff",
        backgroundColor: "transparent",
        borderColor: "#3881ff",
        boxShadow: "none",
      },
    },
  ];

  return (
    <>
      <HeadLine title={"yieldflow"} />
      <Banner
        bg="rgb(16, 97, 254)"
        color={"#fff"}
        buttons={buttons}
        title="Creating the Future of Finance Today."
        content="Yieldflow offers a wide variety of preselected and valuable digital assets that earn yields for you via smart contracts – hence your assets always belong to you."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-2.8212817a6181d4294181f105197139d0.svg"
        }
      />
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "24px",
          paddingBottom: "70px",
        }}
      >
        <Col xs={24} sm={24} md={24} lg={12}>
          <Staking
            img={
              "https://app.yieldflow.com/static/media/yflow.f7f20cc9cbb65517a4edff4becfba279.svg"
            }
            buttons={StackingButtons}
            title={"Yieldflow Staking No Lock"}
            tooltip_message={
              "YieldFlow is a DeFi token that powers the YieldFlow platform. Owners benefit from reduced fees and increased affiliate earnings."
            }
            data={{
              apy: "8.5%",
              pool: "in a month",
              currentStack: "0",
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Staking
            img={
              "https://app.yieldflow.com/static/media/yflow.f7f20cc9cbb65517a4edff4becfba279.svg"
            }
            buttons={StackingButtons}
            title={"Yieldflow Staking 6M Lock"}
            tooltip_message={
              "YieldFlow is a DeFi token that powers the YieldFlow platform. Owners benefit from reduced fees and increased affiliate earnings."
            }
            data={{
              apy: "12.5%",
              pool: "in a month",
              currentStack: "0",
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Staking
            img={
              "https://app.yieldflow.com/static/media/yflow.f7f20cc9cbb65517a4edff4becfba279.svg"
            }
            buttons={StackingButtons}
            title={"Yieldflow Staking 12M Lock"}
            tooltip_message={
              "YieldFlow is a DeFi token that powers the YieldFlow platform. Owners benefit from reduced fees and increased affiliate earnings."
            }
            data={{
              apy: "17.5%",
              pool: "in a month",
              currentStack: "0",
            }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Staking
            img={
              "https://app.yieldflow.com/static/media/yflow.f7f20cc9cbb65517a4edff4becfba279.svg"
            }
            buttons={StackingButtons}
            title={"Yieldflow Staking 3Y Lock"}
            tooltip_message={
              "YieldFlow is a DeFi token that powers the YieldFlow platform. Owners benefit from reduced fees and increased affiliate earnings."
            }
            data={{
              apy: "20.5%",
              pool: "in a month",
              currentStack: "0",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default YflowView;
