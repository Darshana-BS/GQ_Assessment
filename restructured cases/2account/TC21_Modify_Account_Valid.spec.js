const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelper');

//-----------------------------TC21__Modify_Account_with_valid_details[WIP]--------------------------------
test('Modify Account with Valid details @account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC21_Modify_Account_valid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with valid details
  await gqMain.login();
  await gqMain.addAccountOKX();
  await gqMain.modifyAccountOKXValidDetails();
  await stopTrace();
})