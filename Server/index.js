const http = require("http");
const fs =require("fs");
const url = require("url");

const myServer = http.createServer( (req, res) => {
  if (req.url === "/favicon.ico") res.end();

  const log = `${Date.now()}: ${req.url} New Req Rec.\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl)
  fs.appendFile("log.txt", log, (err, data) => {
    switch(myurl.pathname){
      case '/': res.end("HomePage");
      break;
      case '/about':
        const username = myurl.query.myname;
        res.end(`I am ${username}`);
        break;
      case '/contact':
        const contact = myurl.query.userType
        res.end(`Here is ${contact} available Contact :+912344556`);
        break;
      default:
        res.end("404 Not Found");
    }
  })
} );

myServer.listen(8000, () => {
  console.log("Server Started")
});