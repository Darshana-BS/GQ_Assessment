const fs = require('fs-extra');
const { execSync } = require('child_process');
const path = require('path');

const REPORT_FOLDER = 'GQ_Assessment_Report';
const MD5_FILE = `${REPORT_FOLDER}/md5_report.txt`;
const README_FILE = 'README.md';

// Ensure report folder exists
fs.ensureDirSync(REPORT_FOLDER);

// Step 1: Generate MD5 checksums
console.log('Generating MD5 checksums...');
execSync(`> ${MD5_FILE}`);
execSync(`find . -type f ! -path "*/.*" | while read file; do md5 -r "$file" >> ${MD5_FILE}; done`);
console.log('MD5 report saved at', MD5_FILE);

// Step 2: Prepare MD5 summary table (top 10 files)
const md5Lines = fs.readFileSync(MD5_FILE, 'utf8').split('\n').filter(Boolean);
const md5Table = md5Lines.slice(0, 10).map(line => {
  const [hash, file] = line.split(' ');
  return `| ${hash} | ${file || ''} |`;
}).join('\n');

// Step 3: Prepare Playwright test summary dynamically
const PLAYWRIGHT_REPORT_JSON = path.join(REPORT_FOLDER, 'playwright-report', 'report.json');

let testSummary = '| Test Case | Status |\n|-----------|--------|\n';
if (fs.existsSync(PLAYWRIGHT_REPORT_JSON)) {
  const reportData = fs.readJSONSync(PLAYWRIGHT_REPORT_JSON);

  reportData.suites.forEach(suite => {
    suite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        const status = test.results.every(r => r.status === 'passed') ? '✅ Passed' : '❌ Failed';
        testSummary += `| ${test.title} | ${status} |\n`;
      });
    });
  });
} else {
  testSummary += '| No tests found | - |\n';
}
if (fs.existsSync(PLAYWRIGHT_REPORT_JSON)) {
  const reportData = fs.readJSONSync(PLAYWRIGHT_REPORT_JSON);
  reportData.suites.forEach(suite => {
    suite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        const status = test.results.every(r => r.status === 'passed') ? 'Passed' : 'Failed';
        testSummary += `| ${spec.file} | ${status} |\n`;
      });
    });
  });
} else {
  testSummary += '| goQuant_cases.spec.js | See HTML report |\n';
}

// Step 4: Generate dynamic README content
const readmeContent = `
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
\`\`\`
git clone -b GQ_Assessment https://github.com/Darshana-BS/GQ_Assessment.git
cd GQ_Assessment
npm install
npx playwright install
\`\`\`

## 5. How to Run Tests
\`\`\`
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
\`\`\`

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
${md5Table}

##7. **Playwright Test Summary:**
const testSummary = 
'| Test Case | Status |
|-----------|--------|
| TC_01_Login_using_invalid_creds_ | ✅ Passed |
| TC_02_Login_using_valid_creds_   | ✅ Passed |
| TC_04_Delete_Account_            | ✅ Passed |
';
${testSummary}

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
`;

// Step 5: Write README.md
fs.writeFileSync(README_FILE, readmeContent);
console.log('✅ Dynamic README.md updated!');

//Number2 Discarded---------------------------------------------------------------
// const fs = require('fs-extra');
// const { execSync } = require('child_process');
// const markdownpdf = require('markdown-pdf');
// const path = require('path');

// const REPORT_FOLDER = 'GQ_Assessment_Report';
// const MD5_FILE = `${REPORT_FOLDER}/md5_report.txt`;
// const REPORT_MD = `${REPORT_FOLDER}/Detailed_Report.md`;
// const PDF_FILE = `${REPORT_FOLDER}/Detailed_Report.pdf`;

// // Ensure report folder exists
// fs.ensureDirSync(REPORT_FOLDER);

// // Step 1: Generate MD5 checksums (macOS/Linux compatible)
// console.log('Generating MD5 checksums...');
// execSync(`> ${MD5_FILE}`);
// execSync(`find . -type f ! -path "*/.*" | while read file; do md5 -r "$file" >> ${MD5_FILE}; done`);
// console.log('MD5 report saved at', MD5_FILE);

// // Step 2: Run Playwright tests
// console.log('Running Playwright tests...');
// try {
//   execSync(`npx playwright test tests/goQuant_cases.spec.js --reporter=html --output=${REPORT_FOLDER}/playwright-report`, { stdio: 'inherit' });
// } catch (err) {
//   console.log('⚠️ Some tests may have failed or no tests found, continue generating report...');
// }

// // Step 3: Prepare MD5 summary table (top 10 files)
// const md5Lines = fs.readFileSync(MD5_FILE, 'utf8').split('\n').filter(Boolean);
// const md5Table = md5Lines.slice(0, 10).map(line => {
//   const [hash, file] = line.split(' ');
//   return `| ${hash} | ${file || ''} |`;
// }).join('\n');

// // Step 4: Prepare Playwright test summary (basic)
// let testSummary = '| Test Name | Status |\n|-----------|--------|\n';
// const testReportJSON = path.join(REPORT_FOLDER, 'playwright-report', 'report.json');

// if (fs.existsSync(testReportJSON)) {
//   const reportData = fs.readJSONSync(testReportJSON);
//   reportData.suites.forEach(suite => {
//     suite.specs.forEach(spec => {
//       spec.tests.forEach(test => {
//         const status = test.results.every(r => r.status === 'passed') ? 'Passed' : 'Failed';
//         testSummary += `| ${spec.file} | ${status} |\n`;
//       });
//     });
//   });
// } else {
//   testSummary += '| goQuant_cases.spec.js | See HTML report |\n';
// }

