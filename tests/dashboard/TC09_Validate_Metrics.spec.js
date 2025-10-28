const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC09_validation_Metrics_[Passed]--------------------------------
test('Validate Metrics @dashboard',  async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC09_validate_metrics');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //validate metrics
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.validateMetrics();
  await stopTrace();
})