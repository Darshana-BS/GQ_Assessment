const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');

// helper to start/stop trace per test
async function startTracing(context, name) {
  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: `trace/${name}.zip` });
  };
}

//-----------------------------TC_20_Logout_User_[Passed]--------------------------------
test('Log out of account @auth @logout', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC20_Logout');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Log out from account
  await gqMain.login();
  await gqMain.logout();
  await stopTrace();
})
