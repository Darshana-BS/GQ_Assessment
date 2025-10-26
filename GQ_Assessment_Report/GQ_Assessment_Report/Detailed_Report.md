
# GQ_Assessment Automation Framework

## 1. Project Title and Description
**Project Title:** GQ_Assessment Automation  
**Description:** Automation framework for GoQuant platform validating account management, orders, APIs, and UI flows.

## 2. Technologies and Frameworks
- Node.js, Playwright, markdown-pdf
- npm for dependency management
- MD5 checks for file integrity

## 3. Prerequisites
- Node.js v18+, npm
- Playwright browsers installed
- Git

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

# Generate MD5 checksums
find . -type f ! -path "*/.*" -print0 | xargs -0 -I{} md5 -r {} > GQ_Assessment_Report/md5_report.txt

# Generate combined PDF report
node generateReport.js
```

## 6. Project Structure
```
pages/          # Page object models
tests/          # Test scripts
fixtures/       # Test data
GQ_Assessment_Report/ # Reports
package.json
generateReport.js
```

## 7. MD5 Checksums (Top 10 Files)
| Hash | File |
|------|------|
| 3f43bd73037c2a0c3b7587ed4e4332e7 | ./GQ_Assessment_Report/Detailed_Report.pdf |
| 53da0a5c7aa86ce618aaf63560487412 | ./GQ_Assessment_Report/md5_report.txt |
| be9f8598e483d50b47ed5a7452202e3e | ./GQ_Assessment_Report/Detailed_Report.md |
| 073b49d4796fbf0f985ca46dbcc8c0d2 | ./generateReport.js |

Full MD5 report: [md5_report.txt](md5_report.txt)

## 8. Playwright Test Summary
| Test Name | Status |
|-----------|--------|
| goQuant_cases.spec.js | See HTML report |


Full HTML report: GQ_Assessment_Report/playwright-report/index.html

## 9. Known Bugs / Notes
- Update API sometimes returns 400 (handled)
- Cancel Order API sometimes returns 422 (handled)

## 10. Author
Darshana Nehulkar
- GitHub: [Darshana-BS](https://github.com/Darshana-BS)
