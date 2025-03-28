// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/**
* @title Training demo showing the simplicity of upgradeable contracts with the OpenZeppelin libraries!
* @notice This is the V2 implementation contract.
* @author Tony Nagy - Solidity / AWS Developer
*/

//// @dev I emphasize V2 here again but the name remains the original contract name for consistency!

/// @dev The implementation contract is always derived from OwnableUpgradeable.
contract UpgradableProxyDemo is OwnableUpgradeable {
    /// @dev The order and naming of the state variables is crucial, they cannot be changed just expanded in new releases!
    uint256 private contractVersion; 
    string private author; /// @dev This is a new state variable in V2 STRICTLY declared just after the previousfirst (contractVersion)!

    /// @dev This function replaces the constructor of the actual implementation contract.
    function initialize() public initializer {        
        __Ownable_init(msg.sender);
        contractVersion = 2;
        author = "Tony Nagy";
    }

    /// @dev This is the test function that returns the implementation contract's version (in this case: 2).
    function getContractVersion() public view returns (uint256) {
        return contractVersion;
    }

    /// @dev This is a new  test function (expanding V1 contract this way too) that returns the author's namev(in this case: Tony Nagy).
    function getAuthor() public view returns (string memory) {
        return author;
    }    
}