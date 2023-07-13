import Banner from "../Cards/Banner";
import HeadLine from "../HeadLine";
import RenderItem from "../RenderItem";

function LiquidityPoolView() {
  const buttons = [
    {
      title: "Browse pairs",
      path: "#liquidity-pool-title",
      style: {
        fontWeight: "600",
        color: "rgb(75, 30, 150)",
        borderColor: "rgb(75, 30, 150)",
        fontSize: "14px",
        height: "40px",
        width: "135px",
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
    {
      title: "Buy",
      disable: false,
      path: "",
      style: {
        color: "rgb(75, 30, 150)",
        backgroundColor: "transparent",
        borderColor: "rgb(75, 30, 150)",
        boxShadow: "none",
      },
    },
  ];

  const stackingItems = [
    {
      img: "https://app.yieldflow.com/static/media/link.24598efaf5620ad4a77f6b69a4b9f42e.svg",

      title: "LINK - ETH",
      tooltip_message:
        "Chainlink is a decentralized oracle network that provides off-chain data to smart contracts on the blockchain, enabling the execution of complex smart contract logic. Ethereum is a decentralized blockchain platform that enables developers to build and deploy decentralized applications (dApps) using smart contracts.",
      data: {
        apy: "6.5%",
      },
      buttons: StackingButtons,
    },

    {
      img: "https://app.yieldflow.com/static/media/matic.48bd63d3135c740f1b010f6fcdda3644.svg",

      title: "MATIC - ETH",
      tooltip_message:
        "Polygon (formerly Matic Network) is a Layer 2 scaling solution for Ethereum that aims to improve transaction speeds and reduce fees while maintaining interoperability with Ethereum's main network. Ethereum is a decentralized blockchain platform that enables developers to build and deploy decentralized applications (dApps) using smart contracts.",
      data: {
        apy: "4.5 %",
      },
      buttons: StackingButtons,
    },

    {
      img: "https://app.yieldflow.com/static/media/usdt.6dc09781df56f4a369623b3cb8349479.svg",

      title: "USDT - ETH",
      tooltip_message:
        "USDT (Tether) is a stablecoin that is pegged to the value of the US dollar, designed to provide stability and avoid the volatility associated with other cryptocurrencies. Ethereum is a decentralized blockchain platform that enables developers to build and deploy decentralized applications (dApps) using smart contracts.",
      data: {
        apy: "6.36%",
      },
      buttons: StackingButtons,
    },
    {
      img: "https://app.yieldflow.com/static/media/hex.f469927f594827e5fc6291a3ff922793.svg",

      title: "MANA - ETH",
      tooltip_message:
        "HEX is a cryptocurrency that operates on the Ethereum blockchain and rewards users for holding their tokens through a unique staking mechanism that generates interest over time. Ethereum is a decentralized blockchain platform that enables developers to build and deploy decentralized applications (dApps) using smart contracts.",
      data: {
        apy: "5.87%",
      },
      buttons: StackingButtons,
    },
  ];

  return (
    <>
      <HeadLine title={"Liquidity Pool"} />
      <Banner
        bg="#4b1e96"
        color={"#fff"}
        buttons={buttons}
        title="Liquidity mining just got easier with shared liquidity mining pools."
        content="Deposit your favorite coins into shared liquidity mining pools and mine popular coin pairs for high rewards and minimal fuss."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-3.e88eca3a900035daaafe.png"
        }
      />
      <HeadLine id="liquidity-pool-title" title={"Browse Pairs"} />

      <RenderItem items={stackingItems} />
    </>
  );
}

export default LiquidityPoolView;
