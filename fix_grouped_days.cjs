const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\{\/\* Grouped All Days render \*\/\}.*?const finalDays = sortedDays\.length > 0 \? sortedDays : \[6, 7, 8, 9, 10\];/s;

const replacement = `{/* Grouped All Days render */}
                          {(() => {
                            const uniqueDays = new Set<number>();
                            data.economicEvents.forEach((evt: any) => {
                              if (evt.rawDate) {
                                const d = new Date(evt.rawDate);
                                if (d.getFullYear() === calendarYear && d.getMonth() === calendarMonth) {
                                  uniqueDays.add(d.getDate());
                                }
                              }
                            });
                            data.marketCalendar.forEach((cal: any) => {
                              if (cal.rawDate) {
                                const d = new Date(cal.rawDate);
                                if (d.getFullYear() === calendarYear && d.getMonth() === calendarMonth) {
                                  uniqueDays.add(d.getDate());
                                }
                              }
                            });
                            
                            const finalDays = Array.from(uniqueDays).sort((a, b) => a - b);`;

code = code.replace(regex, replacement);

fs.writeFileSync('src/App.tsx', code);
