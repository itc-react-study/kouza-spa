const express = require("express");
const jsonServer = require("../utils/file_server");
const router = express.Router();

router
  .post("", (req, res) => {
    console.log("sh1apiope050", req.body);
    var acceptanceDate = req.body.acceptanceDate;
    switch (true) {
      case acceptanceDate === "2020.12.24":
        jsonServer.receiveUnencryptData(res, "sh1apiope050/normal/4-1-3.json");
        break;

      default:
        jsonServer.receiveUnencryptData(res, "sh1apiope050/normal/1-1-1.json");
    }
  })
  .all("", (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
