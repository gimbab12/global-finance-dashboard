const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /const eventDate = new Date\(2026, monthNum, dayNum, 23, 59, 59\);/g;
const replacement = `const eventDate = new Date(2026, monthNum, dayNum, 23, 59, 59);
        cal.rawDate = new Date(2026, monthNum, dayNum).toISOString();`;

code = code.replace(regex, replacement);
fs.writeFileSync('server.ts', code);
