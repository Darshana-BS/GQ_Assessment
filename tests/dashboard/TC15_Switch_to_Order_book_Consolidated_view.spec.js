const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC15_Order_Book_Consolidated_view[WIP]--------------------------------
test('Enable toggle for Consolidated View @dashboard', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC15_Order_Book_Consolidated_view');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //enable consolidated view 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.consolidatedView();
  await stopTrace();
})