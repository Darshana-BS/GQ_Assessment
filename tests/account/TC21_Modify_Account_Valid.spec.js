const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC21_Modify_Account_with_valid_details[FAIL]--------------------------------
test('Modify Account with Valid details @account @modifyaccount', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC21_Modify_Account_valid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with valid details
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.modifyAccountUSDM('usdmedited', 'IXy9ua5H5TZ7chNiHsFJVoD7rzuJXzo57coiWptj3JcguUtt3LvLJ6afzhUvrz7X');
  await stopTrace();
})