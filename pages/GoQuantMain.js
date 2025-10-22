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
    // page.
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

    //validate order 
    this.orderHostory = page.getByRole('button', { name: 'Order History' });
    // this.validateVenue = page.getByRole('cell').filter({ hasText: /^$/ }).getByRole('button').click();
    this.validateOrderAccount = page.getByText('Dashk805 OKX').textContent();
    this.validateSymbol = page.getByText('BTC-USDTSwap');
    this.getOrderStatus = page.getByTestId('order-status');
    this.getAlogoId = page.getByRole('cell', { name: '988...364', exact: true }).getByRole('img').click(); 

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
    // await this.page.a();
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
//   await .click();
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
    await expect(this.validateOrderAccount).toHaveText('Dashk805 OKX');
    // await expect(this.validateSymbol).toHaveText('BTC-USDTSSpot');
    console.log(this.validateOrderAccount, this.getOrderStatus, this.validateSymbol, this.getAlogoId)
}
async OKXInvalidOrderDetails(){
    
}
  async logout() {
  await this.getStarted.click();
  await this.userProfile.click();
  await this.logoutButton.click();
  await expect(this.validateLogout).toHaveText('Welcome');
  }
}

module.exports = { GoQuantMain };
