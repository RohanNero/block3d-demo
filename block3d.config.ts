import { Block3dConfig } from "block3d";

// This config file allows users to
//    - specify which pages/routes are restricted
//    - specify the type of restriction
//    - specify which addresses are restricted

// Adding a route to the `publicRoutes` array will allow anyone to view that page
export const block3dConfig: Block3dConfig = {
  publicRoutes: [""],
  strict: false, // Boolean indicating if rules are strict (every rule criteria must be met vs only one being required)
  rules: [
    {
      title: "USDC",
      type: "token",
      strict: false,
      contracts: [
        {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          chainId: 1, // Mainnet
          minimumBal: "1000000",
        },
        {
          address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          chainId: 42161, // Arbitrum
          minimumBal: "1000000",
        },
        {
          address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          chainId: 137, // Polygon
          minimumBal: "1000000",
        },
        {
          address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          chainId: 8453, // Base
          minimumBal: "1000000",
        },
      ],
    },
  ],
};
