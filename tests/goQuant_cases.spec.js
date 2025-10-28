const { GoQuantMain } = require('../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('./utils/tracingHelper');

// // helper to start/stop trace per test
// async function startTracing(context, name) {
//   await context.tracing.start({ screenshots: true, snapshots: true });
//   return async () => {
//     await context.tracing.stop({ path: `trace/${name}.zip` });
//   };
// }

//-----------------------------TC_01_Login_using_invalid_creds_[Passed]--------------------------------
test('Login with invalid user credentials', async ({ browser }) => {
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

//-----------------------------TC_02_Login_using_valid_creds_[Passed]--------------------------------
test('Login with valid user credentials', async ({ browser }) => {
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

//-----------------------------TC_03_Add_Account_using_valid_details_[Passed]--------------------------------
test.only('Add account for all Symbols', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC03_Add Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Get started and add first account (first time visit after login) 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addAccountOKX();
  await gqMain.addAccountBianceUSDM();
  await gqMain.addAccountBianceCOINM();
  await stopTrace();
});

//-----------------------------TC_04_Delete_Account_[Passed]--------------------------------
//Method_1_DELETE_SINGLE_ACCOUNT 
test('Delete account for first time after login', async ({ browser }) => {
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

//-----------------------------TC_05_Modify_Account_with_invalid_details[Passed]--------------------------------
test('Modify Account with invalid details', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC05_Modify_Account_ivalid_details');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account with invalid details 
  await gqMain.login();
  await gqMain.modifyAccountOKXInvalidDetails();
  await stopTrace();
})

//-----------------------------TC_06_Place_OKX_Market_Order_[Passed]--------------------------------
test('Place OKX Market Order', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC06_Place_OKX_Marekt Order');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Place OKX Market Order
  await gqMain.login();
  await gqMain.placeOKX_MarketOrder_Swap();
  await gqMain.placeBinace_USDM_DOTUSDTOrder_Spot();
  await gqMain.placeBiance_COINM_DOTUSDTOrder();
  await stopTrace();
})

//-----------------------------TC_07_Get_Order_details_[WIP]--------------------------------
// test('Get Order details', async ({browser})=> {
//   const context = await browser.newContext();
//   const stopTrace = await startTracing(context, 'TC07_Get_order datails');
//   const page = await context.newPage();
//   const gqMain = new GoQuantMain(page);
//   //Validate Order Details 
//   await gqMain.login();
//   await gqMain.getOrderdetails();
//   await stopTrace();
// })

//-----------------------------TC08_Place_order_validation_errors_with_empty_details_[Passed]--------------------------------
test('Place Order with mandatory details empty', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC08_validation_errors');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Place OKX Market Order
  await gqMain.login();
  await gqMain.OKXInvalidOrderDetails();
  await stopTrace();
})

//-----------------------------TC09_validation_Metrics_[Passed]--------------------------------
test('Validate Metrics',  async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC09_validate_metrics');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //validate metrics
  await gqMain.login();
  await gqMain.validateMetrics();
  await stopTrace();
})

//-----------------------------TC10_addclear_Assets_[WIP]--------------------------------
// test('Add clear the Assets',  async({browser})=>{
//   const context = await browser.newContext();
//   const stopTrace = await startTracing(context, 'TC10_addclear_assets');
//   const page = await context.newPage();
//   const gqMain = new GoQuantMain(page);
//   //add clear assets 
//   await gqMain.login();
//   await gqMain.addClearAssetsforBTC();
//   await stopTrace();
// })

//-----------------------------TC11_cancelall_workingorders[Passed]--------------------------------
test('Cancel all working orders', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC11_cancelall_workingorders');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //cancel all working orders
  await gqMain.login();
  await gqMain.cancelOrder();
  await stopTrace();
})

//-----------------------------TC12_Kill-Edge[Passed]--------------------------------
test('Kill-Edge for orders', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC12_kill-edge');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Kill edge
  await gqMain.login();
  await gqMain.killedge();
  await stopTrace();
})

//-----------------------------TC13_Liquidate-Positions[Passed]--------------------------------
test('Liquidate Positions', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC13_Liquidate-Positions');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //liquidate positions
  await gqMain.login();
  await gqMain.liquidatePositions();
  await stopTrace();
})

//-----------------------------TC14_Switch_to_smart_order_routing[Passed]--------------------------------
test('Switch to smart order routing', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC14_Smart_order_routing');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //switch to smart order 
  await gqMain.login();
  await gqMain.smartRouting();
  await stopTrace();
})

//-----------------------------TC15_Order_Book_Consolidated_view[Passed]--------------------------------
test('Enable toggle for Consolidated View', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC15_Order_Book_Consolidated_view');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //enable consolidated view 
  await gqMain.login();
  await gqMain.consolidatedView();
  await stopTrace();
})

//-----------------------------TC16_Place_Short_Sell_order[Passed]--------------------------------
test('Place a short / sell order', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC16_Place_Short_Sell_order');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //place short / sell order 
  await gqMain.login();
  await gqMain.placeOKXSellOrder();
  await stopTrace();
})

//----------------------TC17_Add_Invalid_Account_[Pass]---------------------------------------
test('Add account with invalid details', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC17_Add_Invalid_Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Add invalid account 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.addInvalidAccountOKX();
  await stopTrace();
});

//-----------------------------TC_19_Validate_Accounts_Status_[WIP]--------------------------------
// test('Log out of account', async ({browser})=> {
//   const context = await browser.newContext();
//   const stopTrace = await startTracing(context, 'TC_19_Validate_Accounts_Status_');
//   const page = await context.newPage();
//   const gqMain = new GoQuantMain(page);
//   //Validate account status 
//   await gqMain.login();
//   await gqMain.addAccountOKX();
//   await gqMain.validateAccountStatus();
//   await stopTrace();
// })

//-----------------------------TC_20_Logout_User_[Passed]--------------------------------
test('Log out of account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC20_Logout');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Log out from account
  await gqMain.login();
  await gqMain.logout();
  await stopTrace();
})

//-----------------------------TC21__Modify_Account_with_valid_details[WIP]--------------------------------
test('Modify Account with Valid details', async ({browser})=> {
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

//----------------------TC22_Login_with_blank_email_password[WIP]-------------------------------------------
test('Sign in with blank email, password', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC22_Login_with_black_email_password');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  // Sign in / login with black email / password 
  await gqMain.loginwithblankEmailPassword('', '');
  await stopTrace();
});

//-----------------------------TC23[Edge_case]_Handle_Something_went_wrong[Passed, Has_Bug]--------------------------------
test('Handel Something Went wrong', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC22_Handle_SomethingWentWrong');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  
  await gqMain.visitloginUrl('https://test1.gotrade.goquant.io/auth/login');
  await page.getByRole('heading', { name: 'Something went wrong !' }).click();
  await page.getByRole('button', { name: 'Try Again' }).click();       //Bug - Try again does not perform anything 
  await gqMain.login();
  await stopTrace();
});

