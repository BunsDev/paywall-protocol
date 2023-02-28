const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("companyContract test", () => {
    let company, deployer;

    beforeEach(async () => {
        deployer = accounts[0];
        const CompanyContract = await ethers.getContractFactory("Company");
        company = await CompanyContract.deploy(
            1,
           "Netflix",
           deployer.address,
        );
      });
    
    describe("initialization", () => {
        it("gets the company name", async () => {
            const actaul = await company.name();
            expect(actaul).to.equal("Netflix");
        });

        it("gets the company id", async () => {
            const actaul = await company.id();
            expect(actaul).to.equal(1);
        });

        it("gets the company owner", async () => {
            const actaul = await company.companyOwner();
            expect(actaul).to.equal(deployer.address);
        });
    })

    describe("Register employee", () => {
        it("registers an employee", async () => {
            const transferTx = await company.registerEmployee("Paschal", "CTO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 1000);
            const result = await transferTx.wait();
        
            expect(result.events[0].args[0]).to.equal("Paschal");
            expect(result.events[0].args[1]).to.equal("CTO");
            expect(result.events[0].args[2]).to.equal("0xd321bdE4010a109e82cA5154bd412B84131050b6");
        });

    })

    describe("Edit employee", () => {
        it("modifies an employee info", async () => {
            await company.registerEmployee("Paschal", "CTO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 1000);
            const transferTx = await company.editEmployee("Paschal", "HR", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 2000, 0)
            const result = await transferTx.wait();
            
            expect(result.events[0].args[0]).to.equal("Paschal");
            expect(result.events[0].args[1]).to.equal("HR");
            expect(result.events[0].args[3]).to.equal(2000);
        });

    })

    describe("Query employees", () => {
        it("gets all employees info", async () => {
            await company.registerEmployee("Paschal", "CTO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 1000);
            await company.registerEmployee("Marschal", "HR", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 2000);
            await company.registerEmployee("Victor", "CEO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 3000);
            const result = await company.getAllEmployee()
            
            expect(result[0][0]).to.equal("Paschal");
            expect(result[1][0]).to.equal("CTO");
            expect(result[2][0]).to.equal("0xd321bdE4010a109e82cA5154bd412B84131050b6");
            expect(result[3][0]).to.equal(1000);

            expect(result[0][1]).to.equal("Marschal");
            expect(result[1][1]).to.equal("HR");
            expect(result[2][1]).to.equal("0xd321bdE4010a109e82cA5154bd412B84131050b6");
            expect(result[3][1]).to.equal(2000);

            expect(result[0][2]).to.equal("Victor");
            expect(result[1][2]).to.equal("CEO");
            expect(result[2][2]).to.equal("0xd321bdE4010a109e82cA5154bd412B84131050b6");
            expect(result[3][2]).to.equal(3000);
        });

    })

    describe("Pay employees", () => {
        it("Pay the employees", async () => {
            await company.registerEmployee("Paschal", "CTO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 1000);
            await company.registerEmployee("Victor", "HR", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 2000);
            
            const transferTx = await company.payEmployee({ value: tokens(3000) })
            const result = await transferTx.wait();

            expect(result.events[0].args[0]).to.equal("Netflix");
            expect(result.events[0].args[1]).to.equal("3000000000000000000000");
        });

        it("sends the funds to the employees", async () => {
            const balance1 = await ethers.provider.getBalance("0xd321bdE4010a109e82cA5154bd412B84131050b6");
            const balance2 = await ethers.provider.getBalance("0x00024FA2CBaF665aFaF272712261d600ef8AC1c4");

            await company.registerEmployee("Paschal", "CTO", "0xd321bdE4010a109e82cA5154bd412B84131050b6", 1000);
            await company.registerEmployee("Victor", "HR", "0x00024FA2CBaF665aFaF272712261d600ef8AC1c4", 2000);
            
            await company.payEmployee({ value: tokens(3000) })

            //const updatebalance1 = await ethers.provider.getBalance("0xd321bdE4010a109e82cA5154bd412B84131050b6");
            const updatebalance2 = await ethers.provider.getBalance("0x00024FA2CBaF665aFaF272712261d600ef8AC1c4");

            expect(updatebalance1 - balance1).to.equal(1000);
            expect(updatebalance2 - balance2).to.equal(2000);
        });

    })
})