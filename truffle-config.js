const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
const memonic = "predict remain sock solar grocery ranch pull palm sport palace captain shadow";
//const infuraAccessToken = '4fbfcd8e47c248d694f336963c3c3266';
const infuraAccessToken = '31f6a99e90064030ad9bac23ab904cc1';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      networkCheckTimeout: 60000,
      provider: function() {
        return new HDWalletProvider(memonic, "https://rinkeby.infura.io/v3/"+infuraAccessToken);
      },
      network_id: 4
    }
  }
};


/*
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      networkCheckTimeout: 60000,
      provider: function() {
        return new HDWalletProvider(memonic, "https://rinkeby.infura.io/v3/"+infuraAccessToken);
      },
      network_id: 4
    }
  }
};*/