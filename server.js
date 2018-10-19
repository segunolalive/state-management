const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = parseInt(process.env.PORT, 10) || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  process.stdout.write(`server running on port: ${PORT}\n`);
});
