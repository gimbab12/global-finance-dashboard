const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/\{\/\* Forex Section - Top Banner \*\/\}\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">/, '{activeTab === "home" && (\n      <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">');

// Find the end of forex_panel. The div after it is `<div className="flex flex-col space-y-6">`
code = code.replace(/<\/section>\n\s*<div className="flex flex-col space-y-6">\n\s*\{\/\* Futures Section \*\/\}\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="realtime_assets_panel">/, '</section>\n      )}\n\n      <div className="flex flex-col space-y-6">\n        {activeTab === "futures" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="realtime_assets_panel">');

code = code.replace(/<\/section>\n\n\s*\{\/\* Global Stock Indices Block \*\/\}\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">/, '</section>\n        )}\n\n        {activeTab === "home" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">');

code = code.replace(/<\/section>\n\n\s*\{\/\* Economic Calendar Tables \*\/\}\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">/, '</section>\n        )}\n\n        {activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">');

code = code.replace(/<\/section>\n\n\s*\{\/\* Right Module: Calendars & Stock News Feed \*\/\}\n\s*\{\/\* Market Calendars \*\/\}\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">/, '</section>\n\n        {/* Right Module: Calendars & Stock News Feed */}\n        {/* Market Calendars */}\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">');

code = code.replace(/<\/section>\n\n\s*\{\/\* Quick FAQ \/ Helper Block \*\/\}\n\s*<section className="bg-gray-900\/40 border border-gray-800\/80 rounded-2xl p-4 md:p-5">/, '</section>\n        )}\n\n        {activeTab === "home" && (\n          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">');

code = code.replace(/<\/section>\n\s*<\/div>\n\n\s*\{\/\* Footer \*\/\}/, '</section>\n        )}\n      </div>\n\n      {/* Footer */}');

fs.writeFileSync('src/App.tsx', code);
