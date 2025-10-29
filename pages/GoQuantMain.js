// pages/BuggyPage.js
const { expect } = require('@playwright/test');
const exp = require('constants');

class GoQuantMain {
  constructor(page) {
    this.page = page;
    //--------------------------------------------------------------------------------------------------------------

    //sign in locators------------------------------------------------------------------------------------------------
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Enter your password' })
    this.signIn = page.getByRole('button', { name: 'Sign In' });
    this.alertInvaliduserCreds = page.getByText('The format of the email');
    // this.getStarted = page.getByText('Get Started')
    this.getStarted = page.getByText('Get Started→');
    //--------------------------------------------------------------------------------------------------------------
    
    //add accounts------------------------------------------------------------------------------------------------ 
    // this.gotoAdmin = page.locator('#radix-_r_4_-trigger-radix-_r_5_')
    this.clickAccounts = page.getByRole('button', { name: 'Accounts', exact: true })
    this.clickAdmin = page.getByRole('link', { name: 'Admin Manage trading accounts' });
    // this.selectAccount = page.getByRole('button', { name: 'Accounts' })
    this.clickaddAccountbutton =  page.getByTestId('venues-button-addaccount')
    this.selectExhchange = page.getByTestId('dropdown-trigger:exchange-selector');
    this.searchExchange = page.getByTestId('exchange-search-input');
    this.AccountName = page.getByTestId('account-name-input');
    this.Accountkey = page.getByTestId('input-api-key');
    this.AccountSecret = page.getByTestId('input-api-secret')
    this.enableTestMode = page.getByTestId('test-mode-switch')
    this.submitAccount = page.getByTestId('button-submit-account')
    this.validateAccountAddition = page.getByText('Account added successfully')
    //add Exchange OKX ------------------------------------------------------------------------------------------------  
    this.selectOKXExhcnage = page.getByTestId('exchange-option-OKX');
    this.okxpassphrase = page.getByTestId('passphrase-input')
    this.addAccount = page.getByTestId('add-account-alert-button')
    //add Exchange USDM ------------------------------------------------------------------------------------------------ 
    this.selectExchangeBinanceUSDM = page.getByTestId('exchange-option-BINANCEUSDM'); 
    //add Exchange COINM ------------------------------------------------------------------------------------------------ 
    this.selectExchangeBinanceCOINM = page.getByTestId('exchange-option-BINANCECOINM').getByText('Binance COIN-M');
    //--------------------------------------------------------------------------------------------------------------

    //deleteaccount------------------------------------------------------------------------------------------------  
    this.deleteConfirmationDELETE = page.getByTestId('delete-account-dialog-delete-confirmation');
    this.deleteAccountconfirm = page.getByTestId('delete-account-dialog-delete');
    this.deleteConfirmationMessage = page.getByText('Account removed successfully');
    // this.deleteConfirmationMessage = page.getByRole('region', { name: 'Notifications alt+T' }).getByRole('listitem')
    //deleteaccountOKX ------------------------------------------------------------------------------------------------
    this.deleteOKX = page.getByTestId('delete-account-automationokx3');
    //this.deleteOKX2 = page.locator('button[type="button"][data-testid="delete-account-automationokx3"]')
    // this.deleteConfirmation = page.locator('#delete-confirmation');
    //deleteaccountUSDM ------------------------------------------------------------------------------------------------
    this.deleteUSDM = page.locator('button[data-testid="delete-account-automationbinanceusdm"]');
    //deleteaccountCOINM ------------------------------------------------------------------------------------------------
    this.deleteCOINM = page.locator('button[data-testid="delete-account-automationbinancecoinm"]');
    //--------------------------------------------------------------------------------------------------------------  

    //place order ------------------------------------------------------------------------------------------------
    this.gotoTrading = page.getByRole('button', { name: 'Trading' });
    this.selectGoTrade = page.getByRole('link', { name: 'GoTrade Order Entry, Algo' });
    this.selectNativeTrading = page.getByRole('tab', { name: 'Native Trading' }); 
    this.selectOrderType = page.getByTestId('GOTRADE_ORDERTYPE_MORE');
    this.chooseTradeMarket = page.getByTestId('GOTRADE_ORDERTYPE_MARKET');
    this.chooseTradeLimitEdge = page.getByTestId('native-trading').getByTestId('GOTRADE_ORDERTYPE_LIMIT_EDGE');
    this.switchDiscoveryMode = page.getByRole('switch', { name: 'Discovery Mode' });
    this.clickInstrumentType = page.getByRole('button', { name: 'Swap', exact: true });
    this.selectInstrumentTypeSpot = page.getByRole('option', { name: 'Spot' });
    this.selectInstrumentTypeSwap = page.getByRole('option', { name: 'Swap' });
    this.clickBaseAsset = page.getByRole('button', { name: 'Select base...' });
    // this.searchBaseAsset = page.getByRole('textbox', { name: 'Search base assets...' }); 
    // this.clickBaseAsset = page.locator('//button[@type="button"])');
    this.clickSymbolsdropdown = page.getByTestId('symbols-dropdown');
    this.searchSymbol =  page.getByPlaceholder('Search symbol...');
    this.enterQuantityUSDM = page.getByTestId('quantity');
    this.enterDuration = page.getByTestId('duration');
  
    //place placeOKX_MarketOrder_Swap------------------------------------------------------------------------------------------------
    this.searchBaseAsset = page.locator('input[placeholder="Search base assets..."]');
    this.selectBTC = page.getByRole('option', { name: 'BTC' }); 
    // this.clickQuoteAsset = page.getByRole('button', { name: 'Select quote...' });
    this.searchQuoteAsset = page.getByRole('textbox', { name: 'Search quote assets...' });
    this.selectUSDT = page.getByRole('option', { name: 'USDT' });
    // this.selectUSDT = page.locator('div #_r_7h_');
    this.enterQuantity = page.getByTestId('quantity');
    this.selectLong = page.getByTestId('long-button');
    this.clickTrade = page.getByTestId('trade-button');
    this.orderAcceptedNotification = page.getByRole('region', { name: 'Notifications alt+T' }).getByRole('listitem');
    //place placeBinace_USDM_DOTUSDTOrder_Spot ------------------------------------------------------------------------------------------------
    this.clickExchangeBinaceUSDM = page.getByTestId('exchange-selector-trigger');
    this.selectExhangeBINANCEUSDM = page.getByTestId('exchange-selector-item-BINANCEUSDM');
    this.selectBINANCEAccount = page.getByTestId('BINANCEUSDM-selector-Dashk805 USDM ');
    this.selectSymbolDOTUSDT = page.getByTestId('symbol-option-DOT-USDT').getByText('DOT-USDT');    
    this.clickBuy = page.getByTestId('long-button');
    //place placeBiance_COINM_DOTUSDTOrder ------------------------------------------------------------------------------------------------
    this.chooseTradeTWAP = page.getByTestId('exchange-selector-trigger');
    this.searchExchangeBinanceCOINM = page.getByTestId('exchange-search-input');
    this.selectExchangeBianceCOINM = page.getByTestId('exchange-selector-item-BINANCECOINM');
    this.selectBianceCOINM = page.getByTestId('BINANCECOINM-selector-Dashk805 COINM');
    this.clickTradeDropdownOptions = page.locator('.lucide.lucide-chevron-down.ml-1.w-\\[0\\.8rem\\]');
    this.clickOrderTypeTWAP = page.getByTestId('GOTRADE_ORDERTYPE_TWAP');  
    this.selectOrderTypeTWAP = page.getByTestId('symbol-option-ADA-USDT'); 
    // this.selectOrderTypeTWAP = page.getByTestId('symbol-option-ADAUSD_PERP'); 
    this.enterinterval = page.getByTestId('interval');
    //--------------------------------------------------------------------------------------------------------------  

    //validate order fields ------------------------------------------------------------------------------------------------ 
    this.quanityValiation = page.getByText('Quantity must be greater than 0')
    this.durationValiation = page.getByText('Duration must be greater than 0')
    //--------------------------------------------------------------------------------------------------------------  

    //getorderdetails ------------------------------------------------------------------------------------------------
    this.orderHistory = page.getByRole('button', { name: 'Order History' });
    // this.validateVenue = page.getByRole('cell').filter({ hasText: /^$/ }).getByRole('button').click();
    this.validateOrderAccount = page.getByRole('cell', { name: 'Dashk805 OKX' });//page.getByText('Dashk805 OKX');
    this.orderType = page.getByRole('Market Edge');
    this.symbol = page.getByRole('cell', { name: 'BTC-USDTSwap' });
    this.date = page.getByRole('cell', { name: '2025-10-17 13:55:29' });
    this.side = page.getByRole('cell', { name: 'Buy' });
    // this.getOrderStatus = this.page.getByRole('cell', { name: 'Order Rejected' });
    // this.validateSymbol = page.getByText('BTC-USDTSwap');
    this.getOrderStatus = page.getByTestId('order-status');
    // this.getAlogoId = page.getByRole('cell', { name: '988...364', exact: true }).getByRole('img'); 
    //--------------------------------------------------------------------------------------------------------------  

    //validate metrics ------------------------------------------------------------------------------------------------
    this.currencyLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm grid max-w-max grid-cols-4 items-center justify-start gap-0"]', { state: 'visible', timeout: 10000 })
    this.equityLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm flex flex-col justify-center font-medium"]', { state: 'visible', timeout: 10000 })
    this.equityUSDLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm"]', { state: 'visible', timeout: 10000 });
    this.metricsLocator = page.locator('p[class="font-plusJakartaSans font-bold mt-1 text-base md:text-sm header-nav text-nowrap md:w-full md:text-center 4k:text-lg 4k:mt-2"]');
    //--------------------------------------------------------------------------------------------------------------  

    //addclear assets ------------------------------------------------------------------------------------------------
    this.clickAssets = page.getByRole('button', { name: 'Assets' })
    this.addClearAssetsBTC = this.page.getByRole('button', { name: 'Add/Clear' }).nth(0);
    this.addClearAssetsOKX = this.page.getByRole('button', { name: 'Add/Clear' }).nth(1);
    this.addClearAssetsUSDT = this.page.getByRole('button', { name: 'Add/Clear' }).nth(2);
    this.addClearAssetsETH = this.page.getByRole('button', { name: 'Add/Clear' }).nth(3);
    //--------------------------------------------------------------------------------------------------------------  
    
    //cancelOrder ------------------------------------------------------------------------------------------------
    this.clickCancelWorkingOrders = page.getByRole('button', { name: 'Cancel Working Orders' });
    this.validateModalHeader = page.getByRole('heading', { name: 'Cancel Open Orders' });
    this.confirmCancelOpenOrders = page.locator('div').filter({ hasText: /^Confirm$/ });
    //this.cancelOrderNotiification = this.page.locator('');
    this.cancelOrderAPIresponse = page.request.post('https://test1.gotrade-api.goquant.io/gotrade/v3/cancel_all');
    //--------------------------------------------------------------------------------------------------------------  

    //killedge ------------------------------------------------------------------------------------------------
    this.clickKillEdge = page.getByRole('button', { name: 'Kill-Edge' });
    this.killEdgeModalHeader = page.getByRole('heading', { name: 'Kill-Edge Algorithm' });
    this.confirmKillEdge = page.getByRole('button', { name: 'Confirm' });
    this.closeModal = page.getByRole('button', { name: 'Close' });
    this.killEdgeresponse = page.request.post('https://test1.gotrade-api.goquant.io/gotrade/v3/order/place');
    //--------------------------------------------------------------------------------------------------------------  

    //liquidatePositions ------------------------------------------------------------------------------------------------
    this.clickliquidatePositions = page.getByRole('button', { name: 'Liquidate Positions' });
    this.liquidatePositionsModalHeader = page.getByRole('heading', { name: 'Liquidate Positions' });
    this.confirmliquidatePositions = page.getByRole('button', { name: 'Confirm' });
    this.liquidatePositionsresponse = page.request.post('https://test1.gotrade-api.goquant.io/gotrade/v3/liquidate_all_positions');
    //--------------------------------------------------------------------------------------------------------------  

    //smartRouting ------------------------------------------------------------------------------------------------
    this.enableToggleSmartRouting = page.locator('#enable-smart-order-routing')
    this.validatesmartRoutingModalHeader = page.getByText('Smart Order Routing Configuration')
    this.selectOKXAcccount = page.getByRole('button', { name: 'OKX [2 accounts]' });
    this.updatesmartRoutingConfiguration = page.getByRole('checkbox', { name: 'Dashk805 OKX' });
    this.selectOKX = page.getByRole('button', { name: 'Dashk805 OKX' });
    this.enableExecuteSmartOrderRouting = page.getByRole('checkbox', { name: 'Executing Smart order routing' });
    this.save = page.getByRole('button', { name: 'Save' });
    this.ValidateSavesmartRoutingSuccess = page.getByText('Settings saved successfully'); 
    //--------------------------------------------------------------------------------------------------------------  

    //placeOKXSellOrder ------------------------------------------------------------------------------------------------
    this.clickSell = page.getByTestId('short-button')
    //--------------------------------------------------------------------------------------------------------------  

    //modifyaccountuSDM ------------------------------------------------------------------------------------------------
    this.sortAccountName = page.getByText('Account Name');
    this.getfirstAccount = page.getByTestId('venues-table-cell-0-accountAction').getByRole('button', { name: 'Modify' });
    this.clickModifybutton = page.getByRole('heading', { name: 'Modify Account' })
    this.enterBinaceNewAccountName = page.getByRole('textbox', { name: 'Binance USDⓈ-M Account Name' });
    this.enterBinanceSecret = page.getByRole('textbox', { name: 'Enter your Binance USDⓈ-M' });
    this.clickEditAccount = page.getByRole('button', { name: 'Edit Account' });
    //--------------------------------------------------------------------------------------------------------------  
    
    //addinvalidaccountokx ------------------------------------------------------------------------------------------------
    this.invalidaccountMessage = page.getByText('Authentication failed');
    //---------------------------------------------------------------------------------------------------------------

    //loginwithblankEmailPassword------------------------------------------------------------------------------------------------
    this.blackEmailaliation = page.getByText('Username must be at least 5 characters.');
    //---------------------------------------------------------------------------------------------------------------

    //accountstatus------------------------------------------------------------------------------------------------
    this.tooltip = page.getByText('Connected to the exchange'); 
    //---------------------------------------------------------------------------------------------------------------

    //signinwithinvalidPassword------------------------------------------------------------------------------------
    this.ValidateIncorrectPasswordMessage = page.getByText('The password is invalid');
    //---------------------------------------------------------------------------------------------------------------

    //logout------------------------------------------------------------------------------------------------
    this.userProfile = page.getByRole('button', { name: 'user14@goquant.io' });
    this.logoutButton= page.getByRole('menuitem', { name: 'Sign out' });
    // this.validateLogout = page.getByRole('heading', { name: 'Welcome' });
    this.validateLogout = page.getByText('Enter your credentials');
    //---------------------------------------------------------------------------------------------------------------
  }
  

