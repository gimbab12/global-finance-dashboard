const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /4\. Comprehensive global economic indicator.*?Include precise announcement dates and times\.\n5\. Global Stock Market Calendar.*?Ensure all events are strictly within this current month\./s;

const replacement = `4. Comprehensive global economic indicator release schedule for the ENTIRE current month (\${new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}) AND the ENTIRE next month (\${new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString("en-US", { month: "long", year: "numeric" })}). You MUST search for and include ALL major US economic indicator announcements. DO NOT invent or include minor events. ONLY include tier-1 macroeconomic indicators. You MUST also search for and include major France (FR) and United Kingdom (UK) economic indicator announcements. Include precise announcement dates and times (e.g. "07/15 21:30" or "08/05 14:00").
5. Global Stock Market Calendar/Holidays for the ENTIRE current month (\${new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}) AND the ENTIRE next month (\${new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString("en-US", { month: "long", year: "numeric" })}). Ensure all events are strictly within these two months.`;

code = code.replace(regex, replacement);
fs.writeFileSync('server.ts', code);
