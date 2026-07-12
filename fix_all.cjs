const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Restore the missing `)}` for data?.isSimulated
code = code.replace(
  '        </div>\n                  <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">',
  '        </div>\n      )}\n\n      {activeTab === "home" && (\n      <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6 mb-6" id="forex_panel">'
);

// Close forex_panel
code = code.replace(
  '      </section>\n      {/* Main Content Grid */}',
  '      </section>\n      )}\n      {/* Main Content Grid */}'
);

// realtime_assets_panel
code = code.replace(
  '          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="realtime_assets_panel">',
  '          {activeTab === "futures" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="realtime_assets_panel">'
);
code = code.replace(
  '          </section>\n\n        {/* Global Stock Indices Block */}',
  '          </section>\n          )}\n\n        {/* Global Stock Indices Block */}'
);

// indices_panel
code = code.replace(
  '          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">',
  '          {activeTab === "home" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">'
);
code = code.replace(
  '          </section>\n\n        {/* Economic Calendar Tables */}',
  '          </section>\n          )}\n\n        {/* Economic Calendar Tables */}'
);

// indicators_panel
code = code.replace(
  '          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">',
  '          {activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">'
);
code = code.replace(
  '          </section>\n\n        {/* Right Module: Calendars & Stock News Feed */}',
  '          </section>\n          )}\n\n        {/* Right Module: Calendars & Stock News Feed */}'
);

// calendar_panel
code = code.replace(
  '          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">',
  '          {activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">'
);
code = code.replace(
  '          </section>\n\n        {/* Quick FAQ / Helper Block */}',
  '          </section>\n          )}\n\n        {/* Quick FAQ / Helper Block */}'
);

// Quick FAQ
code = code.replace(
  '          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">',
  '          {activeTab === "home" && (\n          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">'
);
code = code.replace(
  '          </section>\n      </div>\n\n      {/* Footer */}',
  '          </section>\n          )}\n      </div>\n\n      {/* Footer */}'
);

fs.writeFileSync('src/App.tsx', code);
