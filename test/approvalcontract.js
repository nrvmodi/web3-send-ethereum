const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalContract', function (accounts) {

    it('Initiate contracts', async function () {

        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, 0x8CeF02a5b217e14cd05e8FfC8e42E48D0a79D067, 'Approver not matched');
    })

    it('takes a deposit', async function () {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1] });
        const bal = await web3.eth.getBalance(contract.address);
        assert.equal(bal, 1e+18, "amount did not match");
    });

    it('makes the transaction when approved, approver: ' + accounts[2], async function () {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1] });
        await contract.approve({ from: accounts[2] });
        const bal = await web3.eth.getBalance(contract.address);
        assert.equal(bal.tostring(), web3.utils.toBN(1e+18).toString(), "didn't transfer ether");
    });
})