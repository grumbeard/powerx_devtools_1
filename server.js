const http = require("http");

const host = '0.0.0.0';
const port = 8000;

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server!");
// };

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end("<b>Hello</b>");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// COMMENT 2
