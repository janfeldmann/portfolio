const path = require('path');
const express = require("express");
const os = require("os");
const app = express();
const chokidar = require('chokidar');
const sharp = require('sharp');
const rootDir = './src/client/assets/img/';
const breakpoints = [480,768,992,1200,1920];

chokidar.watch('source', {cwd: rootDir, persistent: true}).on('add', (filePath, stats) => {
  const fileName = path.basename(filePath);
  const fileExtension = path.extname(fileName);
  const fileNameWithoutExtension = path.basename(filePath, fileExtension);
  
  for (let index = 0; index < breakpoints.length; index += 1) {
    const size = breakpoints[index];
    sharp(rootDir + filePath)
    .resize(size)
    .toFile(rootDir + fileNameWithoutExtension + '_' + size + '.webp'); 

    sharp(rootDir + filePath)
    .resize(size)
    .toFile(rootDir + fileNameWithoutExtension + '_' + size + fileExtension); 
  }
});

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(8080, () => console.log("Listening on port 8080!"));