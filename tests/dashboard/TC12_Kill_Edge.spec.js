const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC12_Kill-Edge[Passed]--------------------------------
test('Kill-Edge for orders', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC12_kill-edge');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Kill edge
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.killedge();
  await stopTrace();
})