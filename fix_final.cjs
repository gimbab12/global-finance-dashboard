const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove all `{activeTab === "..." && (` and `)}` and `</>)}` to reset state
code = code.replace(/\{activeTab === "home" && \(\n/g, '');
code = code.replace(/\{activeTab === "futures" && \(\n/g, '');
code = code.replace(/\{activeTab === "calendar" && \(\n/g, '');
code = code.replace(/\n\s*\)\}\n/g, '\n');

// 2. Wrap each section correctly
code = code.replace(
  '{/* Forex Section - Top Banner */}',
  '{activeTab === "home" && (<>\n      {/* Forex Section - Top Banner */}'
);

code = code.replace(
  '{/* Main Content Grid */}',
  '</>)}\n      {/* Main Content Grid */}'
);

code = code.replace(
  '{/* Futures Section */}',
  '{activeTab === "futures" && (<>\n          {/* Futures Section */}'
);

code = code.replace(
  '{/* Global Stock Indices Block */}',
  '</>)}\n        {activeTab === "home" && (<>\n          {/* Global Stock Indices Block */}'
);

code = code.replace(
  '{/* Economic Calendar Tables */}',
  '</>)}\n        {activeTab === "calendar" && (<>\n          {/* Economic Calendar Tables */}'
);

// Note: { /* Market Calendars */ } is currently orphaned or inside the Right Module comment. Let's see what's above it.
code = code.replace(
  '{/* Right Module: Calendars & Stock News Feed */}',
  '</>)}\n        {activeTab === "calendar" && (<>\n        {/* Right Module: Calendars & Stock News Feed */}'
);

code = code.replace(
  '{/* Quick FAQ / Helper Block */}',
  '</>)}\n        {activeTab === "home" && (<>\n          {/* Quick FAQ / Helper Block */}'
);

code = code.replace(
  '      </div>\n\n      {/* Footer */}',
  '        </>)}\n      </div>\n\n      {/* Footer */}'
);


fs.writeFileSync('src/App.tsx', code);
