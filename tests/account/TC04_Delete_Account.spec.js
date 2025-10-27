const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');

// helper to start/stop trace per test
async function startTracing(context, name) {
  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: `trace/${name}.zip` });
  };
}

//-----------------------------TC_04_Delete_Account_[Passed]--------------------------------
//Method_1_DELETE_SINGLE_ACCOUNT 
test('Delete account for first time after login @account', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC04_DELETE Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //defind modal constants 
  await gqMain.login();
  await gqMain.deleteaccountOKX();
  await gqMain.deleteaccountUSDM();
  await gqMain.deleteaccountCOINM();
  await stopTrace();
});