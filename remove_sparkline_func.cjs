const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /const renderSparkline = \(prices: number\[\], isPositive: boolean\) => \{[\s\S]*?<\/>\n    \);\n  \};\n/g;
code = code.replace(regex, '');

fs.writeFileSync('src/App.tsx', code);
