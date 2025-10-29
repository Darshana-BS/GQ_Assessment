
# GQ_Assessment Automation Framework

Darshana_Nehulkar [Automation Test Report].pdf (https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/Darshana_Nehulkar%20%5BAutomation%20Test%20Report%5D.pdf)
------------------------------------------------------------------------------

# 1. Project Description
This automation framework validates the GoQuant platform workflows including account add, account management, order placement, API validations, and UI testing, Cross Browser Testing.
------------------------------------------------------------------------------

# 2. 🧭 Executive Summary
This report outlines the automated testing process performed on GoQuant’s GoTrade platform.  
The tests covered functional, UI/UX, and edge case scenarios.  
Overall, the platform demonstrated basic stability, with several functional and validation issues identified.
------------------------------------------------------------------------------

## 3. Technologies and Frameworks Used
- **Programming Language:** JavaScript / Node.js  
- **Automation Framework:** Playwright  
- **Reporting Tools:** Playwright HTML Reporter, Markdown, PDF generation ('markdown-pdf')  
- **Approach:** End-to-end automation using Page Object Model 
- **Execution:** Manual + Automated API validations 
- **Browsers:** Chromium, Firefox, Safari 
- **Data Management:** Hardcoded credentials and test data files 
- **Build Tools:** npm  
- **Other Tools:** fs-extra (file system utilities), MD5 checksum verification  
------------------------------------------------------------------------------

## 4. Prerequisites
- Node.js v18+
- npm 
- Playwright browsers installed
- Git
- Modern browser (Chromium, Firefox, Safari)
------------------------------------------------------------------------------

## 5. Installation
```
git clone -b GQ_Assessment https://github.com/Darshana-BS/GQ_Assessment.git
cd GQ_Assessment
npm install
npx playwright install
```
------------------------------------------------------------------------------

## 6. How to Run Tests
```
# Run all tests
npx playwright test --reporter=html
npx playwright show-report

# View Video recording trace 
npx playwright show-trace trace/<.zip file name>
ex. npx playwright show-trace trace/TC05_Modify Account.zip

# Run specific test
npx playwright test tests/goQuant_cases.spec.js

# Run tests in headless mode 
npx playwright test --headless 

# Run tests in head mode 
npx playwright test --headed  

# Run tests to save /test-results/resultsjson results 
npx playwright test --reporter=json,html --output=playwright-report > /Users/darsh_cf/Desktop/DN_cypress/GoQuant_Auto_Asse/test-results/results.json --project=chromium --headed
npm run test:report 

# Run test to copy report with date, time and to github automaticaly 
"test:reportcopy": "npx playwright test --reporter=html && node copyReport.js"

# Run cases and save browser specific results in <browser_name>_results 
"test:chrome": "npx playwright test --project=chromium --reporter=html --output=chrome_results",
"test:firefox": "npx playwright test --project=firefox --reporter=html --output=firefox_results",
"test:safari": "npx playwright test --project=webkit --reporter=html --output=webkit_results",

# Generate MD5 checksums
mkdir -p GQ_Assessment_Report
find . -type f ! -path "*/.*" -print0 | xargs -0 -I{} md5 -r {} > GQ_Assessment_Report/md5_report.txt 

# Generate combined PDF report 
node generateReport.js
```
------------------------------------------------------------------------------

# 7. Project Structure
```
pages/                    # Page object models for UI interactions
tests/                    # Playwright test scripts
fixtures/                 # Test data and reusable assets
GQ_Assessment_Report/     # Generated MD5, HTML, and PDF reports
package.json              # Node.js project configuration
generateReport.js         # Script to generate MD5 + Playwright PDF report
playwright.config.js      # Configs for tests being executed
``` 
------------------------------------------------------------------------------

## 8. Reporting and Results
```
**Top 10 MD5 files:**
MD5 Report: GQ_Assessment_Report/md5_report.txt — lists MD5 hashes of all project files for integrity check
Playwright HTML Report: GQ_Assessment_Report/playwright-report/index.html — detailed pass/fail report for all test cases
Combined PDF Report: GQ_Assessment_Report/Detailed_Report.pdf — single file containing project overview, MD5 summary, and test results
| Hash | File |
| b8e330c92aa7b8651472c11b55029da2 | ./Darshana_Nehulkar |
| 89d60145663799c02192ec7e4175febe | ./Detailed_Report.pdf |
| e32579b56e4f84b40ec170f8d6105a5f | ./auth/auth-TC20_Logout-Log-out-of-account-auth-logout-chromium/test-finished-1.png |
| e32579b56e4f84b40ec170f8d6105a5f | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium/test-failed-1.png |
| 3e7ca540003afec229148d3cbcb2ca15 | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium/error-context.md |
| 1a4f26ac6690acc4e8d5bc1764972a04 | ./auth/auth-TC22_Login_with_black-e60fb-h-blank-email-password-auth-chromium-retry1/test-finished-1.png |
| 4b49e227633b29c472ad847959ef62f6 | ./auth/auth-TC22_Login_with_black-e60fb-h-blank-email-password-auth-chromium/error-context.md |
| a9be6d3fcde9b30387ecb37514136811 | ./auth/auth-TC01_LoginInvalid_Cre-60938-valid-user-credentials-auth-chromium-retry1/test-finished-1.png |
| d22b6072b0846cca5b4a0393e28feb9e | ./auth/auth-TC02_LoginValid_Creds-628be-valid-user-credentials-auth-chromium/test-finished-1.png |
| 3baffb3438603db507c857d890befdd4 | ./GQ_Assessment_Report/Detailed_Report.pdf |
Generated by Darshana Nehulkar | QA Automation
```
------------------------------------------------------------------------------

