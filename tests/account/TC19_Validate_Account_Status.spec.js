const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC_19_Validate_Accounts_Status_[WIP]--------------------------------
test('Validate account status @account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC_19_Validate_Accounts_Status');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Validate account status 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  // await gqMain.addAccountOKX();
  await gqMain.validateAccountStatus();
  await stopTrace();
})
