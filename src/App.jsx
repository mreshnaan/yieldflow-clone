import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PurpleFi from "./pages/PurpleFi";
import Error from "./pages/Error";
import Staking from "./pages/Staking";
import LiquidityPool from "./pages/LiquidityPool";
import LPTokenStaking from "./pages/LPTokenStaking";
import Lending from "./pages/Lending";
import AffiliateLeadership from "./pages/AffiliateLeadership";
import { ConfigProvider } from "antd";

import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";

import { mainnet, polygon, optimism } from "wagmi/chains";

import { WagmiConfig, createConfig, configureChains } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";

import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import Profile from "./pages/Profile";
import BuyPurp from "./pages/BuyPurp";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism],
  [
    infuraProvider({ apiKey: "bb90504ac674448b86a043b6e7b30044" }),
    publicProvider(),
  ]
);

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "purplefi",
        jsonRpcUrl:
          "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "f295fe0a4ed274d8c2e341689e584b0f",
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

// Pass config to React Context Provider

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/buy-token",
      element: <BuyPurp />,
    },
    {
      path: "/portfolio",
      element: <Home />,
    },
    {
      path: "/purplefi",
      element: <PurpleFi />,
    },
    {
      path: "/staking",
      element: <Staking />,
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
            fontFamily: "Poppins,sans-serif !important",
            colorPrimary: "rgb(75, 30, 150)",
          },
        }}
      >
        <WagmiConfig config={config}>
          <Toaster position="top-center" reverseOrder={false} />
          <RouterProvider router={routers} />
        </WagmiConfig>
      </ConfigProvider>
    </>
  );
}

export default App;
