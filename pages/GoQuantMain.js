// pages/BuggyPage.js
const { expect } = require('@playwright/test');
const exp = require('constants');

class GoQuantMain {
  constructor(page) {
    this.page = page;
    //sign in locators 
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Enter your password' })
    this.signIn = page.getByRole('button', { name: 'Sign In' });
    this.alertInvaliduserCreds = page.getByText('The format of the email');
    this.getStarted = page.getByText('Get Started')

    //add accounts 
    // this.gotoAdmin = page.locator('#radix-_r_4_-trigger-radix-_r_5_')
    this.clickAccounts = page.getByRole('button', { name: 'Accounts', exact: true })
    this.clickAdmin = page.getByRole('link', { name: 'Admin Manage trading accounts' });
    // this.checkAccounts = page.getByRole('button', { name: 'Accounts', exact: true })
    // this.selectAccount = page.getByRole('button', { name: 'Accounts' })
    this.clickaddAccountbutton =  page.getByTestId('venues-button-addaccount')
    this.selectExhcnage = page.getByTestId('dropdown-trigger:exchange-selector');
    this.searchExchange = page.getByTestId('exchange-search-input');

    //add OKX Exchange 
    this.selectOKXExhcnage = page.getByTestId('exchange-option-OKX');
    this.okxAccountName = page.getByTestId('account-name-input');
    this.okxAccountkey = page.getByTestId('input-api-key')
    this.okxSecret = page.getByTestId('input-api-secret')
    this.okxpassphrase = page.getByTestId('passphrase-input')
    this.enableTestMode = page.getByTestId('test-mode-switch')
    this.addAccount = page.getByTestId('add-account-alert-button')
    this.submitAccount = page.getByTestId('button-submit-account')
    this.validateAccountAddition = page.getByText('Account added successfully')
    
    //delete account 
    this.selectDeleteAccount = page.getByTestId('delete-account-okx3');
    this.deleteConfirmation = page.locator('#delete-confirmation');
    this.deleteConfirmationMessage = page.getByText('Account removed successfully');
    
    //place order
    this.gotoTrading = page.getByRole('button', { name: 'Trading' });
    this.selectGoTrade = page.getByRole('link', { name: 'GoTrade Order Entry, Algo' });
    this.selectNativeTrading = page.getByRole('tab', { name: 'Native Trading' }); 
    this.selectOrderType = page.getByTestId('GOTRADE_ORDERTYPE_MORE');
    this.chooseMarket = page.getByTestId('GOTRADE_ORDERTYPE_MARKET');
    this.switchtoDiscoveryMode = page.getByRole('switch', { name: 'Discovery Mode' });
    this.clickInstrumentType = page.getByRole('button', { name: 'Swap', exact: true });
    this.selectInstrumentTypeSpot = page.getByRole('option', { name: 'Spot' });
    this.clickBaseAsset = page.getByRole('button', { name: 'Select base...' });
    // this.searchBaseAsset = page.getByRole('textbox', { name: 'Search base assets...' }); 
    // this.clickBaseAsset = page.locator('//button[@type="button"])');
    this.searchBaseAsset = page.locator('input[placeholder="Search base assets..."]');
    this.selectBTC = page.getByRole('option', { name: 'BTC' }); 
    // this.clickQuoteAsset = page.getByRole('button', { name: 'Select quote...' });
    this.searchQuoteAsset = page.getByRole('textbox', { name: 'Search quote assets...' });
    this.selectUSDT = page.getByRole('option', { name: 'USDT' });
    this.enterQuantity = page.getByTestId('quantity');
    this.selectLong = page.getByTestId('long-button');
    this.clickTrade = page.getByTestId('trade-button');
    this.orderAcceptedNotification = page.getByRole('region', { name: 'Notifications alt+T' }).getByRole('listitem');

    //validate order fields 
    this.quanityValiation = page.getByText('Quantity must be greater than 0')
    this.durationValiation = page.getByText('Duration must be greater than 0')

    //validate order 
    this.orderHostory = page.getByRole('button', { name: 'Order History' });
    // this.validateVenue = page.getByRole('cell').filter({ hasText: /^$/ }).getByRole('button').click();
    this.validateOrderAccount = page.getByText('Dashk805 OKX');
    this.validateSymbol = page.getByText('BTC-USDTSwap');
    this.getOrderStatus = page.getByTestId('order-status');
    this.getAlogoId = page.getByRole('cell', { name: '988...364', exact: true }).getByRole('img'); 

    //validate metrics 
    this.currencyLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm grid max-w-max grid-cols-4 items-center justify-start gap-0"]', { state: 'visible', timeout: 10000 })
    this.equityLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm flex flex-col justify-center font-medium"]', { state: 'visible', timeout: 10000 })
    this.equityUSDLocator = page.locator('tr [class="font-inter text-xsm 4k:text-sm"]', { state: 'visible', timeout: 10000 });
    this.metricsLocator = page.locator('p[class="font-plusJakartaSans font-bold mt-1 text-base md:text-sm header-nav text-nowrap md:w-full md:text-center 4k:text-lg 4k:mt-2"]');
    //logout
    this.userProfile = page.getByRole('button', { name: 'user14@goquant.io' });
    this.logoutButton= page.getByRole('menuitem', { name: 'Sign out' });
    this.validateLogout = page.getByRole('heading', { name: 'Welcome' })
  }

