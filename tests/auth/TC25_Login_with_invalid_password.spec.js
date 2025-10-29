const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../../tests/utils/tracingHelperforstructuredcases');

//----------------------TC25_Login_with_invalid_password[Pass]-------------------------------------------
test('Sign in with invalid password @auth', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC25_Login_with_invalid_password');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);

  // Sign in / login with invalid password 
  await gqMain.signinwithinvalidPassword('user14@goquant.io', 'invalid');
  await stopTrace();
});