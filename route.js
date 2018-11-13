const fs = require('fs');

const mimeTypes = {
  html: "text/html",
  png: "image/png",
  js: "text/javascript",
  css: "text/css",
  default: "text/plain"
};


let handleFileRequest = (filename, response) => {
          if (filename === "") filename = "client/index.html";
          fs.exists(filename, exists => {
                    if (!exists) {
                      response.writeHead(404, { "Content-Type": mimeTypes.default });
                      response.write("404 Not Found");
                      response.end();
                      return;
                    }
                    fs.readFile(filename, "binary", (err, file) => {
                              if (err) {
                                response.writeHead(500, { "Content-Type": mimeTypes.default });
                                response.write(err + "\n");
                                response.end();
                                return;
                              }
                      mimeType = mimeTypes[filename.split(".").pop()];
                      response.writeHead(200, { "Content-Type": mimeType });
                      response.write(file, "binary");
                      response.end();
                    });
          });
};

exports.route = { handleFileRequest: handleFileRequest, mimeTypes: mimeTypes };
