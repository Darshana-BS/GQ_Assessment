const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelper');

//-----------------------------TC_05_Modify_Account_with_invalid_details[Passed]--------------------------------
test('Modify Account with invalid details @account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC05_Modify_Account_ivalid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with invalid details 
  await gqMain.login();
  await gqMain.addAccountOKX();
  await gqMain.modifyAccountOKXInvalidDetails();
  await stopTrace();
})