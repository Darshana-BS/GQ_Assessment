const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');

// helper to start/stop trace per test
async function startTracing(context, name) {
  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: `trace/${name}.zip` });
  };
}

//-----------------------------TC21__Modify_Account_with_valid_details[WIP]--------------------------------
test('Modify Account with Valid details @account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC21_Modify_Account_valid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with valid details
  await gqMain.login();
  // await gqMain.addAccountOKX();
  await gqMain.modifyAccountOKXValidDetails();
  await stopTrace();
})