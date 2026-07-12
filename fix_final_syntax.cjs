const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace all `</>)}` with `)}`
code = code.replace(/<\/>\)\}/g, ')}');

// Wait, if I used `<>` anywhere, it will be mismatched now. 
// Let's replace all `{activeTab === "..." && (<>` with `{activeTab === "..." && (`
code = code.replace(/\{activeTab === "([^"]+)" && \(\s*<>/g, '{activeTab === "$1" && (');

fs.writeFileSync('src/App.tsx', code);
