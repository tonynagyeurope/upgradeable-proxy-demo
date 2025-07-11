/**
 * @title UpgradableProxyDemo Deployment Script
 * @author Tony Nagy
 *
 * This script deploys the UpgradableProxyDemo contract using Hardhat's upgrades plugin,
 * with a specific, hardcoded deployer account.
 * 
 * Note: Handling private keys in code is not recommended for production. 
 * Consider using environment variables or a secure secrets management solution.
 */

const { ethers, upgrades } = require("hardhat");

// Hardcoded deployer account (private key)
// Replace "0xYOUR_PRIVATE_KEY_HERE" with your actual private key.
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

async function main() {
    try {
        console.log("Preparing deployment for UpgradableProxyDemo...");

        // Create a wallet instance using the hardcoded private key and Hardhat's provider.
        const deployerWallet = new ethers.Wallet(DEPLOYER_PRIVATE_KEY, ethers.provider);
        console.log("Using deployer account:", deployerWallet.address);

        // Retrieve the contract factory for UpgradableProxyDemo using the deployer wallet.
        // It is important to always use the same implementation contract name to maintain consistency.
        const UpgradableProxyDemoContract = await ethers.getContractFactory("UpgradableProxyDemo", deployerWallet);
        console.log("Contract factory retrieved successfully.");

        // Deploy the upgradeable proxy contract.
        // The "initialize" function will serve as the constructor for the implementation contract.
        const proxy = await upgrades.deployProxy(
            UpgradableProxyDemoContract,
            [],
            { initializer: "initialize" }
        );
        console.log("Deploying proxy contract...");

        // Wait for the deployment to be completed.
        await proxy.waitForDeployment();
        const proxyAddress = await proxy.getAddress();
        console.log("Proxy contract deployed at address:", proxyAddress);

        // Retrieve the address of the implementation contract.
        const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
        console.log("Implementation contract deployed at address:", implementationAddress);

    } catch (error) {
        console.error("Error during deployment:", error);
        // Throw the error to ensure Hardhat displays it properly.
        throw error;
    }
}

// Execute the deployment script and exit with the appropriate exit code.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Deployment failed:", error);
        process.exit(1);
    });
