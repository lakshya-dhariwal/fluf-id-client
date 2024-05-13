"use client"
import { WagmiProvider, createConfig, http } from "wagmi";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { type Chain } from "viem";

export const zama: Chain = {
  id: 8_009,
  name: "Zama Network",
  nativeCurrency: {
    decimals: 18,
    name: "Zama",
    symbol: "ZAMA",
  },
  rpcUrls: {
    default: { http: ["https://devnet.zama.ai"] },
  },
  blockExplorers: {
    default: { name: "Zama", url: "https://main.explorer.zama.ai" }
  },
  testnet: true,
};

export const inco: Chain = {
  id: 9_090,
  name: "Inco Gentry Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Inco",
    symbol: "INCO",
  },
  rpcUrls: {
    default: { http: ["https://testnet.inco.org"] },
  },
  blockExplorers: {
    default: { name: "Inco", url: "https://explorer.testnet.inco.org" }
  },
  testnet: true,
}

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [inco],
    transports: {
      // RPC URL for each chain
      [zama.id]: http(
        `https://devnet.zama.ai`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,

    // Required App Info
    appName: "Fluf",

    // Optional App Info
    appDescription: "Confidential Decentralized Identity",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = (props: { children:React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="minimal">{props.children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};