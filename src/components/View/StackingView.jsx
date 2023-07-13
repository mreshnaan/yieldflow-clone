import Banner from "../Cards/Banner";
import HeadLine from "../HeadLine";
import RenderItem from "../RenderItem";


function StackingView() {
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
      title: "Unstack",
      disable: true,
      path: "",
    },
    {
      title: "CLAIM REWARDS",
      disable: true,
      path: "",
    },
    {
      title: "Withdraw",
      disable: true,
      path: "",
    },
  ];

  const stackingItems = [
    {
      img: "https://app.yieldflow.com/static/media/matic.48bd63d3135c740f1b010f6fcdda3644.svg",

      title: "Polygon (MATIC)",
      tooltip_message:
        "Polygon (formerly Matic Network) is a Layer 2 scaling solution for Ethereum that aims to improve transaction speeds and reduce fees while maintaining interoperability with Ethereum's main network.",
      data: {
        apy: "5.56 %",
      },
      buttons: StackingButtons,
    },

    {
      img: "https://app.yieldflow.com/static/media/ftm.3f8c71bb709ec37d4e3bb072c25d75b7.svg",

      title: "Fantom (FTM)",
      tooltip_message:
        "Fantom is a high-throughput blockchain platform that utilizes a consensus mechanism known as Lachesis to enable near-instant transaction confirmation and low fees.",
      data: {
        apy: "4.5 %",
      },
      buttons: StackingButtons,
    },
    {
      img: "https://app.yieldflow.com/static/media/aave.0a64aa4995ba06351b348cd954ce1e8d.svg",

      title: "Aave (AAVE)",
      tooltip_message:
        "Aave is a decentralized finance (DeFi) protocol that enables users to lend and borrow cryptocurrency assets through smart contracts, while also offering features such as flash loans and yield farming.",
      data: {
        apy: "6.36%",
      },
      buttons: StackingButtons,
    },
    {
      img: "https://app.yieldflow.com/static/media/sand.9eed52abdf5bcb5c26b99f7266296fbf.svg",

      title: "The Sandbox (SAND)",
      tooltip_message:
        "The Sandbox is a blockchain-based virtual gaming platform that allows players to create, share, and monetize their gaming experiences using non-fungible tokens (NFTs) and the SAND cryptocurrency.",
      data: {
        apy: "10.87%",
      },
      buttons: StackingButtons,
    },
  ];

  return (
    <>
      <HeadLine title={"Staking"} />
      <Banner
        bg="#4b1e96"
        color={"#fff"}
        title="Bake nodes and earn staking rewards in real time."
        content="Join fully transparent node pools to earn staking yields of up to 16.1% in real-time, without the complexity of running nodes yourself."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-3.e88eca3a900035daaafe.png"
        }
      />
      <HeadLine title={"Products"} />

      <RenderItem items={stackingItems} />
    </>
  );
}

export default StackingView;
