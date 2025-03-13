const { createServer } = require("node:http");
const fs = require("fs");

const app = createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-type", "text/html") //Header to specify that the reposnse is in HTML form
    res.end("<h1>Hello Guys!!</h1>")
  } else if (req.url == "/data") {
    fs.readFile("./log.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.end("Cannot read the file");
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } 
});

const port = 8000;

fs.writeFile(
  "./log.txt",
  "This is me first time wrinting in the file",
  (err) => {
    if (err) {
      console.log("Cannot write in the file");
      console.log(err);
    } else {
      console.log("Data has been written in the file");
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});