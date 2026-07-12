const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /function getAbsoluteDateOfCurrentWeek\(weekday: number\): Date \{.*?return targetDate;\n\}/s;
const replacement = `function getAbsoluteDateOfCurrentWeek(weekday: number): Date {
  // Force the base week to be July 13, 2026 - July 17, 2026 based on user prompt
  const targetDate = new Date(2026, 6, 12 + weekday); 
  return targetDate;
}`;

code = code.replace(regex, replacement);
fs.writeFileSync('server.ts', code);
