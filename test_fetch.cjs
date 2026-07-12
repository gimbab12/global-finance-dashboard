fetch("http://localhost:3000/api/finance/refresh?lang=ko")
  .then(r => r.json())
  .then(console.log);