## 9. 🧪 Test Case Overview
| Category   | Scenarios  | Tools Used |
|----------- |------------|------------|
| Functional | Login validation, Account creation, Account Modify, Account Delete, Place Order, Validate Account status, Get order details, Cancel Order API, Switch Views, Log out | Playwright |
| UI/UX      | Page elements, modal handling, dropdowns | Playwright |
| Edge Case  | `/gotrade/v3/users` | Playwright |
| API        | `/gotrade/v3/credentials`, `/gotrade/v3/cancel_all` | Playwright APIRequest |

*Total Tests: **22**  
*Passed: **14**  
*Failed (Expected): **2**
------------------------------------------------------------------------------

## 10 🧩 Challenges Faced
- Dynamic IDs ('radix-*') made locators unstable.
- Modal elements required explicit waits.
- GitHub push blocked due to PAT (resolved by removing file and rewriting history).
- Playwright Test did not expect test() to be called here (due to hat means you have nested playwright dependencies — 
  usually happens if some other dependency also includes @playwright/test.)
------------------------------------------------------------------------------

## 11. Known Bugs / Notes
- Update API sometimes returns 400 (handled)
- Cancel Order API sometimes returns 422 (handled) 
- Orders are placed but not displayed in the orders history (coult not automate, as there are no orders) 
- Cancel single orders are not displayed due to order issue (could not automate, as there are no orders)

### 🪲 Key Findings

### 🔴 Critical
| ID | Issue  | Expected vs Actual | Steps to Reproduce |
|----|--------|--------------------|--------------------|
| 1  | Orders are not displayed in the order history | Should display the orders placed successfully | Execute the place order api and validate orders |
| 2  | API `/gotrade/v3/cancel_all`' response delayed | Should return < 200ms | Execute cancel API in test |

### 🟡 Medium
| ID | Issue  | Observation | Evidence  |
|----|--------|-------------|-----------|
| 3  | Modify Account is displaying incorrect message  | Modify account from Accounts and save | [Pending] Attached screenshot |
| 4  | Metrics data total and assets column data is inconsistent | Metrics validate TC09_validation_Metrics_ | Check results summary |

### 🟢 Low
| ID | Issue  | Observation | Note |
|----|--------|-------------|------|
| 5  | Sometimes env abruptly lands on 'Something went wrong' | Execute case TC22[Edge_case]_Handle_Something_went_wrong | Environment Issue |
| 6  | Try again on 'Something went wrong' screen is not functioning | Execute case TC22[Edge_case]_Handle_Something_went_wrong | Environment Issue |
| 7  | APIs `/v4/groups/all`, `/v3/set_margin_leverage`, `/v3/symbols/leverage-margin`, `/v3/current_leverage_margin` | Failing with 400 Bad request | Navigate / Visit https://test1.gotrade.goquant.io/admin| 
| 8  | APIs `/v1/users` | Failing with 500 Error | Navigate / Visit https://test1.gotrade.goquant.io/admin | 

------------------------------------------------------------------------------

## 12. 📈 Technical Analysis
- **Average API response time:** 280ms  
- **Browser coverage:** 3  
- **Accessibility:** 
- **Performance:** Stable under 5 concurrent actions 
------------------------------------------------------------------------------

## 13. 💡 Recommendations
- Add stable 'data-testid' attributes for better element targeting.
- Optimize API response time under 200ms.
- Improve accessibility attributes (aria-labels, alt text).
- Enhance error message consistency. 
- Add a better UI handeling for the screen elements of the Add/Clear button (expected = dropdown to select % should stay until user clicks somwhere elese)
------------------------------------------------------------------------------

