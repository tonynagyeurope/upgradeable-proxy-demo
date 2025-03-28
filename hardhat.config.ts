import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy'; // Must be installed and imported for Hardhat deployments!
import '@openzeppelin/hardhat-upgrades'; // Must be installed and imported for HRE to be able to deploy upgradeable contracts!!!

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
