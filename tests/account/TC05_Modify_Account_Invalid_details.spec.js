const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC_05_Modify_Account_with_invalid_details[FAIL]--------------------------------
test('Modify Account with invalid details @account @modifyaccount', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC05_Modify_Account_ivalid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with invalid details 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.modifyAccountUSDM('usdmedited', 'test');
  await stopTrace();
})