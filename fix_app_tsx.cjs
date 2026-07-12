const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove the grid wrappers
code = code.replace(/<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">/, '<div className="flex flex-col space-y-6">');
code = code.replace(/\{\/\* Left Module - Indices & Exchange Rates \*\/\}\n\s*<div className="lg:col-span-2 space-y-6">/, '');
code = code.replace(/\{\/\* Right Module: Calendars & Stock News Feed \*\/\}\n\s*<div className="space-y-6">/, '');

// 2. Fix fragments
code = code.replace(/<\/div>\n\s*\{\/\* Right Module: Calendars & Stock News Feed \*\/\}/, '{/* Right Module */}');
code = code.replace(/<\/section>\n\s*<\/div>\n\s*<\/div>\n\s*\{\/\* Footer \*\/\}/, '</section>\n      </div>\n      {/* Footer */}');

// Let's actually just undo my previous bad replacements and do it properly.
