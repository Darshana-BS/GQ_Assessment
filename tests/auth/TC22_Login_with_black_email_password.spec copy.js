const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//----------------------TC22_Login_with_blank_email_password[WIP]-------------------------------------------
test('Sign in with blank email, password @auth', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC22_Login_with_black_email_password');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Sign in / login with black email / password 
  await gqMain.loginwithblankEmailPassword('', '');
  await stopTrace();
});