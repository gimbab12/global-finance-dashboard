const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Remove all tab fragment starts and ends I added previously
code = code.replace(/\{\/\* HOME TAB \*\/\}\n\s*\{activeTab === "home" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}\n\s*\{\/\* FUTURES TAB \*\/\}\n\s*\{activeTab === "futures" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}\n\s*\{\/\* INDICES TAB \*\/\}\n\s*\{activeTab === "home" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}\n\s*\{\/\* CALENDAR TAB \*\/\}\n\s*\{activeTab === "calendar" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}\n\s*\{\/\* CALENDAR TAB CONT --\>\n\s*\{activeTab === "calendar" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}\n\s*\{\/\* HOME TAB CONT --\>\n\s*\{activeTab === "home" && \(<>\n/g, '');
code = code.replace(/<\/>\)\}/g, ''); // catch any remaining

fs.writeFileSync('src/App.tsx', code);
