const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /if \(parsedData\.marketCalendar && Array\.isArray\(parsedData\.marketCalendar\)\) \{[\s\S]*?state\.marketCalendar = parsedData\.marketCalendar;\n      \}/;
const replacement = `if (parsedData.marketCalendar && Array.isArray(parsedData.marketCalendar)) {
        parsedData.marketCalendar.forEach((cal: any) => {
          let year = new Date().getFullYear();
          let month = new Date().getMonth();
          let day = new Date().getDate();
          if (cal.date) {
            let match = cal.date.match(/(\\d{4})[-/](\\d{1,2})[-/](\\d{1,2})/);
            if (match) {
              year = parseInt(match[1], 10);
              month = parseInt(match[2], 10) - 1;
              day = parseInt(match[3], 10);
            } else {
              match = cal.date.match(/(\\d{1,2})\\/(\\d{1,2})/);
              if (match) {
                month = parseInt(match[1], 10) - 1;
                day = parseInt(match[2], 10);
              }
            }
          }
          cal.rawDate = new Date(year, month, day).toISOString();
        });
        state.marketCalendar = parsedData.marketCalendar;
      }`;
code = code.replace(regex, replacement);

fs.writeFileSync('server.ts', code);
