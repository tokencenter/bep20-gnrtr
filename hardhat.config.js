// Chai configuration
const chai = require('chai');
chai.should();

// Hardhat plugins
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-web3');
require('hardhat-deploy');
require('solidity-coverage');

// Disable fetch for Node.js 14 compatibility
global.fetch = undefined;

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
    },
    coverage: {
      url: 'http://127.0.0.1:8555',
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },
  solidity: {
    version: '0.8.3',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
    deploy: './deploy',
  },
  mocha: {
    timeout: 20000,
  },
};
