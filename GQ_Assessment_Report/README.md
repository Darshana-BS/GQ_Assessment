
# GQ_Assessment Automation Framework

## 1. Project Description
This automation framework validates the GoQuant platform workflows including account add, account management, order placement, API validations, and UI testing, Cross Browser Testing.

## 2. Technologies and Frameworks Used
- **Programming Language:** JavaScript / Node.js  
- **Automation Framework:** Playwright  
- **Reporting Tools:** Playwright HTML Reporter, Markdown, PDF generation ('markdown-pdf')  
- **Build Tools:** npm  
- **Other Tools:** fs-extra (file system utilities), MD5 checksum verification  

## 3. Prerequisites
- Node.js v18+
- npm
- Playwright browsers installed
- Git
- Modern browser (Chromium, Firefox, Safari)

## 4. Installation
```
git clone -b GQ_Assessment https://github.com/Darshana-BS/GQ_Assessment.git
cd GQ_Assessment
npm install
npx playwright install
```

## 5. How to Run Tests
```
# Run all tests
npx playwright test --reporter=html
npx playwright show-report

# Run specific test
npx playwright test tests/goQuant_cases.spec.js

# Run tests in headless mode 
npx playwright test --headless 

# Generate MD5 checksums
mkdir -p GQ_Assessment_Report
find . -type f ! -path "*/.*" -print0 | xargs -0 -I{} md5 -r {} > GQ_Assessment_Report/md5_report.txt 

# Generate combined PDF report 
node generateReport.js
```

## 5. Project Structure
pages/                    # Page object models for UI interactions
tests/                    # Playwright test scripts
fixtures/                 # Test data and reusable assets
GQ_Assessment_Report/     # Generated MD5, HTML, and PDF reports
package.json              # Node.js project configuration
generateReport.js         # Script to generate MD5 + Playwright PDF report
playwright.config.js      # Configs for tests being executed 

## 6. Reporting and Results
**Top 10 MD5 files:**
MD5 Report: GQ_Assessment_Report/md5_report.txt — lists MD5 hashes of all project files for integrity check
Playwright HTML Report: GQ_Assessment_Report/playwright-report/index.html — detailed pass/fail report for all test cases
Combined PDF Report: GQ_Assessment_Report/Detailed_Report.pdf — single file containing project overview, MD5 summary, and test results
| Hash | File |
| 816ed2e4d5c09c8a2c95b820eba4eb46 | ./GQ_Assessment_Report/Detailed_Report.pdf |
| edb3750e3c84a23a5f399101c4db9adc | ./GQ_Assessment_Report/md5_report.txt |
| 9bf447f9433f1e97a87f68e72bb8541b | ./GQ_Assessment_Report/Detailed_Report.md |
| 840d8ab701ceadf4721b3853dc6f7c56 | ./README.md |
| 3e0cdcf5213619c0559f312f847ae3e7 | ./generateReport.js |

##7. **Playwright Test Summary:**
const testSummary = 
'| Test Case | Status |
|-----------|--------|
| TC_01_Login_using_invalid_creds_ | ✅ Passed |
| TC_02_Login_using_valid_creds_   | ✅ Passed |
| TC_04_Delete_Account_            | ✅ Passed |
';
| Test Case | Status |
|-----------|--------|
| No tests found | - |
| goQuant_cases.spec.js | See HTML report |


Full HTML report: GQ_Assessment_Report/playwright-report/index.html

**Trace 
tests/trace/             #trace for the passed tests 
Indivisual video recording / trace of the cases executed 
• TC01_LoginInvalid_Creds.zip
• TC02_LoginValid_Creds.zip
• TC03_Add Account.zip
• TCO4_DELETE Account.zip
• TC05_Modify_Account_ivalid_details.zip
• TC06_Place_OKX_Marekt Order.zip
• TC07_Get_order datails.zip
• TC08_validation_errors.zip
• TC09_validate_metrics.zip
• TC10_addclear_assets.zip
• TC11_cancelal|_workingorders.zip
• TC12_kill-edge.zip
• TC13_Liquidate-Positions.zip
• TC14_Smart_order_routing.zip
• TC20_Logout.zip
• TC21_Modify_Account_valid_details.zip

## 8. Known Bugs / Notes
- Update API sometimes returns 400 (handled)
- Cancel Order API sometimes returns 422 (handled)

## 9. Author
Darshana Nehulkar
- GitHub: [https://github.com/Darshana-BS/GQ_Assessment/tree/GQ_Assessment](https://github.com/Darshana-BS/GQ_Assessment/tree/GQ_Assessment)
