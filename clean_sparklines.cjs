const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\s*\{\/\* Integrated micro sparkline \*\/\}[\s\S]*?\{drawMicroSparkline\(sparkHistory, isPos\)\}\n\s*<\/div>/g;
code = code.replace(regex, '');

fs.writeFileSync('src/App.tsx', code);
