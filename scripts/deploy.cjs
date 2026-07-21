const hre = require("hardhat");

async function main() {
  console.log("Memulai deploy FarmVProfile...");
    const Contract = await hre.ethers.getContractFactory("FarmVProfile");
      const contract = await Contract.deploy();
        await contract.waitForDeployment();
          console.log(`Berhasil! FarmVProfile di-deploy ke alamat: ${contract.target}`);
          }

          main().catch((error) => {
            console.error(error);
              process.exitCode = 1;
              });
              