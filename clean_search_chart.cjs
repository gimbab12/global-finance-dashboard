const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove Search import
code = code.replace(/  Search,\n/g, '');

// 2. Remove states and search logic
const searchStateRegex = /\/\/ SEARCH ticker state.*?const handleTickerClick = \(symbol: string\) => {.*?fetchTickerData\(symbol, "1d"\);\n  };\n/s;
code = code.replace(searchStateRegex, '');

// 3. Remove sparkline functions
const sparklineRegex = /const getSparklineHistory = \(item: any\) => \{.*?const drawMicroSparkline = \(points: any\[\], isPos: boolean\) => \{.*?\};\n/s;
code = code.replace(sparklineRegex, '');

// 4. Remove Search Bar from header
const searchBarRegex = /\{\/\* Real-time Ticker Search Bar \*\/}.*?\{\/\* Quick Suggestions Tags \*\/}.*?<\/div>/s;
code = code.replace(searchBarRegex, '');

// 5. Remove micro sparklines from indices
const indexSparklineRegex = /const sparkHistory = getSparklineHistory\(ind\);\n                        \n/g;
code = code.replace(indexSparklineRegex, '');

const indexSparklineRenderRegex = /\{\/\* Integrated micro sparkline \*\/}.*?<\/div>/s;
code = code.replace(new RegExp(indexSparklineRenderRegex.source, 'g'), '');

// 6. Remove micro sparklines from futures
const futureSparklineRegex = /const sparkHistory = getSparklineHistory\(fut\);\n                        \n/g;
code = code.replace(futureSparklineRegex, '');

// 7. Remove micro sparklines from forex
const forexSparklineRegex = /const sparkHistory = getSparklineHistory\(fx\);\n                        \n/g;
code = code.replace(forexSparklineRegex, '');

// 8. Remove the interactive stock search detail modal overlay
const modalRegex = /\{\/\* Interactive Stock Search Detail Modal Overlay \*\/}.*?<\/AnimatePresence>/s;
code = code.replace(modalRegex, '');

// 9. Remove onClick from index/future/forex cards
code = code.replace(/onClick=\{.*?handleTickerClick.*?\}/g, '');
code = code.replace(/cursor-pointer/g, '');

fs.writeFileSync('src/App.tsx', code);
