const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const nextConfig = require('../next.config.js');

const pageSource = fs.readFileSync(path.join(__dirname, '..', 'src', 'app', 'page.tsx'), 'utf8');

test('rewrites /api requests to the active backend port', async () => {
  const rewrites = await nextConfig.rewrites();
  assert.ok(
    rewrites.some((rule) => rule.source === '/api/:path*' && rule.destination === 'http://localhost:8001/api/:path*'),
    'Expected the API rewrite to target localhost:8001'
  );
});

test('uses the non-trailing-slash chat endpoint for proxy requests', () => {
  assert.match(pageSource, /axios\.post\('\/api\/chat'\s*[,)]/);
});
