var Greetings = artifacts.require('./Greetings.sol');

contract('Greetings', function(accounts){
  let greetingsInstance;


  before('set up instance for each test', async() =>{
    greetingsInstance = await Greeting.deployed();
  });
  it('should be able to change message', async() =>{
    greetingsInstance.setMessage('Hello dear');
    const message = greetingsInstance.getMessage();
    assert.equal(message, 'Hello dear');
  });
});