  async gotoHome(url) {
    await this.page.goto(url);
  }

  async userCreds(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async afterLogin() {
    await expect (this.page).toHaveURL('https://test1.gotrade.goquant.io/gotrade')
    await expect (this.page).toHaveTitle("GoTrade")
  }

  async login(username, password) {
    await this.gotoHome('https://test1.gotrade.goquant.io/auth/login');
    await this.userCreds('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await this.signIn.click();
    await this.afterLogin();
  }
  
  async addOKXAccount(){
    await this.getStarted.click();
    await this.clickAccounts.click();
    await this.clickAdmin.click();
    await this.clickaddAccountbutton.click();
    await this.selectExhcnage.click(); 
    await this.searchExchange.fill('okx');
    await this.selectOKXExhcnage.click();
    await this.okxAccountName.fill('Automation OKX3');
    await this.okxAccountkey.fill('5e702fa5-5438-4a81-9d0e-fb717a9b9b4e');
    await this.okxSecret.fill('C5E40EC259C2C4D2E991177966B42765');
    await this.okxpassphrase.fill('Dashk@805');
    await this.enableTestMode.click();
    await this.submitAccount.click();
    // Wait for the Add Account API to complete with 200 status
//    const response = await this.page.waitForResponse(resp => 
//     resp.url() === 'https://test1.gotrade-api.goquant.io/gotrade/v2/credentials' && resp.status() === 200
// );

  // Optional: get JSON response
//   const body = await response.json();
//   console.log('API Response:', body);

    // await this.page.waitForSelector('text=Account added successfully', { state: 'visible'  });
    // await this.page.getByText('Account added successfully').click();
  }
  async deleteaccount(){
    await page.goto('https://test1.gotrade.goquant.io/admin')
    const modal = page.locator('[data-testid="delete-account-dialog-content"]'); 
    await selectDeleteAccount.click();
    await expect(modal).toBeVisible();
    await expect (page.getByRole('heading', { name: 'Delete Account' })).toHaveText("Delete Account");
    await deleteConfirmation.fill('DELETE');
    await modal.getByTestId ('delete-account-dialog-delete').click()
    await page.waitForSelector('text=Account removed successfully', { state: 'visible' });
    await deleteConfirmationMessage.click();
  }

  async modifyOKXAccount(){

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

async placeOKXMarketOrder(){
  await this.getStarted.click();
  await this.gotoTrading.click();
  await this.selectGoTrade.click();
  await this.selectNativeTrading.click();
  await this.selectOrderType.click();
  await this.chooseMarket.click();
  await this.switchtoDiscoveryMode.click();
  await this.clickInstrumentType.click();
  await this.selectInstrumentTypeSpot.click();
  await this.clickBaseAsset.click();
  await this.searchBaseAsset.fill('BTC');
  await this.selectBTC.click();
//   await this.clickQuoteAsset.click();
  await this.searchQuoteAsset.fill('USDT');
  await this.selectUSDT.click(); 
  await this.enterQuantity.fill('0.0001');
  await this.selectLong.click();
  await this.selectLong.click();
  await this.clickTrade.click();
  await this.orderAcceptedNotification.click();
  await expect(this.orderAcceptedNotification).toHaveText('Order Accepteddd');
}

async validateOrder_getAlgo_id(){
    await this.getStarted.click();
    await this.orderHostory;
    // await expect(this.validateOrderAccount).toHaveText('Dashk805 OKX');
    // console.log ((this.validateOrderAccount).textContent());
    // await expect(this.validateSymbol).toHaveText('BTC-USDTSSpot');
    console.log(this.validateOrderAccount, this.getOrderStatus, this.validateSymbol, this.getAlogoId)
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
    await this.getStarted.click();
   await this.page.getByRole('button', { name: 'Assets' }).click(); 
  //get value for equity in USD for single symbol 
  const amount = await this.page.locator('td .font-inter.text-xsm');
  const amountText = (await amount.nth(2).textContent())?.trim();
  console.log(amountText); // "$109,449.40"
}

async validateMetrics(){
  await this.getStarted.click();
  await this.page.getByRole('button', { name: 'Assets' }).click(); 
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
//   await this.page.locator('td div .font-inter').nth(0).click()
  this.addclearAssets = page.locator('div [class="4k:text-sm flex flex-row items-center justify-start gap-x-1"]');
  await this.addclearAssets.click();

}

  async logout() {
  await this.getStarted.click();
  await this.userProfile.click();
  await this.logoutButton.click();
  await expect(this.validateLogout).toHaveText('Welcome');
  }
}

module.exports = { GoQuantMain };
