const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\s*<div className="shrink-0 opacity-70">\s*\{drawMicroSparkline\(sparkHistory, isPos\)\}\s*<\/div>/g;
code = code.replace(regex, '');

fs.writeFileSync('src/App.tsx', code);
