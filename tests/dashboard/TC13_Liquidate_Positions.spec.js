const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC13_Liquidate-Positions[Passed]--------------------------------
test('Liquidate Positions @dashboard', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC13_Liquidate_Positions');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //liquidate positions
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.liquidatePositions();
  await stopTrace();
})