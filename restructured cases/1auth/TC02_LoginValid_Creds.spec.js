const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelper');

//-----------------------------TC_02_Login_using_valid_creds_[Passed]--------------------------------
test('Login with valid user credentials @auth', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC02_LoginValid_Creds');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Enter valid credentials to signIn
  await gqMain.gotoHome('https://test1.gotrade.goquant.io/auth/login');
  await gqMain.userCreds('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.signIn.click();
  await gqMain.afterLogin();
  await stopTrace();
});