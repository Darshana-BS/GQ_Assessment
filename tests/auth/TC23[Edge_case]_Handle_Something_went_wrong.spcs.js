const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//-----------------------------TC23[Edge_case]_Handle_Something_went_wrong[Passed, Has_Bug]--------------------------------
test('Handel Something Went wrong', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC23_Handle_SomethingWentWrong');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  
  await gqMain.visitloginUrl('https://test1.gotrade.goquant.io/auth/login');
  await page.getByRole('heading', { name: 'Something went wrong !' }).click();
  await page.getByRole('button', { name: 'Try Again' }).click();       //Bug - Try again does not perform anything 
  await gqMain.login();
  await stopTrace();
})