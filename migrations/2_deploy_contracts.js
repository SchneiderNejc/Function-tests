var ChainList = artifacts.require('./Greetings.sol');

module.exports = function(deployer){
  deployer.deploy(ChainList);
}