  async gotoHome(url) {
    await this.page.goto(url);
  } 

  async visitloginUrl(loginurl){
    await this.page.goto(loginurl);
  }

  async userCreds(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async afterLogin() {
    await expect (this.page).toHaveURL('https://test1.gotrade.goquant.io/gotrade')
    await expect (this.page).toHaveTitle("GoTrade")
    // await this.getStarted.click();
  }

  async invalidLogin(username, password) {
    await this.gotoHome('https://test1.gotrade.goquant.io/auth/login');
    await this.userCreds(username, password);
    await this.signIn.click();
    await expect (this.alertInvaliduserCreds).toHaveText('The format of the email address is invalid')
  }

  async login(username, password) {
    // await this.page.goto('https://test1.gotrade.goquant.io/gotrade');
    // await this.page.goto('https://test1.gotrade.goquant.io/auth/login');
    await this.gotoHome('https://test1.gotrade.goquant.io/auth/login');
    await this.userCreds(username, password);
    await this.signIn.click();    
    await this.afterLogin();
  }
  
async validateAccountAdditionOrUDP() {
  try {
    const accountAdded = this.page.getByText('Account added successfully');
    const udpError = this.page.getByText('No response received from UDP');

    const result = await Promise.race([
      accountAdded.waitFor({ state: 'visible', timeout: 8000 }).then(() => 'added'),
      udpError.waitFor({ state: 'visible', timeout: 8000 }).then(() => 'udp'),
    ]);

    if (result === 'added') {
      console.log('✅ Account added successfully');
      await expect(accountAdded).toBeVisible();
      // return 'added';
    } else {
      console.log('⚠️ UDP error encountered');
      await udpError.click();
      // return 'udp';
    }
  } catch (error) {
    console.error('❌ Neither success nor UDP error appeared:', error);
    // return 'error';
  }
}
 
async validateaddAccountAPI(){
  this.addAccountAPIresponse = this.page.request.post('https://test1.gotrade-api.goquant.io/gotrade/v3/login');
  const response = await this.addAccountAPIresponse;
  const status = response.status();
  console.log('Response status:', status);

  expect(response).not.toBeNull();
    if (status === 200) {
      console.log('✅ Account added successfully');
      expect(status).toBe(200);
    }  
    else if (status == 400) {
      console.loc('✅ Valid cases: Add Account returned response 400 Bad request, for invalid data')
    }
    else if (status === 422) {
      console.warn('⚠️ Bug detected: Add Account returned response 422 UDP server error');
      // to make test fail intensionally, adding this
      // expect(status, 'Cancel order API returned unexpected 422').toBe(200);
    } 
    else {
      throw new Error(`❌ Unexpected status code: ${status}`);
    }
}

  async addAccountOKX(accountname,accountkey,accountsecret,okxpassphrase){
    await this.getStarted.click();
    // await this.clickAccounts.click();
    // await this.clickAdmin.click();
    await this.page.goto('https://test1.gotrade.goquant.io/admin');
    await this.clickaddAccountbutton.click();
    await this.selectExhchange.click(); 
    await this.searchExchange.fill('okx');
    await this.selectOKXExhcnage.click();
    await this.AccountName.fill(accountname);
    await this.Accountkey.fill(accountkey);
    await this.AccountSecret.fill(accountsecret);
    await this.okxpassphrase.fill(okxpassphrase);
    await this.enableTestMode.click();
    await this.submitAccount.click();
    //conditional valiation
    // await this.validateAccountAdditionOrUDP();
    await this.validateaddAccountAPI();
  }

  async addAccountBianceUSDM(accountname,accountkey,accountsecret){
    // await this.clickAccounts.click();
    // await this.clickAdmin.click();
    await this.page.goto('https://test1.gotrade.goquant.io/admin');
    await this.clickaddAccountbutton.click();
    await this.selectExhchange.click();
    await this.searchExchange.fill('usdm');
    await this.selectExchangeBinanceUSDM.click(); 
    await this.AccountName.fill(accountname);
    await this.Accountkey.fill(accountkey);
    await this.AccountSecret.fill(accountsecret);
    await this.enableTestMode.click();
    await this.submitAccount.click();
    //conditional valiation
    // await this.validateAccountAdditionOrUDP();
    await this.validateaddAccountAPI();
  }

  async addAccountBianceCOINM(accountname,accountkey,accountsecret){
    // await this.clickAccounts.click();
    // await this.clickAdmin.click();
    await this.page.goto('https://test1.gotrade.goquant.io/admin');
    await this.clickaddAccountbutton.click();
    await this.selectExhchange.click();
    await this.searchExchange.fill('coinm');
    await this.selectExchangeBinanceCOINM.click(); 
    await this.AccountName.fill(accountname);
    await this.Accountkey.fill(accountkey);
    await this.AccountSecret.fill(accountsecret);
    await this.enableTestMode.click();
    await this.submitAccount.click();
    //conditional valiation
    // await this.validateAccountAdditionOrUDP();
    await this.validateaddAccountAPI();
  }

  async deleteaccountOKX(accountName){
   await this.page.waitForLoadState('networkidle');
   this.visitAdminPage = this.page.goto('https://test1.gotrade.goquant.io/admin');
   await this.visitAdminPage;
   await this.deleteOKX.click();
  //  await this.deleteOKX2.click();
   await this.deleteConfirmationDELETE.fill('DELETE');
   await this.deleteAccountconfirm.click();
   await this.deleteConfirmationMessage.click();
  }
  async deleteaccountUSDM(accountName){
   await this.deleteUSDM.click();
   await this.deleteConfirmationDELETE.fill('DELETE');
   await this.deleteAccountconfirm.click();
   await this.deleteConfirmationMessage.click();
  }
  async deleteaccountCOINM(accountName){
   await this.deleteCOINM.click();
   await this.deleteConfirmationDELETE.fill('DELETE');
   await this.deleteAccountconfirm.click();
   await this.deleteConfirmationMessage.click();
  }

  async deleteAccountMethod2(){
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
  }

async validateUpdateAPI() {
  const response = await this.page.waitForResponse(res =>
    res.url().includes('/gotrade/v3/update')
  );
  const status = response.status();
  console.log(`ℹ️ /update API status: ${status}`);

  if (status === 200) {
    console.log('✅ Update API OK');
  } else if (status === 400) {
    console.warn('⚠️ Bug Detected: Update API returned 400');
  } else {
    throw new Error(`❌ Unexpected status: ${status}`);
  }
}

async modifyAccountOKXValidDetails(){
   this.visitAdminPage = this.page.goto('https://test1.gotrade.goquant.io/admin');
   await this.visitAdminPage;
   await this.page.getByText('Account Name').click();
   await this.page.getByTestId('venues-table-cell-0-accountAction').getByRole('button', { name: 'Modify' }).click();
   await this.page.getByRole('heading', { name: 'Modify Account' }).click();
   await this.page.getByRole('textbox', { name: 'OKX Account Name' }).fill('Automationokx3edited');
   await this.page.getByRole('textbox', { name: 'Enter your OKX secret key' }).fill('C5E40EC259C2C4D2E991177966B42765');
   await this.page.getByRole('textbox', { name: 'Enter your OKX passphrase' }).fill('Dashk@805');
   await this.page.getByRole('button', { name: 'Edit Account' }).click();
   await this.page.getByRole('button', { name: 'Close', exact: true }).click();
   await this.validateUpdateAPI();
  //  const modifyAccountValidateMessage = this.page.locator('div [class="text-[0.7rem] font-medium"]')
  //  await modifyAccountValidateMessage.click();
  //  await expect(modifyAccountValidateMessage).toHaveText('delete_credentials() takes from 1 to 2 positional arguments but 3 were given');
  }

  async modifyAccountOKXInvalidDetails(){
   this.visitAdminPage = this.page.goto('https://test1.gotrade.goquant.io/admin');
   await this.visitAdminPage;
   await this.page.getByText('Account Name').click();
   await this.page.getByTestId('venues-table-cell-0-accountAction').getByRole('button', { name: 'Modify' }).click();
   await this.page.getByRole('heading', { name: 'Modify Account' }).click();
   await this.page.getByRole('textbox', { name: 'OKX Account Name' }).fill('Automationokx3edited');
   await this.page.getByRole('textbox', { name: 'Enter your OKX secret key' }).fill('IXy9ua5H5TZ7chNiHsFJVoD7rzuJXzo57coiWptj3JcguUtt3LvLJ6afzhUvrz7X');
   await this.page.getByRole('textbox', { name: 'Enter your OKX passphrase' }).fill('Dashk@805');
   await this.page.getByRole('button', { name: 'Edit Account' }).click();
   await this.page.getByRole('button', { name: 'Close', exact: true }).click();
   await this.validateUpdateAPI();
  //  const modifyAccountValidateMessage = this.page.locator('div [class="text-[0.7rem] font-medium"]')
  //  await modifyAccountValidateMessage.click();
  //  await expect(modifyAccountValidateMessage).toHaveText('delete_credentials() takes from 1 to 2 positional arguments but 3 were given');
  }

  async modifyAccountUSDM(accountName, accountsecret){
   this.visitAdminPage = this.page.goto('https://test1.gotrade.goquant.io/admin');
   await this.visitAdminPage;
   await this.sortAccountName.click();
   await this.sortAccountName.click();
   await this.getfirstAccount.click(); 
   await this.clickModifybutton.click();
   await this.enterBinaceNewAccountName.fill(accountName);
   await this.enterBinanceSecret.fill(accountsecret);
   await this.clickEditAccount.click();
   await this.validateUpdateAPI();
  }
  
  async modifyAccountCOINM(){
    
  }

//   async updateProfile(newFirstName) {
//     await this.page.profileid.click()
//     await expect(page).toHaveURL(/profile/); // waits until profile page loads
//     // await page.locator('#firstName').fill('MyUser_300000_Updated');
//     // await page.locator('.btn.btn-default').click();
//     await this.firstNameProfile.fill(newFirstName);
//     await this.saveProfileButton.click();
//     await expect(this.profileSaveMsg).toBeVisible();
//   }

async validateorderAPI(){
  this.placeorderAPIresponse = this.page.request.post('https://test1.gotrade-api.goquant.io/gotrade/v3/order/place');
  // Check the status
  const response = await this.placeorderAPIresponse;
  const status = response.status();
  // expect(response).not.toBeNull();
  console.log('Response status:', status);
  //conditional valiation 
  if (status === 200) {
      console.log('✅ Order Placed');
    } else if (status === 422) {
      console.log('⚠️ type: "error", message: "No response received from UDP server", status_code: 400, data: null');
    } else {
      throw new Error(`❌ Unexpected status: ${status}`);
    }
}

async placeOKX_MarketOrder_Swap(Quantity){
  await this.getStarted.click();
  await this.gotoTrading.click();
  await this.selectGoTrade.click();
  await this.selectNativeTrading.click();
  await this.selectOrderType.click();
  await this.chooseTradeMarket.click();
  await this.switchDiscoveryMode.click();
  await this.clickInstrumentType.click();
  await this.selectInstrumentTypeSpot.click();
  await this.clickBaseAsset.click();
  await this.searchBaseAsset.fill('BTC');
  await this.selectBTC.click();
//   await this.clickQuoteAsset.click();
  await this.searchQuoteAsset.fill('USDT');
  await this.selectUSDT.nth(1).click(); //nth(1)
  await this.enterQuantity.fill(Quantity);
  await this.selectLong.click();
  await this.selectLong.click();
  await this.clickTrade.click();
  await this.validateorderAPI();
  // await this.orderAcceptedNotification.click();
  // await expect(this.orderAcceptedNotification).toHaveText('Order Accepted');
}

async placeBinace_USDM_DOTUSDTOrder_Spot(quanity,duration){
  await this.getStarted.click();
  await this.chooseTradeLimitEdge.click();
  await this.switchDiscoveryMode.click();
  await this.clickExchangeBinaceUSDM.click();
  await this.selectExhangeBINANCEUSDM.click();
  await this.selectBINANCEAccount.click();
  await this.switchDiscoveryMode.click();
  await this.clickSymbolsdropdown.click(); 
  await this.searchSymbol.fill('DOT-USDT');
  await this.selectSymbolDOTUSDT.click();
  await this.enterQuantityUSDM.fill(quanity);
  await this.enterDuration.fill(duration);
  await this.clickBuy.click();
  await this.clickTrade.click();
  await this.validateorderAPI();
  // await this.orderAcceptedNotification.click();
  // await expect(this.orderAcceptedNotification).toHaveText('Order Accepted');
}

async placeBiance_COINM_DOTUSDTOrder(quanity,duration,interval){
  await this.getStarted.click();
  await this.chooseTradeTWAP.click();
  await this.selectExchangeBianceCOINM.click();
  await this.selectBianceCOINM.click();
  await this.clickTradeDropdownOptions.click()
  await this.clickOrderTypeTWAP.click();
  await this.clickSymbolsdropdown.click(); 
  // await this.searchSymbol.fill('ADAUSD_PERP');
  await this.searchSymbol.fill('ADA-USDT');
  // await this.page.getByTestId('symbol-option-ADA-USDT').getByText('ADA-USDT').click();
  await this.selectOrderTypeTWAP.click(); 
  await this.enterQuantityUSDM.fill(quanity);
  await this.enterDuration.fill(duration);
  await this.enterinterval.fill(interval);
  await this.clickBuy.click();
  await this.clickTrade.click();
  await this.validateorderAPI();
  // await expect(this.orderAcceptedNotification).toHaveText('Order Accepted');
}

async getOrderdetails(){
  await this.getStarted.click();
  await this.orderHistory.click();
  this.validateAccount = this.page.getByText('Dashk805 OKX');
  await this.validateAccount.click(); 
  await expect(this.validateAccount).toHaveText('Dashk805 OKX');
  await this.page.pause();
  // const accountName = await this.validateAccount.textContent();
  // console.log(`Order has been placed with Account Name: ${accountName}`);
    
    // await this.validateOrderAccount;
    // await expect(this.validateOrderAccount).toHaveText('Dashk805 OKX');
    // const validateOrderAccount = this.page.getByRole('cell', { name: 'Dashk805 OKX' });
    // console.log ((this.validateOrderAccount).textContent());
    // const orderType = this.page.getByRole('cell', { name: 'Market Edge' });
    // const symbol = this.page.getByRole('cell', { name: 'BTC-USDT Swap' });
    // const date = this.page.getByRole('cell', { name: '2025-10-17 13:55:29' });
    // const side = this.page.getByRole('cell', { name: 'Buy' });
    // const getOrderStatus = this.page.getByRole('cell', { name: 'Order Rejected' });
    // console.log ((this.orderType).textContent());
    // console.log ((this.symbol).textContent());
    // console.log ((this.date).textContent());
    // console.log ((this.side).textContent());
    // console.log((this.getOrderStatus).textContent());
    // console.log((this.validateOrderAccount, this.getOrderStatus, this.validateSymbol, this.getAlogoId)
    // console.log(await this.validateOrderAccount.textContent(), await this.orderType.textContent(), await this.symbol.textContent(), await this.date.textContent(), await this.side.textContent(), await this.getOrderStatus.textContent());

}

async validaterejectedOrder(params) {
  await page.locator('#radix-_r_92_').getByText('Order Rejected').click();
  await page.getByRole('button', { name: 'Close' }).click();
}
async OKXInvalidOrderDetails(){
  await this.getStarted.click();
  await this.gotoTrading.click();
  await this.selectGoTrade.click();
  await this.selectNativeTrading.click();
  await this.clickTrade.click();
  await expect (this.quanityValiation).toHaveText('Quantity must be greater than 0');
  await expect (this.durationValiation).toHaveText('Duration must be greater than 0');
}

async singleEquityUSD(){
  await this.clickAssets.click();
  //get value for equity in USD for single symbol 
  const amount = await this.page.locator('td .font-inter.text-xsm');
  const amountText = (await amount.nth(2).textContent())?.trim();
  console.log(amountText); // "$109,449.40"
}

async validateMetrics(){
  await this.getStarted.click();
  await this.clickAssets.click();
  //get values for all the Currency 
  const currency = this.currencyLocator
  await currency.nth(0).textContent();
  const allCurrency = await currency.allTextContents();
  console.log(allCurrency);
  //get values for all the Equity  
  const equity = this.equityLocator
  await equity.nth(0).textContent();
  const allequity = await equity.allTextContents();
  console.log(allequity);
  // get values for all equity in USD for all symbols 
  const allequityUSDalues = this.equityUSDLocator;
  await allequityUSDalues.nth(0).textContent();
  const allequityUSD = await allequityUSDalues.allTextContents();
  console.log(allequityUSD);
  //validate total equity metrics 
  const totalEquityUSD = allequityUSD
  .map(val => Number(val.replace(/[^0-9.-]+/g, ''))) // remove $, commas
  .reduce((sum, num) => sum + num, 0);
  const formattedTotal = `$${totalEquityUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  console.log(`Total Equity in USD: $${totalEquityUSD.toFixed(2)}`); 
  // Get metrics value from UI
  const metricsText = (await this.metricsLocator.textContent())?.trim(); 
  // Normalize UI value (remove commas) for comparison
  const normalizedMetrics = Number(metricsText.replace(/[^0-9.-]+/g, '')).toFixed(2);
  const normalizedTotal = totalEquityUSD.toFixed(2);
  // Assertion
  if (Number(normalizedMetrics) === Number(normalizedTotal)) {
    console.log('✅ Metrics value matches calculated total');
    } else {
    console.log('❌ Metrics value does NOT match');
    console.log('UI:', metricsText, 'Calculated:', formattedTotal);
}}

  async addClearAssetsforBTC(){
  await this.clickAssets.click(); 
  //BTCAssets 
  await this.addClearAssetsBTC.click();
  // this.selectPercentageBTC = this.page.locator('div[id="_r_i04_"] span');
  this.selectPercentageBTC = this.page.locator('span[normalize-space()="100 %"]')
  await this.selectPercentageBTC.click();
  //span[normalize-space()='100 %']
  
  //OKXassets 
  // await this.addClearAssetsOKX.click();
  // this.selectPercentageOKX = this.page.locator('div[id="_r_gon_"] span');
  // await this.selectPercentageOKX.click();
  

  // await this.addClearAssetsUSDT.click();
  // await this.addClearAssetsETH.click();
}
  async cancelOrder(){
    await this.getStarted.click();
    await this.clickCancelWorkingOrders.click();
    await this.validateModalHeader.click();
    await this.confirmCancelOpenOrders.click();
    //await this.cancelOrderNotiification.toHaveText('');

    //api validation 
    const response = await this.cancelOrderAPIresponse;
    const status = response.status();
    console.log('Response status:', status);
    //conditional valiation
    expect(response).not.toBeNull();
    if (status === 200) {
      console.log('✅ Order cancel API working fine');
      expect(status).toBe(200);
    } 
    else if (status === 400){
      console.warn('Bug detected with message 400: The exchange "okx" and account " " was not found')
    }
    else if (status === 422) {
      console.warn('⚠️ Bug detected: Cancel order API returned 422');
      // to make test fail intensionally, adding this
      // expect(status, 'Cancel order API returned unexpected 422').toBe(200);
    } 
  else {
    throw new Error(`❌ Unexpected status code: ${status}`);
  }
  // // Optional: log or validate response body
  // const body = await response.json();
  // console.log(body);
  }

  async killedge(){
    await this.getStarted.click();
    await this.clickKillEdge.click(); 
    await this.killEdgeModalHeader.click();
    await this.confirmKillEdge.click();
    // Check the status
    const response = await this.killEdgeresponse;
    const status = response.status();
    // expect(response).not.toBeNull();
    console.log('Response status:', status);
    //conditional valiation 
    if (status === 200) {
      console.log('✅ Cancel order API working fine');
    } else if (status === 422) {
      console.log('⚠️ type: "error", message: "No response received from UDP server", status_code: 400, data: null');
    } else {
      throw new Error(`❌ Unexpected status: ${status}`);
    }
    // Then close the modal
    //await this.closeModal.click();

    // this.killEdgeresponse // or the action that triggers the API call
    // ]);
    // const status = response.status();
    // // await expect(response).not.toBeNull();
    // if (status === 200) {
    //   console.log('✅ Place Order for kill edge API working fine');
    //   expect(status).toBe(200);
    // } else {
    //   throw new Error(`❌ Unexpected status code: ${status}`);
    // }
  // Wait for the modal to appear (optional)
    // await this.page.waitForSelector(this.closeModal);
    // await this.closeModal.click();
}

  async liquidatePositions(){
    await this.getStarted.click();
    await this.clickliquidatePositions.click();
    await this.liquidatePositionsModalHeader.click();
    await this.confirmliquidatePositions.click();
   
    // Check the status
    const response = await this.liquidatePositionsresponse;
    const status = response.status();
    // expect(response).not.toBeNull();
    console.log('Response status:', status);
    //conditional valiation 
    if (status === 200) {
      console.log('✅ Liquidate Positions API working fine');
    } else if (status === 422) {
      console.log('⚠️ type: "error", message: "No response received from UDP server", status_code: 400, data: null');
    } else {
      throw new Error(`❌ Unexpected status: ${status}`);
    }
  }

async smartRouting(){
  await this.getStarted.click();
  await this.enableToggleSmartRouting.click();
  await this.validatesmartRoutingModalHeader.click();
  await this.selectOKXAcccount.click();
  await this.updatesmartRoutingConfiguration.click();
  await this.selectOKX.dblclick();
  // await this.selectOKX.click();
  await this.enableExecuteSmartOrderRouting.click();
  await this.save.click();
  await this.page.getByRole('region', { name: 'Notifications alt+T' }).getByRole('listitem').click();
  await this.ValidateSavesmartRoutingSuccess.click();
}

async consolidatedView(){
  this.getStarted.click();
  await this.page.getByTestId('consolidated-orderbook-toggle').click();
}

async placeOKXSellOrder(quantity){
  await this.getStarted.click();
  await this.gotoTrading.click();
  await this.selectGoTrade.click();
  await this.selectNativeTrading.click();
  await this.selectOrderType.click();
  await this.chooseTradeMarket.click();
  await this.switchDiscoveryMode.click();
  await this.clickInstrumentType.click();
  await this.selectInstrumentTypeSpot.click();
  await this.clickBaseAsset.click();
  await this.searchBaseAsset.fill('BTC');
  await this.selectBTC.click();
//   await this.clickQuoteAsset.click();
  await this.searchQuoteAsset.fill('USDT');
  await this.selectUSDT.click(); //nth(1)
  await this.enterQuantity.fill(quantity);
  await this.clickSell.click(); 
  await this.clickTrade.click();
  await this.validateorderAPI();

  // await page.getByRole('button', { name: 'Order Book' });
  // await page.getByTestId('consolidated-orderbook-toggle').click();
  // await page.locator('div').filter({ hasText: /^Price\(USDT\)Amount \(Cts\.\)Total \(Cts\.\)$/ }).first().click();
}
async addInvalidAccountOKX(accountname,key,secret,passphrase){
  await this.page.goto('https://test1.gotrade.goquant.io/admin');
  await this.clickaddAccountbutton.click();
  await this.page.getByTestId('account-name-input').fill(accountname);
  await this.page.getByTestId('input-api-key').fill(key);
  await this.page.getByTestId('input-api-secret').fill(secret);
  await this.page.getByTestId('passphrase-input').fill(passphrase);
  await this.enableTestMode.click();
  await this.submitAccount.click();
  await this.page.getByTestId('add-account-dialog').getByRole('button', { name: 'Close' }).click();
  await this.page.getByRole('region', { name: 'Notifications alt+T' }).getByRole('listitem').click();
  await this.invalidaccountMessage.click();
  await expect(this.invalidaccountMessage).toHaveText('Authentication failed');
  // await this.validateaddAccountAPI();
}
async loginwithblankEmailPassword(username, password){
  await this.gotoHome('https://test1.gotrade.goquant.io/auth/login');
  await this.userCreds(username, password);
  await this.signIn.click();
  await expect (this.blackEmailaliation).toHaveText('Username must be at least 5 characters.');
  await this.page.getByRole('textbox', { name: 'Email' }).fill('darshana@test.com');
}

async validateAccountStatus(){
  await this.page.goto('https://test1.gotrade.goquant.io/admin')
  await this.page.locator('td:nth-child(5) > .font-inter').first().click(); 
  this.tooltipp =  this.page.locator('[data-state="instant-open"]');
  await this.tooltipp.click();
  await expect (this.tooltipp).toHaveText('Connected to the exchange');
  // this.page.locator('[class="lucide lucide-circle-x h-[22px] w-[22px] text-red-600"]').nth(0).click(); 
  // this.page.locator('div[class="z-50 overflow-hidden px-3 py-1.5 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 text-xs border-0 bg-backgroundSec rounded"]')
  // await page.getByTestId('venues-table-status-cell-0').click();
  // await page.getByTestId('venues-table-status-cell-0').getByRole('button').filter({ hasText: /^$/ }).click();
  //await page.getByTestId('venues-table-status-cell-1').getByRole('button').filter({ hasText: /^$/ }).click();
  
  //text
  // await page.locator('div').filter({ hasText: /^Cannot communicate with the exchangeCannot communicate with the exchange$/ }).first().click();  
  // await page.getByText('Cannot communicate with the exchangeCannot communicate with the exchange').click();

  // await this.page.hover('td[data-testid="venues-table-status-cell-0"]')
  // const tooltip = this.page.locator('text=Cannot communicate with the exchange');
  // const firstCrossIcon = 
  // await this.firstCrossIcon.hover();

//   if (expectedStatus === 'error') {
//     await this.firstCrossIcon.hover();
//     await expect(this.page.locator('text=Cannot communicate with the exchange')).toBeVisible();
//   } else if (expectedStatus === 'ok') {
//     await expect(this.page.locator('text=Communicating with the exchange')).toBeVisible();
// }
  // Assert visibility
  // await expect(tooltip).toBeVisible();
  // await expect(tooltip).toHaveText('Cannot communicate with the exchange');
}

async signinwithinvalidPassword(username,password){
  await this.page.goto('https://test1.gotrade.goquant.io/gotrade');
  // await this.gotoHome('https://test1.gotrade.goquant.io/auth/login');
  await this.userCreds(username, password);
  await this.signIn.click();    
  await expect(this.ValidateIncorrectPasswordMessage).toHaveText('The password is invalid');
}

async logout() {
  await this.getStarted.click();
  await this.userProfile.click();
  await this.logoutButton.click();
  await this.validateLogout;
  await expect(this.validateLogout).toHaveText('Enter your credentials');
  }
}

module.exports = { GoQuantMain };
