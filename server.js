const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.disable("x-powered-by");
server.use(bodyParser.json());

var shellServer = "http://localhost:8080";
var homeServer = "http://localhost:8081";
var aboutServer = "http://localhost:8082";

function matchAndServe(domain) {
  return proxy(domain, {
    proxyReqPathResolver(req) {
      console.log(`${domain}${req.url}`);
      return `${domain}${req.url}`;
    }
  });
}

server.use("/shell", matchAndServe(shellServer));
server.use("/home", matchAndServe(homeServer));

server.use("/about", matchAndServe(aboutServer));

server.use("/", matchAndServe(shellServer));

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:3000`);
});