const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC_03_Add_Account_using_valid_details_OKX_[Passed]--------------------------------
test('Add account for OKX @account @addaccount', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC03_Add_Account_OKX');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Add OKX Account 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addAccountOKX('Automationokx3','5e702fa5-5438-4a81-9d0e-fb717a9b9b4e','C5E40EC259C2C4D2E991177966B42765','Dashk@805');
  await stopTrace();
});