const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelper');

//-----------------------------TC_03_Add_Account_using_valid_details_[Passed]--------------------------------
test('Add account for first time after login @account', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC03_Add Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Get started and add first account (first time visit after login) 
  await gqMain.login();
  await gqMain.addAccountOKX();
  // await gqMain.addAccountBianceUSDM();
  // await gqMain.addAccountBianceCOINM();
  await stopTrace();
});