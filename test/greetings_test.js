var Greetings = artifacts.require('./Greetings.sol');

contract('Greetings', function(accounts){
  let greetingsInstance;


  before('set up instance for each test', async() =>{
    greetingsInstance = await Greetings.deployed();
  });

  it('should be able to change message', async () =>{
    await greetingsInstance.setMessage('Hello dear');
    const message = await greetingsInstance.getMessage();
    assert.equal(message, 'Hello dear', 'Message must be: ', message);
  });
});
