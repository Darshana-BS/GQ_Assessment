const { GoQuantMain } = require('../../pages/GoQuantMain')
const { test, expect } = require('@playwright/test');
const { startTracing } = require('../utils/tracingHelperforstructuredcases');

//-----------------------------TC07_Get_Order_details_[WIP]--------------------------------
test.only('Get Order details @order', async ({browser})=> {
  const context = await browser.newContext();
  const stopTrace = await startTracing(context, 'TC07_Get_order_datails');
  const page = await context.newPage();
  const gqMain = new GoQuantMain(page);
  //Validate Order Details 
  await gqMain.login('user14@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await gqMain.getOrderdetails();
  await stopTrace();
})