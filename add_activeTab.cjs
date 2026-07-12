const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('const [activeTab')) {
  code = code.replace(/const \[loading, setLoading\] = useState\(true\);/, 'const [activeTab, setActiveTab] = useState("home");\n  const [loading, setLoading] = useState(true);');
  fs.writeFileSync('src/App.tsx', code);
}
