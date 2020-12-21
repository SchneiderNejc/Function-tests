pragma solidity ^0.4.18;
contract Greetings{
  string message;

  function Greetings() public{
    message = "I'm ready!";
  }
  function setMessage(string _message) public{
    message = _message;
  }
  function getMessage() public view returns(string){
    return message;
  }

  function addNumber(uint _value) public returns(uint, string){
    message = "aaaand its gone";
    return (_value, message);
  }
}
