const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

code = code.replace(/      eventDate\.setHours\(hours, minutes, 0, 0\);\n      const month/g, '      eventDate.setHours(hours, minutes, 0, 0);\n      evt.rawDate = eventDate.toISOString();\n      const month');

// Add rawDate to simulated marketCalendar as well
code = code.replace(/        const \{ dateStr, dateObj \} = getFormattedFutureDateInCurrentMonth\(cal\.dayOffsetFromToday, lang\);\n        cal\.date = /g, '        const { dateStr, dateObj } = getFormattedFutureDateInCurrentMonth(cal.dayOffsetFromToday, lang);\n        cal.rawDate = dateObj.toISOString();\n        cal.date = ');

fs.writeFileSync('server.ts', code);
