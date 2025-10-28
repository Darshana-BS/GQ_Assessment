const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC_06_Place_Binance_Coinm_Order_[FAIL]--------------------------------
test('Place Binance COINM order @order', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC06_Place_Binance_COINM_Order');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Place OKX Market Order
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  //ada-usdt
  await gqMain.placeBiance_COINM_DOTUSDTOrder('10','10','1');
  //ada-PERF
  // await gqMain.placeBiance_COINM_DOTUSDTOrder('5','10','1');
  await stopTrace();
})