const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /const getEventsForDay = \(dayNum: number, month: number, year: number\) => \{[\s\S]*?return \{ economic, holidays \};\n  \};/;
const replacement = `const getEventsForDay = (dayNum: number, month: number, year: number) => {
    if (!data) return { economic: [], holidays: [] };
    
    let economic: EconomicEvent[] = [];
    let holidays: MarketCalendar[] = [];
    
    economic = data.economicEvents.filter((evt: any) => {
      if (evt.rawDate) {
        const d = new Date(evt.rawDate);
        return d.getFullYear() === year && d.getMonth() === month && d.getDate() === dayNum;
      }
      return false;
    });
    
    holidays = data.marketCalendar.filter((cal: any) => {
      if (cal.rawDate) {
        const d = new Date(cal.rawDate);
        return d.getFullYear() === year && d.getMonth() === month && d.getDate() === dayNum;
      }
      return false;
    });
    
    return { economic, holidays };
  };`;
code = code.replace(regex, replacement);

// Remove parseDayFromMarketCalendar if it exists since we don't need it
const parseRegex = /const parseDayFromMarketCalendar = \(dateStr: string\) => \{[\s\S]*?\n  \};\n/;
code = code.replace(parseRegex, '');

fs.writeFileSync('src/App.tsx', code);
