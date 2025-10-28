const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC08_Place_order_validation_errors_with_empty_details_[Passed]--------------------------------
test('Place Order with mandatory details empty @order', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC08_order_place_validation_errors');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Place OKX Market Order
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.OKXInvalidOrderDetails();
  await stopTrace();
})