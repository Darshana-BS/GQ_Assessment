const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC14_Switch_to_smart_order_routing[Passed]--------------------------------
test('Switch to smart order routing @dashboard', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC14_Smart_order_routing');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //switch to smart order 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.smartRouting();
  await stopTrace();
})