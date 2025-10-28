const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC10_addclear_Assets_[WIP due to the dropdown vanishes issue]--------------------------------
test('Add clear the Assets @dashboard',  async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC10_add_clear_assets');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //add clear assets 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addClearAssetsforBTC();
  await stopTrace();
})