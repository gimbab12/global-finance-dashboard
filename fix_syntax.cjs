const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/<\/section>\n\s*\{\/\* Main Content Grid \*\/\}\n\s*<div className="flex flex-col space-y-6">\n\s*\{\/\* Left Module - Indices & Exchange Rates \*\/\}/, '</section>\n      )}\n      {/* Main Content Grid */}\n      <div className="flex flex-col space-y-6">');

fs.writeFileSync('src/App.tsx', code);
