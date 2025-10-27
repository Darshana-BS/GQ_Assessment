// publishReport.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
// const sourceDir = path.resolve('./playwright-report');
const sourceDir = path.resolve('./GQ_Assessment_Report');
const docsDir = path.resolve('./docs');

// Ensure source exists
if (!fs.existsSync(sourceDir)) {
  console.error('❌ No Playwright report found in:', sourceDir);
  process.exit(1);
}

// Delete old docs folder
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

// Copy report files to /docs
fs.mkdirSync(docsDir, { recursive: true });
fs.cpSync(sourceDir, docsDir, { recursive: true });
console.log('✅ Copied latest Playwright report to /docs');

// Commit and push changes
try {
  execSync('git add docs', { stdio: 'inherit' });
  execSync('git commit -m "Update GitHub Pages report"', { stdio: 'inherit' });
  execSync('git push origin GQ_Assessment', { stdio: 'inherit' });
  console.log('🚀 Report published to GitHub Pages!');
} catch (err) {
  console.log('⚠️ No new changes to commit or push.');
}

// // copyReport.js
// const fs = require('fs');
// const path = require('path');

// const src = './playwright-report';
// const destRoot = './docs/reports';

// // Make sure the reports folder exists
// if (!fs.existsSync(destRoot)) fs.mkdirSync(destRoot, { recursive: true });

// // Create a timestamp folder
// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
// const dest = path.join(destRoot, timestamp);

// fs.mkdirSync(dest, { recursive: true });

// // Copy all HTML report files
// function copyRecursive(srcDir, destDir) {
//   fs.readdirSync(srcDir).forEach((file) => {
//     const srcPath = path.join(srcDir, file);
//     const destPath = path.join(destDir, file);

//     if (fs.lstatSync(srcPath).isDirectory()) {
//       fs.mkdirSync(destPath, { recursive: true });
//       copyRecursive(srcPath, destPath);
//     } else {
//       fs.copyFileSync(srcPath, destPath);
//     }
//   });
// }

// copyRecursive(src, dest);
// console.log(`✅ Copied Playwright report to ${dest}`); 

// // Create or update a "latest" symlink/copy for GitHub Pages
// const latest = path.join(destRoot, 'latest');

// // Remove old "latest" folder if it exists
// if (fs.existsSync(latest)) {
//   fs.rmSync(latest, { recursive: true, force: true });
// }

// // Copy current report as "latest"
// copyRecursive(dest, latest);
// console.log(`🔗 'latest' report updated: ${latest}`); 

// //Auto commit script 
// const { execSync } = require('child_process');

// try {
//   execSync('git add docs/reports', { stdio: 'inherit' });
//   execSync('git commit -m "📊 Auto-update test reports"', { stdio: 'inherit' });
//   execSync('git push', { stdio: 'inherit' });
//   console.log('✅ Reports pushed to GitHub Pages!');
// } catch (err) {
//   console.warn('⚠️ Git push skipped — maybe no changes or no permissions.');
// } 