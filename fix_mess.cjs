const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `        )}
        {activeTab === "calendar" && (
        {/* Right Module: Calendars & Stock News Feed */}
        {/* Market Calendars */}
          )}
        {activeTab === "calendar" && (`;

const replace = `        )}
        {activeTab === "calendar" && (`;

code = code.replace(target, replace);
fs.writeFileSync('src/App.tsx', code);
