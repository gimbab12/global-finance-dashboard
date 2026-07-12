const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// I'll search for `{activeTab === "home" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">`
// and prepend `)}` to it.
code = code.replace(
  '{activeTab === "home" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">',
  ')}\n        {activeTab === "home" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indices_panel">'
);

// I'll search for `{activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">`
code = code.replace(
  '{activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">',
  ')}\n        {activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="indicators_panel">'
);

// I'll search for `{activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">`
code = code.replace(
  '{activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">',
  ')}\n        {activeTab === "calendar" && (\n          <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 md:p-6" id="calendar_panel">'
);

// I'll search for `{activeTab === "home" && (\n          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">`
code = code.replace(
  '{activeTab === "home" && (\n          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">',
  ')}\n        {activeTab === "home" && (\n          <section className="bg-gray-900/40 border border-gray-800/80 rounded-2xl p-4 md:p-5">'
);

fs.writeFileSync('src/App.tsx', code);
