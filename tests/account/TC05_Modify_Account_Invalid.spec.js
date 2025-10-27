const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');

// helper to start/stop trace per test
async function startTracing(context, name) {
  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: `trace/${name}.zip` });
  };
}

//-----------------------------TC_05_Modify_Account_with_invalid_details[Passed]--------------------------------
test('Modify Account with invalid details @account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC05_Modify_Account_ivalid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with invalid details 
  await gqMain.login();
  await gqMain.modifyAccountOKXInvalidDetails();
  await stopTrace();
})