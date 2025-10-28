const fs = require('fs');
const path = require('path');

async function startTracing(context, name) {
  const traceDir = path.join(__dirname, '../trace/Restructured_cases');
  if (!fs.existsSync(traceDir)) fs.mkdirSync(traceDir, { recursive: true });

  await context.tracing.start({ screenshots: true, snapshots: true });
  return async () => {
    await context.tracing.stop({ path: path.join(traceDir, `${name}.zip`) });
  };
}

module.exports = { startTracing };