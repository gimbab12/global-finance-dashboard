const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The regex matches everything from Language Switch to </header> and I will just manually put back the correct structure.
const regex = /\{\/\* Language Switch \*\/\}[\s\S]*?<\/header>/;
const replacement = `{/* Language Switch */}
            <div className="flex items-center bg-gray-900 border border-gray-800 rounded-lg p-0.5 text-[10px] font-extrabold shadow-inner">
              {["KO", "EN", "JA", "ZH"].map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l.toLowerCase() as SupportedLang)}
                  className={\`px-2.5 py-1.5 rounded-md transition-all  \${
                    lang === l.toLowerCase() ? "bg-emerald-600 text-white shadow" : "text-gray-500 hover:text-gray-300"
                  }\`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>`;
code = code.replace(regex, replacement);

fs.writeFileSync('src/App.tsx', code);
