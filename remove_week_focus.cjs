const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/const isCurrentWeekFocus = calendarYear === 2026 && calendarMonth === 6 && day >= 6 && day <= 10;/g, 'const isCurrentWeekFocus = false;');

fs.writeFileSync('src/App.tsx', code);
