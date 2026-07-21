require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
    networks: {
        iopn_testnet: {
              url: "https://testnet.rpc.iopn.tech", 
                    accounts: [process.env.PRIVATE_KEY]
                        }
                          }
                          };
                          