const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');

//------------------------TC24_accessibility_audit-------------------------------------
test('Accessibility compliance test @accessibility', async ({ page }) => {
  // Navigate to the page you want to audit
  await page.goto('https://test1.gotrade.goquant.io');

  // Run axe-core analysis
  const results = await new AxeBuilder({ page }).analyze();
  
  // Save results to file for your report
  fs.writeFileSync('a11y_report.json', JSON.stringify(results, null, 2));

  // Log issues to console
  console.log(`\n🔍 Total Accessibility Violations: ${results.violations.length}`);
  results.violations.forEach(v => {
    console.log(`❌ [${v.impact}] ${v.id}: ${v.description}`);
  });

  console.log('Accessibility Violations:', results.violations);

  // Fail the test if there are violations
  expect(results.violations.length, 'No accessibility violations').toBe(0);
}); 
//-------------------------------------------------------------------------------------------