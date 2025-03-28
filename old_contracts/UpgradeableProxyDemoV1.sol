// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
* @title Training demo showing the simplicity of upgradeable contracts with the OpenZeppelin libraries!
* @notice This is the V1 implementation contract.
* @author Tony Nagy - Solidity / AWS Developer
*/

/// @dev The implementation contract is always derived from OwnableUpgradeable.
contract UpgradableProxyDemo is OwnableUpgradeable {
    /// @dev The order and naming of the state variables is crucial, they cannot be changed just expanded in new releases!
    uint256 private contractVersion; 

    /// @dev This function replaces the constructor of the actual implementation contract.
    function initialize() public initializer {        
        __Ownable_init(msg.sender);
        contractVersion = 1;
    }

    /// @dev This is the test function that returns the implementation contract's version (in this case: 1).
    function getContractVersion() public view returns (uint256) {
        return contractVersion;
    }
}