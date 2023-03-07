# Paywall

Paywall is a decentralized online financial service that allows you to pay all your employees with crypto currency with one click.

![screenshot](./frontend/assets/Screenshot%20(94).png)

# 🛠 Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (NextJs & Unit Testing)
- Ethers JS (Blockchain Interaction)
- Hardhat (Smart Contract Development Framework)
- Fantom (Blockchain network)

# ⛓ Blockchain Protocol used

- ERC-20 standard

# ⚙ Requirements For Initial Setup
- Install NodeJS, should work with any node version below 18.12.1
- Install Hardhat in your terminal. You can check to see if you have hardhat by running `npx hardhat`. To install hardhat, run `npm install --save-dev hardhat`.

# 🚀 Quick Start

📄 Clone or fork Paywall:

```
https://github.com/paschal533/Paywall.git
```
💿 Install all dependencies:

```
$ cd Paywall
$ npm install
```

# 🎗 Add enviroment varibles

Rename the file `.env.example` to `.env`

Add all the required enviroment varibles in the file

```
API_KEY = 
PRIVATE_KEY =
 
```

# 🛠 Test the Smart-contract:

```
npx hardhat test
```

# 🎗 Compile the Smart-contract:

```
npx hardhat compile
```
# 🔗 Deploy the Smart-contract:

```
npx hardhat run --network mainnet scripts/deploy.js
```

# 📄 interacting with the Frontend

```
cd frontend

npm install
```

# 🚴‍♂️ Run the App:

```
npm run dev
```

- Note :- This app was deployed to Fantom mainnet, so you need to connect your Metamask wallet to Fantom mainnet before you can Interact with the app.
 

# 📄 Smart-contract address

```
0x7aa744b6B1e0aF5ec1E2D00a4AA3199BF112FfbD
```

# 📜 Fantom Explorer

```
//https://ftmscan.com/address/0x7aa744b6B1e0aF5ec1E2D00a4AA3199BF112FfbD#code
```