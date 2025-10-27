const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelper');

//-----------------------------TC_01_Login_using_invalid_creds_[Passed]--------------------------------
test('Login with invalid user credentials @auth', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC01_LoginInvalid_Creds');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Enter invalid credentials to signIn
  await gqMain.gotoHome('https://test1.gotrade.goquant.io/auth/login');
  await gqMain.userCreds('darshana@goquant.com', 'Dashk@805');
  await gqMain.signIn.click();
  await expect (gqMain.alertInvaliduserCreds).toHaveText('The format of the email address is invalid')
  await stopTrace();
});