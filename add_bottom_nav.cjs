const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// replace min-h-screen padding
code = code.replace(/className="min-h-screen bg-gray-950 text-gray-100 flex flex-col p-4 md:p-6 lg:p-8"/, 'className="min-h-screen bg-gray-950 text-gray-100 flex flex-col p-4 md:p-6 lg:p-8 pb-24"');

// find the closing div of app_root
const footerRegex = /(<footer[\s\S]*?<\/footer>\n    )(<\/div>\n  \);\n})/m;

const bottomNav = `      {/* Bottom Navigation for App UI */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 border-t border-gray-800 backdrop-blur-md z-50">
        <div className="flex justify-around items-center p-2 max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab("home")}
            className={\`flex flex-col items-center justify-center p-2 w-16 transition-colors \${activeTab === "home" ? "text-emerald-400" : "text-gray-500 hover:text-gray-400"}\`}
          >
            <Home size={22} className={activeTab === "home" ? "drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : ""} />
            <span className="text-[10px] mt-1 font-medium">Home</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("futures")}
            className={\`flex flex-col items-center justify-center p-2 w-16 transition-colors \${activeTab === "futures" ? "text-emerald-400" : "text-gray-500 hover:text-gray-400"}\`}
          >
            <Activity size={22} className={activeTab === "futures" ? "drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : ""} />
            <span className="text-[10px] mt-1 font-medium">Futures</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("calendar")}
            className={\`flex flex-col items-center justify-center p-2 w-16 transition-colors \${activeTab === "calendar" ? "text-emerald-400" : "text-gray-500 hover:text-gray-400"}\`}
          >
            <Calendar size={22} className={activeTab === "calendar" ? "drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : ""} />
            <span className="text-[10px] mt-1 font-medium">Schedule</span>
          </button>
        </div>
      </div>
$2`;

code = code.replace(footerRegex, '$1' + bottomNav);

fs.writeFileSync('src/App.tsx', code);
