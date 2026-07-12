const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const augustEconomic = `
    {
      customDay: 1,
      time: '08/01 (토) 08:30',
      indicator: '미국 7월 비농업 고용지수 (테스트)',
      importance: 'high',
      previous: '206K',
      forecast: '190K',
      actualVal: '-',
      rawDate: '2026-08-01T08:30:00.000Z'
    },`;

const augustMarket = `
      { date: "08/05 (수)", country: "미국", event: "8월 테스트 일정" },`;

code = code.replace(/    economicEvents: \[\n/, '    economicEvents: [\n' + augustEconomic);
code = code.replace(/    marketCalendar: \[\n/, '    marketCalendar: [\n' + augustMarket);

fs.writeFileSync('server.ts', code);
