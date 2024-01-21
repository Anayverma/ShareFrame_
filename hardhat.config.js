require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/z0iYVk2XL-A5NfLBESJg6An1OQwx_91W",
      accounts: ["86406497dd7679907700ff5ca2565c2a8e24d214d79597fd5eff42f5e0675b0c"]
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
