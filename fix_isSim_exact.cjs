const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `        </div>
        
          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">`;

const replace = `        </div>
      )}
      
      {activeTab === "home" && (
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">`;

// Try regex because whitespace is tricky
code = code.replace(/<\/div>\n\s*<section className="bg-gray-900\/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">/, 
`</div>
      )}
      {activeTab === "home" && (
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">`);

fs.writeFileSync('src/App.tsx', code);
