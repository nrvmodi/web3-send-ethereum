# web3-send-ethereum
This project is based on web3 js.

![Application](app1.png)

### Start local ethereum environment using below command

`truffle develop`

### To test in a Metamask

`cd web`

#### Start web server

Install php server or any other.

`php -S localhost:8999`


#### Installation of Geth

`sudo add-apt-repository -y ppa:ethereum/ethereum`

`sudo apt-get update`

`sudo apt-get install ethereum`

#### Create new account in ehtereum Main network
`geth account new`

#### Start Geth will connect to main network

`geth`


#### For the testnet account

`geth --testnet account new`

#### Connect testnet

`geth --testnet --fast --cache 1024 --rpc --rpcapi eth,net,web3,personal`

#### To get javascript console

`geth attach http://127.0.0.1:8545`

`eth.syncing`

`personal.unlockAccount(eth.accounts[0])`

#### To migrate contract on Ropsten network

`truffle migrate --network ropsten`
