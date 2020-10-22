var DynamiToken = artifacts.require("./DynamiToken.sol");
var DynamiTokenSale = artifacts.require("./DynamiTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DynamiToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(DynamiTokenSale, DynamiToken.address, tokenPrice);
  });
};
