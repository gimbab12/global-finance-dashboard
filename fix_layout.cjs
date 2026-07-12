const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Wrap sections with condition
code = code.replace(/\{\/\* Forex Section - Top Banner \*\/\}/, '<!-- HOME TAB -->\n      {activeTab === "home" && (<>\n      {/* Forex Section - Top Banner */}');

code = code.replace(/\{\/\* Futures Section \*\/\}/, '      </>)}\n      <!-- FUTURES TAB -->\n      {activeTab === "futures" && (<>\n      {/* Futures Section */}');

code = code.replace(/\{\/\* Global Stock Indices Block \*\/\}/, '      </>)}\n      <!-- INDICES TAB -->\n      {activeTab === "home" && (<>\n      {/* Global Stock Indices Block */}');

code = code.replace(/\{\/\* Economic Calendar Tables \*\/\}/, '      </>)}\n      <!-- CALENDAR TAB -->\n      {activeTab === "calendar" && (<>\n      {/* Economic Calendar Tables */}');

code = code.replace(/\{\/\* Market Calendars \*\/\}/, '      </>)}\n      <!-- CALENDAR TAB CONT -->\n      {activeTab === "calendar" && (<>\n      {/* Market Calendars */}');

code = code.replace(/\{\/\* Quick FAQ \/ Helper Block \*\/\}/, '      </>)}\n      <!-- HOME TAB CONT -->\n      {activeTab === "home" && (<>\n      {/* Quick FAQ / Helper Block */}');

fs.writeFileSync('src/App.tsx', code);
