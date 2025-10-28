const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC11_cancelall_workingorders[Passed]--------------------------------
test('Cancel all working orders @order @cancelorder', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC11_cancelall_workingorders');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //cancel all working orders
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.cancelOrder();
  await stopTrace();
})
