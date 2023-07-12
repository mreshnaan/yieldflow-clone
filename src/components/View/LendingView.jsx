import { Col, Row } from "antd";
import Banner from "../Cards/Banner";
import Staking from "../Cards/Staking";
import HeadLine from "../HeadLine";

function LendingView() {
  const buttons = [
    {
      title: "Browse Lending Services",
      path: "#lending-title",
      style: {
        fontWeight: "600",
        color: "#1061FE",
        borderColor: "#1061FE",
        fontSize: "14px",
        height: "40px",
        width: "250px",
        padding: "8px 22px",
        borderRadius: "10px",
        textTransform: "uppercase ",
      },
    },
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
  ];

  const StackingButtons = [
    {
      title: "Activate",
      disable: false,
      path: "",
      style: {
        color: "#fff",
        backgroundColor: "#1061fe",
        boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
      },
    },
  ];

  return (
    <>
      <HeadLine title={"Lending"} />
      <Banner
        bg="rgb(16, 97, 254)"
        color={"#fff"}
        buttons={buttons}
        title="New Lending services.
        Guaranteed returns."
        content="Get a guaranteed base APY and earn yields in just 7 days."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-3.e88eca3a900035daaafe.png"
        }
      />
      <HeadLine id="lending-title" title={"Ongoing batches"} />
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
              "https://app.yieldflow.com/static/media/usdt.6dc09781df56f4a369623b3cb8349479.svg"
            }
            title={"Aave Lending USDT"}
            tooltip_message={
              "USDT (Tether) is a stablecoin that is pegged to the value of the US dollar, designed to provide stability and avoid the volatility associated with other cryptocurrencies."
            }
            data={{
              apy: "2.71%",
            }}
            buttons={StackingButtons}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Staking
            img={
              "https://app.yieldflow.com/static/media/snx.33a63b7ff36bfee20a6c308ed0796637.svg"
            }
            title={"Aave Lending SNX"}
            tooltip_message={
              "SNX (Synthetix Network Token) is the native cryptocurrency of the Synthetix protocol, a decentralized platform that enables the creation of synthetic assets that track the value of real-world assets, such as commodities, stocks, and currencies."
            }
            data={{
              apy: "2.89%",
            }}
            buttons={StackingButtons}
          />
        </Col>
      </Row>
    </>
  );
}

export default LendingView;
