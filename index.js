const http = require('http');
const url = require('url');
const controllers = require('./controllers');
const route = require('./route');
const port = 3000;

let server = http.createServer((req, res) => {
  let filename = url.parse(req.url).pathname;
  filename = filename.replace("/", "");
      if (filename === "play") {
        res.writeHead(200, { "Content-Type": route.route.mimeTypes.js });
        res.write(JSON.stringify(controllers.Result()));
        res.end();
  } else {
    route.route.handleFileRequest(filename, res);
  }
});
server.listen(port);

console.log("Server running at http://127.0.0.1:" + port);
