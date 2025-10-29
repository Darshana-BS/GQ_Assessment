
# 🧠 GoQuant QA Assessment Report


## 📋 Test Summary

This report summarizes the automated test results for the GoQuant Assessment project.
All test scripts were executed using **Playwright**, with supporting API tests via **Postman**.
Each module includes validation for login, account management, order execution, and API response integrity.



## 🎥 Test Execution Evidence

## 🎥 Test Execution Evidence for Structured cases trace
| #  | Test Case | Trace File | GitHub Link |
|--- |------------|-------------|-------------|
| 01 | Login with Invalid Credentials     | TC01_LoginInvalid_Creds.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC01_LoginInvalid_Creds.zip) |
| 02 | Login with Valid Credentials       | TC02_LoginValid_Creds.zip   | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC02_LoginValid_Creds.zip) |
| 03 | Add OKX Account                    | TC03_Add_Account_OKX.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC03_Add_Account_OKX.zip) |
| 04 | Add Binance USDM Account           | TC04_Add_Account_Binance_COINM.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC04_Add_Account_Binance_COINM.zip) |
| 04 | Add Binance COINM Account          | TC04_Add_Account_Binance_USDM.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC04_Add_Account_Binance_USDM.zip) |
| 05 | Modify Account with invalid details| TC05_Modify_Account_ivalid_details.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC05_Modify_Account_ivalid_details.zip) |
| 06 | Place Order Binance COINM          | TC06_Place_Binance_COINM_Order.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC06_Place_Binance_COINM_Order.zip) |
| 06 | Place Order Binance USDM           | TC06_Place_Binance_USDM_Order.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC06_Place_Binance_USDM_Order.zip) |
| 06 | Place Order OKX                    | TC06_Place_OKX_Market_Order.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC06_Place_OKX_Market_Order.zip) |
| 08 | Order Emptyr values Validation     | TC08_order_place_validation_errors.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC08_order_place_validation_errors.zip) |
| 09 | Validate Metrics.                  | TC09_validate_metrics.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC09_validate_metrics.zip) |
| 11 | Cancel All Working Orders          | TC11_cancelall_workingorders.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC11_cancelall_workingorders.zip) |
| 12 | Kill Edge                          | TC12_kill-edge.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC12_kill-edge.zip) |
| 13 | Liquidate Positions                | TC13_Liquidate_Positions.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC13_Liquidate_Positions.zip) |
| 14 | Switch to smart ordering           | TC14_Smart_order_routing.zip | [View Trace]https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC14_Smart_order_routing.zip) |
| 17 | Add account using invalid details  | TC17_Add_Invalid_Account.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC17_Add_Invalid_Account.zip) |
| 20 | Logout user                        | TC20_Logout.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC20_Logout.zip) |
| 21 | Modify Account using valid details | TC21_Modify_Account_valid_details.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC21_Modify_Account_valid_details.zip) |
| 22 | Login fields validations           | TC22_Login_with_black_email_password.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/Restructured_cases/TC22_Login_with_black_email_password.zip) |

## 🎥 Test Execution Evidence for non structured cases (Old)
Each test case has its own individual **Playwright trace recording** uploaded to GitHub.  
These traces include full steps, network logs, screenshots, and console logs for debugging.
| # | Test Case | Trace File | GitHub Link |
|---|------------|-------------|-------------|
| 01 | Login with Invalid Credentials | TC01_LoginInvalid_Creds.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC01_LoginInvalid_Creds.zip) |
| 02 | Login with Valid Credentials | TC02_LoginValid_Creds.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC02_LoginValid_Creds.zip) |
| 03 | Add Account | TC03_Add_Account.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC03_Add_Account.zip) |
| 04 | Delete Account | TC04_Delete_Account.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC04_Delete_Account.zip) |
| 05 | Modify Account (Invalid Details) | TC05_Modify_Account_Invalid_Details.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC05_Modify_Account_Invalid_Details.zip) |
| 06 | Place OKX Market Order | TC06_Place_OKX_Market_Order.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC06_Place_OKX_Market_Order.zip) |
| 07 | Get Order Details | TC07_Get_Order_Details.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC07_Get_Order_Details.zip) |
| 08 | Validation Errors | TC08_Validation_Errors.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC08_Validation_Errors.zip) |
| 09 | Validate Metrics | TC09_Validate_Metrics.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC09_Validate_Metrics.zip) |
| 10 | Add & Clear Assets | TC10_AddClear_Assets.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC10_AddClear_Assets.zip) |
| 11 | Cancel All Working Orders | TC11_CancelAll_WorkingOrders.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC11_CancelAll_WorkingOrders.zip) |
| 12 | Kill Edge | TC12_Kill_Edge.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC12_Kill_Edge.zip) |
| 13 | Liquidate Positions | TC13_Liquidate_Positions.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC13_Liquidate_Positions.zip) |
| 14 | Smart Order Routing | TC14_Smart_Order_Routing.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC14_Smart_Order_Routing.zip) |
| 20 | Logout | TC20_Logout.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC20_Logout.zip) |
| 21 | Modify Account (Valid Details) | TC21_Modify_Account_Valid_Details.zip | [View Trace](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/tests/trace/TC21_Modify_Account_Valid_Details.zip) |

> 🧩 **Note:** All traces are downloadable ZIPs and can be replayed using Playwright Trace Viewer.


| b8e330c92aa7b8651472c11b55029da2 | ./Darshana_Nehulkar |
| 89d60145663799c02192ec7e4175febe | ./Detailed_Report.pdf |
| e32579b56e4f84b40ec170f8d6105a5f | ./auth/auth-TC20_Logout-Log-out-of-account-auth-logout-chromium/test-finished-1.png |
| e32579b56e4f84b40ec170f8d6105a5f | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium/test-failed-1.png |
| 3e7ca540003afec229148d3cbcb2ca15 | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium/error-context.md |
| 1a4f26ac6690acc4e8d5bc1764972a04 | ./auth/auth-TC22_Login_with_black-e60fb-h-blank-email-password-auth-chromium-retry1/test-finished-1.png |
| 4b49e227633b29c472ad847959ef62f6 | ./auth/auth-TC22_Login_with_black-e60fb-h-blank-email-password-auth-chromium/error-context.md |
| a9be6d3fcde9b30387ecb37514136811 | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium-retry1/test-finished-1.png |
| d22b6072b0846cca5b4a0393e28feb9e | ./auth/auth-TC02_LoginValid_Creds-628be-valid-user-credentials-auth-chromium/test-finished-1.png |
| 44f304c53a40fa2f7fb33bba6793cc66 | ./GQ_Assessment_Report/Detailed_Report.pdf |

Generated by Darshana Nehulkar | QA Automation
