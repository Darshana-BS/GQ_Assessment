// generateDashboard.js
const fs = require('fs');
const path = require('path');

// Define your module report folders
const modules = [
  { name: 'Authentication', folder: 'auth', desc: 'Login, Logout, and Credential Validation' },
  { name: 'Account Management', folder: 'account', desc: 'Add, Modify, and Delete Accounts' },
  { name: 'Order Management', folder: 'orders', desc: 'Place, Cancel, and Fetch Orders' },
  { name: 'Assets & Metrics', folder: 'assets', desc: 'Equity and Metrics Verification' },
  { name: 'Accessibility', folder: 'accessibility', desc: 'Accessibility Verification' },

];

// Build HTML dashboard
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GoQuant QA Automation Dashboard</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: #0b0c10;
    color: #fff;
    text-align: center;
    padding: 40px;
  }
  h1 {
    color: #66fcf1;
    margin-bottom: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }
  .card {
    background: #1f2833;
    border: 1px solid #45a29e;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.03);
  }
  a {
    text-decoration: none;
    color: #66fcf1;
    font-weight: bold;
  }
  p {
    color: #c5c6c7;
    font-size: 14px;
  }
</style>
</head>
<body>
<h1>🚀 GoQuant Test Automation Dashboard</h1>
<p>Select a module below to view its latest Playwright report:</p>
<div class="grid">
`;

modules.forEach(({ name, folder, desc }) => {
  const reportPath = `./${folder}/index.html`;
  html += `
  <div class="card">
    <h2>${name}</h2>
    <p>${desc}</p>
    <a href="${reportPath}" target="_blank">View Report →</a>
  </div>
  `;
});

html += `
</div>
<p style="margin-top: 40px; font-size: 12px; color: #888;">Generated on ${new Date().toLocaleString()}</p>
</body>
</html>
`;

// Save in docs folder (for GitHub Pages)
const dashboardPath = path.resolve('./docs/index.html');
fs.writeFileSync(dashboardPath, html);
console.log(`✅ Dashboard generated at: ${dashboardPath}`); 