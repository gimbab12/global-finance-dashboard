const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace('<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">', '<div className="flex flex-col space-y-6">');
code = code.replace('        <div className="lg:col-span-2 space-y-6">\n', '');
code = code.replace(/        <\/div>\n\n        \{\/\* Right Module: Calendars & Stock News Feed \*\/\}\n        <div className="space-y-6">/, '        {/* Right Module: Calendars & Stock News Feed */}');
code = code.replace(/          <\/section>\n\n        <\/div>\n      <\/div>\n\n      \{\/\* Footer \*\/\}/, '          </section>\n      </div>\n\n      {/* Footer */}');

fs.writeFileSync('src/App.tsx', code);
