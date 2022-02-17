const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if error, reject promise and send to catch
      if (err) {
        reject(err);
        return;
      }

      // if success, resolve, and send message
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = (stylesheet) => {
  return new Promise((resolve, reject) => {
    fs.copyFile("../src/style.css", "../dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = { writeFile, copyFile }