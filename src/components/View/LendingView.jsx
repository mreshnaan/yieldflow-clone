import Banner from "../Cards/Banner";
import HeadLine from "../HeadLine";
import RenderItem from "../RenderItem";

function LendingView() {
  const buttons = [
    {
      title: "Browse Lending Services",
      path: "#lending-title",
      style: {
        fontWeight: "600",
        color: "rgb(75, 30, 150)",
        borderColor: "rgb(75, 30, 150)",
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
        color: "rgb(75, 30, 150)",
        borderColor: "rgb(75, 30, 150)",
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
        backgroundColor: "rgb(75, 30, 150)",
        boxShadow: "0 2px 0 rgba(5, 125, 255, 0.1)",
      },
    },
  ];

  const stackingItems = [
    {
      img: "https://app.yieldflow.com/static/media/usdt.6dc09781df56f4a369623b3cb8349479.svg",

      title: "Aave Lending USDT",
      tooltip_message:
        "USDT (Tether) is a stablecoin that is pegged to the value of the US dollar, designed to provide stability and avoid the volatility associated with other cryptocurrencies.",
      data: {
        apy: "2.71%",
      },
      buttons: StackingButtons,
    },
    {
      img: "https://app.yieldflow.com/static/media/snx.33a63b7ff36bfee20a6c308ed0796637.svg",

      title: "Aave Lending SNX",
      tooltip_message:
        "SNX (Synthetix Network Token) is the native cryptocurrency of the Synthetix protocol, a decentralized platform that enables the creation of synthetic assets that track the value of real-world assets, such as commodities, stocks, and currencies.",
      data: {
        apy: "2.89%",
      },
      buttons: StackingButtons,
    },
  ];

  return (
    <>
      <HeadLine title={"Lending"} />
      <Banner
        bg="#4b1e96"
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

      <RenderItem items={stackingItems} />
     
    </>
  );
}

export default LendingView;
