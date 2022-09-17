require('chai').use(require('chai-as-promised')).should();

const MainContract = artifacts.require('MainContract');

contract('MainContract', (accounts) => {
  it('', async () => {
    const MainContractInstance = await MainContract.deployed();
    const balance = await MainContractInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
});
