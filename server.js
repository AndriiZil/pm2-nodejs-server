const http = require('http');
const pid = process.pid;

const server = http.createServer((req, res) => {
  console.log(`Request received. Pid: ${pid}`);
  res.end(`Hello from NodeJS! Pid: ${pid}`);
}).listen(8080, () => {
  console.log(`Server was started. Pid: ${pid}`);
});

process.on('SIGINT', () => {
  console.log(`Server was closed. Pid: ${pid}`);
  server.close(() => {
    process.exit();
  });
})
