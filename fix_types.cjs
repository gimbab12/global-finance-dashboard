const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

code = code.replace(/  customDay\?: number;\n\}/, '  customDay?: number;\n  rawDate?: string;\n}');
code = code.replace(/  event: string;\n  result\?: string;\n\}/, '  event: string;\n  result?: string;\n  rawDate?: string;\n}');

fs.writeFileSync('server.ts', code);
