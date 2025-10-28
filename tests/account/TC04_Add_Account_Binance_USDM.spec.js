const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC_04_Add_Account_using_valid_details_USDM_[Passed]--------------------------------
test.only('Add account for Binance USDM @account @addaccount', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC04_Add_Account_Binance_USDM');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Add Biance USDM account  
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addAccountBianceUSDM('automationbinanceusdm','h9jKcavHaT8tgers5N68GZypMITnrUmCganKQwKjRQHBv3D4JmCMW2VwIpkShFfj','IXy9ua5H5TZ7chNiHsFJVoD7rzuJXzo57coiWptj3JcguUtt3LvLJ6afzhUvrz7X');
  await stopTrace();
});