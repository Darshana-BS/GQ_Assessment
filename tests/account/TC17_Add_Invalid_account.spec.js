const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//----------------------TC_17_Add_Invalid_Account_[Passed]---------------------------------------
test('Add account with invalid details @account', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC17_Add_Invalid_Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Add invalid account 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addInvalidAccountOKX('invaliddetails','OKXkey is adedd','secret','passpharse');
  await stopTrace();
});