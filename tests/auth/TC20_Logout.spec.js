const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelper');

//-----------------------------TC_20_Logout_User_[Passed]--------------------------------
test('Log out of account @auth @logout', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC20_Logout');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Log out from account
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi')
  await gqMain.logout();
  await stopTrace();
})