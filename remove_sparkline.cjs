const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/<div className="h-9">\{renderSparkline\(fx\.history\.map\(h => h\.price\), isPos\)\}<\/div>/g, '');
code = code.replace(/<div className="h-9">\s*\{renderSparkline\(fut\.history\.map\(h => h\.price\), isPos\)\}\s*<\/div>/g, '');

fs.writeFileSync('src/App.tsx', code);
