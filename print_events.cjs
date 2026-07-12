const d = require("./data.json");
console.log(d.economicEvents.map(e => `${e.time} - ${e.indicator} (RealTime: ${e.isRealTime})`).join('\n'));
