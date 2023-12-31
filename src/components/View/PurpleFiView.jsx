import Banner from "../Cards/Banner";
import HeadLine from "../HeadLine";
import JPGLogo from "../../assets/img/single-logo.jpg";
import RenderItem from "../RenderItem";

function PurpleFiView() {
  const buttons = [
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
    {
      title: "Buy $PURP",
      path: "/buy-yflow",
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
  ];

  const StakingButtons = [
    {
      title: "APPROVE",
      disable: false,
      path: "",
      style: {
        color: "#fff",
        backgroundColor: "rgb(75, 30, 150)",
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
        color: "rgb(75, 30, 150)",
        backgroundColor: "transparent",
        borderColor: "rgb(75, 30, 150)",
        boxShadow: "none",
      },
    },
    {
      title: "RESTAKE",
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

  const StakingItems = [
    {
      img: JPGLogo,
      title: "PurpleFi X Fund Staking No Lock",
      tooltip_message:
        "PurpleFi X Fund is a DeFi token that powers the PurpleFi X Fund platform. Owners benefit from reduced fees and increased affiliate earnings.",
      data: {
        apy: "12.5%",
        pool: "in a month",
        currentStack: "0",
      },
      buttons: StakingButtons,
    },
    {
      img: JPGLogo,
      title: "PurpleFi X Fund Staking 6M Lock",
      tooltip_message:
        "PurpleFi X Fund is a DeFi token that powers the PurpleFi X Fund platform. Owners benefit from reduced fees and increased affiliate earnings.",
      data: {
        apy: "12.5%",
        pool: "in a month",
        currentStack: "0",
      },
      buttons: StakingButtons,
    },
    {
      img: JPGLogo,
      title: "PurpleFi X Fund Staking 12M Lock",
      tooltip_message:
        "PurpleFi X Fund is a DeFi token that powers the PurpleFi X Fund platform. Owners benefit from reduced fees and increased affiliate earnings.",
      data: {
        apy: "17.5%",
        pool: "in a month",
        currentStack: "0",
      },
      buttons: StakingButtons,
    },
    {
      img: JPGLogo,
      title: "PurpleFi X Fund Staking 3Y Lock",
      tooltip_message:
        "PurpleFi X Fund is a DeFi token that powers the PurpleFi X Fund platform. Owners benefit from reduced fees and increased affiliate earnings.",
      data: {
        apy: "20.5%",
        pool: "in a month",
        currentStack: "0",
      },
      buttons: StakingButtons,
    },
  ];

  return (
    <>
      <HeadLine title={"PurpleFi X Fund"} />
      <Banner
        bg="#4b1e96"
        color={"#fff"}
        buttons={buttons}
        title="Creating the Future of Finance Today."
        content="PurpleFi offers a wide variety of preselected and valuable digital assets that earn yields for you via smart contracts – hence your assets always belong to you."
        svgImage={
          "https://app.yieldflow.com/static/media/big-card-2.8212817a6181d4294181f105197139d0.svg"
        }
      />



      <RenderItem items={StakingItems} />
    </>
  );
}

export default PurpleFiView;
