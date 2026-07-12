const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '        </div>\n                  <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">',
  '        </div>\n      )}\n      {activeTab === "home" && (\n        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">'
);

fs.writeFileSync('src/App.tsx', code);