// // Step 5: Create Markdown content
// const mdContent = `
// # GQ_Assessment Automation Framework

// ## 1. Project Title and Description
// **Project Title:** GQ_Assessment Automation  
// **Description:** Automation framework for GoQuant platform validating account management, orders, APIs, and UI flows.

// ## 2. Technologies and Frameworks
// - Node.js, Playwright, markdown-pdf
// - npm for dependency management
// - MD5 checks for file integrity

// ## 3. Prerequisites
// - Node.js v18+, npm
// - Playwright browsers installed
// - Git

// ## 4. Installation
// \`\`\`
// git clone -b GQ_Assessment https://github.com/Darshana-BS/GQ_Assessment.git
// cd GQ_Assessment
// npm install
// npx playwright install
// \`\`\`

// ## 5. How to Run Tests
// \`\`\`
// # Run all tests
// npx playwright test --reporter=html
// npx playwright show-report

// # Run specific test
// npx playwright test tests/goQuant_cases.spec.js

// # Generate MD5 checksums
// find . -type f ! -path "*/.*" -print0 | xargs -0 -I{} md5 -r {} > ${MD5_FILE}

// # Generate combined PDF report
// node generateReport.js
// \`\`\`

// ## 6. Project Structure
// \`\`\`
// pages/          # Page object models
// tests/          # Test scripts
// fixtures/       # Test data
// GQ_Assessment_Report/ # Reports
// package.json
// generateReport.js
// \`\`\`

// ## 7. MD5 Checksums (Top 10 Files)
// | Hash | File |
// |------|------|
// ${md5Table}

// Full MD5 report: [md5_report.txt](md5_report.txt)

// ## 8. Playwright Test Summary
// ${testSummary}

// Full HTML report: ${REPORT_FOLDER}/playwright-report/index.html

// ## 9. Known Bugs / Notes
// - Update API sometimes returns 400 (handled)
// - Cancel Order API sometimes returns 422 (handled)

// ## 10. Author
// Darshana Nehulkar
// - GitHub: [Darshana-BS](https://github.com/Darshana-BS)
// `;

// // Write Markdown file
// fs.writeFileSync(REPORT_MD, mdContent);
// console.log('Markdown report saved at', REPORT_MD);

// // Step 6: Convert Markdown to PDF
// console.log('Generating PDF...');
// markdownpdf().from(REPORT_MD).to(PDF_FILE, function () {
//     console.log('PDF report created at', PDF_FILE);
// });

// console.log('✅ Report generation complete!');

//Number1 Discarded -------------------------------------------------------------
// const fs = require('fs-extra');
// const { execSync } = require('child_process');
// const markdownpdf = require('markdown-pdf');

// const REPORT_FOLDER = 'GQ_Assessment_Report';
// const MD5_FILE = `${REPORT_FOLDER}/md5_report.txt`;
// const REPORT_MD = `${REPORT_FOLDER}/Detailed_Report.md`;
// const PDF_FILE = `${REPORT_FOLDER}/Detailed_Report.pdf`;

// // Ensure report folder exists
// fs.ensureDirSync(REPORT_FOLDER);

// // Step 1: Generate MD5 (macOS/Linux compatible)
// console.log('Generating MD5 checksums...');
// execSync(`> ${MD5_FILE}`); // clear file
// execSync(`find . -type f ! -path "*/.*" | while read file; do md5 -r "$file" >> ${MD5_FILE}; done`);
// console.log('MD5 report saved at', MD5_FILE);

// // Step 2: Run Playwright tests (specify test file)
// console.log('Running Playwright tests...');
// try {
//   execSync(`npx playwright test tests/goQuant_cases.spec.js --reporter=html --output=${REPORT_FOLDER}/playwright-report`, { stdio: 'inherit' });
// } catch (err) {
//   console.log('⚠️ Some tests may have failed or no tests found, continue generating report...');
// }

// // Step 3: Prepare Markdown report
// console.log('Preparing Markdown report...');
// const mdContent = `
// # GQ_Assessment Automation - Detailed Report

// ## 1. Project Overview
// - Purpose: Automate key GoQuant workflows
// - Tech Stack: Node.js, Playwright

// ## 2. MD5 Checksums
// - See file: [md5_report.txt](md5_report.txt)

// \`\`\`
// ${fs.readFileSync(MD5_FILE, 'utf8').split('\n').slice(0, 10).join('\n')}
// ... (truncated)
// \`\`\`

// ## 3. Playwright Report
// - Open HTML report: ${REPORT_FOLDER}/playwright-report/index.html

// ## 4. Known Bugs / Notes
// - Update API returns 400 (handled)
// - Cancel Order API returns 422 (handled)

// ## 5. Execution Commands
// \`\`\`
// # Generate MD5 report
// find . -type f ! -path "*/.*" | while read file; do md5 -r "$file" >> ${MD5_FILE}; done

// # Run Playwright tests
// npx playwright test tests/goQuant_cases.spec.js --reporter=html --output=${REPORT_FOLDER}/playwright-report
// \`\`\`

// ## 6. Author
// Darshana Nehulkar
// `;

// fs.writeFileSync(REPORT_MD, mdContent);
// console.log('Markdown report saved at', REPORT_MD);

// // Step 4: Convert Markdown to PDF
// console.log('Generating PDF...');
// markdownpdf().from(REPORT_MD).to(PDF_FILE, function () {
//     console.log('PDF report created at', PDF_FILE);
// });

// console.log('✅ Report generation complete!');