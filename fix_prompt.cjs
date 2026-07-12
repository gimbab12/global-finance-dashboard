const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const regex = /const prompt = `Please provide the latest real-time global financial market data.*?actual numbers, not strings\.`;/s;

const replacement = `const prompt = \`Please provide the latest real-time global financial market data and events for today (\${new Date().toLocaleDateString("en-US")}).
Make a thorough google web search to get accurate real-time values for:
1. Major Global Stock Indices: S&P 500 (SPX), Nasdaq Composite (IXIC), Dow Jones Industrial Average (DJI), KOSPI (KS11), KOSDAQ (KQ11), Nikkei 225 (N225), Hang Seng Index (HSI), Shanghai Composite (SSEC), DAX Performance Index (GDAXI), and FTSE 100 (FTSE) (include their latest actual price, absolute price change, and percentage change).
2. Major Global Index Futures: E-mini S&P 500 Futures (ES=F), E-mini Nasdaq 100 Futures (NQ=F), E-mini Dow Futures (YM=F), Nikkei 225 Futures (NK=F) (include latest price, price change, and percentage change).
3. Foreign Exchange Rates: EUR/KRW and USD/KRW rates.
4. Comprehensive global economic indicator release schedule for the upcoming/current week (July 13 to July 17, 2026). You MUST search for and include ALL major US economic indicator announcements: US Core CPI and US CPI (July 14, 2026), US PPI and US Retail Sales (July 15, 2026), Initial Jobless Claims (July 16, 2026), and Building Permits / Michigan Consumer Sentiment (July 17, 2026). DO NOT invent or include minor events such as "Cleveland CPI", regional Fed speeches (e.g. Goolsbee, Bowman), or Treasury auctions. ONLY include tier-1 macroeconomic indicators. You MUST also search for and include major France (FR) and United Kingdom (UK) economic indicator announcements. Include precise announcement dates and times.
5. Global Stock Market Calendar/Holidays for the ENTIRE current month (\${new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}). Ensure all events are strictly within this current month.
6. A list of 4 major US/Europe stock market news headlines with summaries.

CRITICAL REQUIREMENT:
You MUST translate all indicator names, event details, country names, news titles, news summaries, and stock indices names beautifully and fully into the [\${targetLang}] language. Do not mix Korean or English unless it is a standard ticker symbol or global brand.
You MUST format the output strictly as a JSON object matching the requested schema. Make sure numeric values are actual numbers, not strings.\`;`;

code = code.replace(regex, replacement);
fs.writeFileSync('server.ts', code);
