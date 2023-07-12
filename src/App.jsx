import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Yflow from "./pages/Yflow";
import Error from "./pages/Error";
import Stacking from "./pages/Stacking";
import LiquidityPool from "./pages/LiquidityPool";
import LPTokenStaking from "./pages/LPTokenStaking";
import Lending from "./pages/Lending";
import AffiliateLeadership from "./pages/AffiliateLeadership";
import { ConfigProvider } from "antd";


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/yflow",
      element: <Yflow />,
    },
    {
      path: "/staking",
      element: <Stacking />,
    },
    {
      path: "/liquidity-pool",
      element: <LiquidityPool />,
    },
    {
      path: "/liquidity-pool-staking",
      element: <LPTokenStaking />,
    },
    {
      path: "/lending",
      element: <Lending />,
    },
    {
      path: "/affiliate-leadership",
      element: <AffiliateLeadership />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins,sans-serif !important"
          },
        }}
      >
        <RouterProvider router={routers} />
      </ConfigProvider>
    </>
  );
}

export default App;
