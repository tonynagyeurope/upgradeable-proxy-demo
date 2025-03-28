# Upgradeable Transparent Contracts Demo

This repository demonstrates an implementation of upgradeable smart contracts using the Transparent Proxy pattern. The project includes two contract versions (V1 and V2), a Hardhat deployment script, and a GitHub Actions workflow for CI/CD. A screenshot of the successful Hardhat deployment is also provided.

[![CI Status](https://github.com/tonynagyeurope/upgradeable-proxy-demo/actions/workflows/setup.yml/badge.svg)](https://github.com/tonynagyeurope/upgradeable-proxy-demo/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Author

    Tony Nagy - Solidity / AWS Developer
    Website: https://www.tonynagy.io
    Email: info@tonynagy.io    

## Project Overview

Upgradeable contracts allow modifications to contract logic without losing the underlying state. This demo utilizes the Transparent Proxy pattern to delegate calls to the correct implementation contract. The project components include:

    Upgradeable Contracts: Two versions of the contract implementation demonstrating upgradeability.

    Deployment Script: A Hardhat script (deploy_upgradeable.js) that deploys both the proxy and the latest implementation (V2).

    CI/CD Pipeline: A GitHub Actions workflow (setup.yml) to automate testing, compilation, and deployment on push events.

    Deployment Verification: A screenshot (deployed-contracts.png) that confirms successful deployment on Hardhat.

## Prerequisites

Before proceeding, ensure you have the following installed:

    - Node.js (v18)

    - npm

    - Hardhat

    - A suitable code editor (e.g., VS Code)

## Installation

    Clone the repository and install the necessary dependencies:

        git clone https://github.com/tonynagyeurope/upgradeable-proxy-demo.git
        cd upgradeable-proxy-demo
        npm install

    Compilation and Deployment

        To compile the smart contracts, run:

            npx hardhat compile

    Deploy the contracts using the provided Hardhat deployment script:

            npx hardhat run scripts/deploy_upgradeable.js

    This script deploys the proxy contract along with the upgraded implementation (V2). Refer to the included deployed-contracts.png file for a visual confirmation of the deployment process.

## Continuous Integration / Continuous Deployment (CI/CD)         

    The project includes a GitHub Actions workflow (setup.yml) that performs the following steps on push events to the main branch:

        Checkout Code: Retrieves the latest code from the repository.

        Node.js Setup: Configures the Node.js environment (v18).

        Install Dependencies: Installs project dependencies via npm.

        Compilation: Compiles the smart contracts using Hardhat.

        Deployment: Deploys the proxy and upgraded contract (V2) using the deployment script.

        (Optional) Testing: Contains a commented section for testing and gas reporting.

    The relevant snippet from setup.yml is shown below:

        name: CI/CD

        on:
        push:
            branches: [main]

        jobs:
        test:
            runs-on: ubuntu-latest

            steps:
            - uses: actions/checkout@v3

            - name: Node.js setup
                uses: actions/setup-node@v3
                with:
                node-version: '18'

            - name: Installing dependencies
                run: npm install

            - name: Compiling project
                run: npx hardhat compile    

            - name: Deploying contract V2
                run: npx hardhat run scripts/deploy_upgradeable.js

            # Uncomment the following to enable testing and gas report generation
            # - name: Testing methods and making gas report
            #   run: npx hardhat test

## Project Structure

    Contracts:

        contracts/UpgradeableProxyDemo.sol: The main upgradeable proxy contract (V2).

        old_contracts/UpgradeableProxyDemoV1.sol: The initial version of the contract.

    Scripts:

        deploy_upgradeable.js: Deployment script for deploying the proxy and implementation contracts.

    CI/CD:

        .github/workflows/setup.yml: GitHub Actions configuration for automated CI/CD.

    Deployment Verification:

        deployed-contracts.png: Screenshot of the contract deployment on Hardhat.

## License

This project is open source and available under the MIT License.
Conclusion

This repository serves as a comprehensive demonstration of implementing upgradeable smart contracts using the Transparent Proxy pattern with Hardhat. Contributions, feedback, and suggestions for improvements are welcome.