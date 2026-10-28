const http = require(`node:http`);
const fs = require(`node:fs`);
const path = require(`node:path`);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, `utf-8`, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
        res.end("Failed to load");
      } else {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    const filePath = path.join(__dirname, "about.html");
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
        res.end("Failed to load");
      } else {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact-me") {
    const filePath = path.join(__dirname, "contact-me.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain: charset=utf-8" });
        res.end("Failed to Load");
      } else {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.end(data);
      }
    });
  } else {
    const filePath = path.join(__dirname, `404.html`);
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
        res.end("Failed to Load");
      } else {
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
        res.end(data);
      }
    });
  }
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
