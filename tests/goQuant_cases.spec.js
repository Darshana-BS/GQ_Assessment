const { GoQuantMain } = require('../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');

// helper to start/stop trace per test
async function startTracing(context, name) {
  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: `trace/${name}.zip` });
  };
}

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
test('Add account for first time after login', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC03_Add Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
// Get started and add first account (first time visit after login) 
  await gqMain.login();
  await gqMain.addOKXAccount();
  await stopTrace();
});

//-----------------------------TC_04_Delete_Account_[Passed]--------------------------------
//Method_1_DELETE_SINGLE_ACCOUNT 
test('Delete account for first time after login', async ({ browser }) => {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC04_DELETE Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);

  await gqMain.login();
  await page.goto('https://test1.gotrade.goquant.io/admin')
  //defind modal constants 
  const modal = page.locator('[data-testid="delete-account-dialog-content"]');
  await page.getByTestId('delete-account-okx3').click();
  await expect(modal).toBeVisible();
  await expect (page.getByRole('heading', { name: 'Delete Account' })).toHaveText("Delete Account");
  await page.locator('#delete-confirmation').fill('DELETE');
  await modal.getByTestId ('delete-account-dialog-delete').click()
  await page.waitForSelector('text=Account removed successfully', { state: 'visible' });
  await page.getByText('Account removed successfully').click();

//Method_2_DELETE_ANY_ACCOUNT
// //get list of all accounts
//   await page.goto('https://test1.gotrade.goquant.io/admin')
//   const accountCells = page.locator('td[data-testid*="account_name"]');  
//   await page.waitForSelector('[data-testid="venues-table-cell-0-account_name"]', { state: 'visible', timeout: 10000 });
//   const accountNames = await accountCells.allTextContents();
//   console.log('Account Names:', accountNames); 

// //Delete the account addded 
//   const targetAccount = 'OKX3';

// // Locate all rows (all divs with .border-b)
//   const rows = page.locator('div .border-b');
//   const rowCount = await rows.count();
//   console.log('Total rows:', rowCount);

//     for (let i = 0; i < rowCount; i++) {
//     // Get the text content of the row
//         const rowText = await rows.nth(i).textContent();

//     // Check if this row contains the target account
//     if (rowText.includes(targetAccount)) {
//         console.log(`Found account "${targetAccount}" in row #${i + 1}`);
//         // Click the delete button inside the same row
//         const deleteButton = rows.nth(i).locator('[data-testid="delete-account-delete"]');
//         await page.locator('delete-confirmation').fill('DELETE');
//         await page.getByTestId('data-testid="delete-account-dialog-delete"').click();
//         await deleteButton.click();
//         await this.page.waitForSelector('text=Account removed successfully', { state: 'visible' });
//         await this.page.getByText('Account removed successfully').click();

//         //delete account modal 
//         await page.getByTestId('delete-account-automation-okx1')
//         console.log(`Deleted account: ${targetAccount}`);
//         break; // Stop after deleting the target account
//         }
//     }
  await stopTrace();
});


//-----------------------------TC_05_Modify_Account_[WIP]--------------------------------
test('Modify Account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC05_Modify Account');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Modify account  
  await gqMain.login();
  await gqMain.modifyOKXAccount();
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
  await gqMain.placeOKXMarketOrder();
  await stopTrace();
})

//-----------------------------TC_07_Validate_Order_details_[Passed]--------------------------------
test('Validate OKX Market Order details', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC07_Validate_order datails');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Validate Order Details 
  await gqMain.login();
  await gqMain.validateOrder_getAlgo_id();
  await stopTrace();
})

//-----------------------------TC08_validation_errors_with_empty_details_[Passed]--------------------------------
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
test('Add clear the Assets',  async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC10_addclear_assets');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //add clear assets 
  await gqMain.login();
  await gqMain.addClearAssetsforBTC();
  await stopTrace();
})

//-----------------------------TC11_cancelall_workingorders[Passed]--------------------------------
test.only('Cancel all working orders', async({browser})=>{
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC11_cancelall_workingorders');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //cancel all working orders
  await gqMain.login();
  await gqMain.cancelOrder();
  await stopTrace();
})

//-----------------------------TC_20_Logout_User_[Passed]--------------------------------
test('Log out of account', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC20_Logout');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  
  //Place OKX Market Order
  await gqMain.login();
  await gqMain.logout();
  await stopTrace();
})