## 14. 📸 Evidence & Reports
| 🧾 Type | 📁 Location | 🔗 Open / Notes |
|----------|--------------|----------------|
| 🧠 **HTML Test Report** | [GQ_Assessment_Report/playwright-report/index.html](./GQ_Assessment_Report/playwright-report/index.html) | ▶️ *View full Playwright test results* |
| 🧠 **PDF Test Report | [GQ_Assessment_Report/GQ_Assessment_Report/Detailed_Report.md](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/GQ_Assessment_Report/GQ_Assessment_Report/Detailed_Report.md) | 🪄 *Backup local report location* |
| 🧩 **Trace Files** | [tests/trace/Restructured_cases](https://github.com/Darshana-BS/GQ_Assessment/tree/GQ_Assessment/tests/trace/Restructured_cases) | 🔍 *Replay test steps in Playwright trace viewer* |
| 🖼️ **Screenshots** | [reports/screenshots/](./reports/screenshots/) | 📸 *Pending upload / captured test images* | [Pending]
------------------------------------------------------------------------------ 

## 15. 🧩 Test Organization
All Playwright test cases are placed under the `tests/` directory.  
Each module or functionality has its own `.spec.js` file for better organization.

```bash
tests/
├── account/
│   ├── TC03_Add_Account_OKX.spec.js
│   ├── TC04_Add_Account_Binance_COINM.spec.js
│   ├── TC04_Add_Account_Binance_USDM.spec.js
│   ├── TC05_Modify_Account_Invalid_details.spec.js
│   ├── TC17_Add_Invalid_account.spec.js
│   ├── TC18_Delete_Account.spec.js
│   ├── TC19_Validate_Account_Status.spec.js
│   ├── TC20_Modify_Account_Valid.spec.js
│   └── TC21_Add_Account_Valid.spec.js

├── auth/
│   ├── TC01_LoginInvalid_Creds.spec.js
│   ├── TC02_LoginValid_Creds.spec.js
│   ├── TC20_Logout.spec.js
│   └── TC22_Login_with_black_email_password.spec.js

├── dashboard/
│   ├── [Pending]_TC15_Switch_to_Order_book_Consolidated_view.spec.js
│   ├── TC09_Validate_Metrics.spec.js
│   ├── TC10_add_clear_assets.spec.js
│   ├── TC12_Kill_Edge.spec.js
│   ├── TC13_Liquidate_Positions.spec.js
│   └── TC14_Switch_to_smart_order_routing.spec.js

└── order/
    ├── TC06_Place_Binance_COINM_order.spec.js
    ├── TC06_Place_Binance_USDM_order.spec.js
    ├── TC06_Place_OKX_Market_order_swap.spec.js
    ├── TC08_Place_order_validations_with_empty_details.spec.js
    ├── TC11_Cancel_All_Working_Orders.spec.js
    └── TC16_Place_Short_Sell_order.spec.js
```

All 22 Playwright test cases are structured across feature-based spec files:

| Module                | Test Cases                    | Folder              |
|-----------------------|-------------------------------|---------------------|
| Authentication        | TC01 – TC02, TC20 - T20       | `/tests/auth/`    |
| Account Management    | TC03 – TC05, TC17 - TC19, TC21| `/tests/account/` |
| Order                 | TC06, TC08, TC11, TC16        | `/tests/order/`  |
| Dashboard             | TC09 – TC10, TC12 - TC15      | `/tests/api/`     |

This structure improves test readability, modularity, and maintainability.

## 16. 🏷️ Tag-based Execution

| Command                                      | Description                         |
| ---------------------------------------------| ----------------------------------- |
| `npx playwright test --grep "@auth"`       | Run only authentication tests       |
| `npx playwright test --grep "@account"`    | Run only account-related tests      |
| `npx playwright test --grep "@order"`      | Run only order tests                |
| `npx playwright test --grep "@dashboard"`  | Run the full regression suite       |
| `npx playwright test --grep-invert "@order"`| Run all UI tests excluding API ones |

All Playwright tests are categorized with tags for selective execution:

| Tag       | Description                              |
|-----------|------------------------------------------|
| @auth     | Login & authentication flows             |
| @account  | Account creation, modification, deletion |
| @order    | Order placement & validation             |
| @dashboard| API endpoint validation                  |
| @logout   | Logout functionality                     |

**Run Examples:**
```bash
npx playwright test --grep "@auth"
npx playwright test --grep "@order"
npx playwright test --grep-invert "@account"
------------------------------------------------------------------------------

## 17. ✨ Conclusion
The GoTrade application is functional but exhibits minor inconsistencies across UI and API layers.  
The automation suite is scalable, modular, and demonstrates readiness for integration into CI/CD.
------------------------------------------------------------------------------

```
## 18. Author 
```
👩‍💻 *Darshana Nehulkar*  
- GitHub: [https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/](https://github.com/Darshana-BS/GQ_Assessment/blob/GQ_Assessment/)
📅 *Date:* 29th October 2025  
📧 *dnehulkar805@gmail.com*
```
