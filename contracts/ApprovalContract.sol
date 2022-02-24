pragma solidity ^0.8.11;

contract ApprovalContract {

    address public sender;
    address public receiver;
    address constant public approver = 0x8CeF02a5b217e14cd05e8FfC8e42E48D0a79D067;

    function deposit(address _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns (address) {
        return (approver);
    }

    function approve() external {
        require(msg.sender == approver);
        payable(receiver).transfer(address(this).balance);
    }
}