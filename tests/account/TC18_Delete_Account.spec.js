const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC_18_Delete_Account_[Passed]--------------------------------
//Method_1_DELETE_SINGLE_ACCOUNT 
test('Delete account for first time after login @account', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC18_DELETE_Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //defind modal constants 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addAccountOKX();
  await gqMain.deleteaccountOKX();
  //USDM
  await gqMain.addAccountBianceUSDM();
  await gqMain.deleteaccountUSDM();
  //coinm
  await gqMain.addAccountBianceCOINM();
  await gqMain.deleteaccountCOINM();
  await stopTrace();
});