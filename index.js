const http = require('http');
const PORT = process.env.PORT || 80;
http.createServer((req, res) => {
  res.end("🚀 DoorFeed CI/CD Works!");
}).listen(PORT, () => console.log(`Listening on port ${PORT}`));
