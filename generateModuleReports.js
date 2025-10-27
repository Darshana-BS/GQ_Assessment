// generateModuleReports.js
const fs = require('fs');
const { execSync } = require('child_process');

const modules = ['auth', 'account', 'orders']; // add more module folders here if needed

modules.forEach(module => {
  console.log(`\n📦 Generating report for module: ${module}`);

  const moduleDir = `tests/${module}`;
  const reportDir = `GQ_Assessment_Report/${module}`;

  if (!fs.existsSync(moduleDir)) {
    console.log(`⚠️ Skipping ${module} — no tests found in ${moduleDir}`);
    return;
  }

  try {
    // Run tests for each module folder
    execSync(`npx playwright test ${moduleDir} --reporter=html --output=${reportDir}`, { stdio: 'inherit' });
    console.log(`✅ Report generated at: ${reportDir}/index.html`);
  } catch (err) {
    console.error(`❌ Error running tests for ${module}:`, err.message);
  }
}); 