const express = require("express");
const jsonServer = require("../utils/file_server");
const router = express.Router();
const requestMap = new Map();

router
  .post("", (req, res) => {
    console.log("sh1apiope051", req.body);
    var shopNo = req.body.shopNo;
    switch (true) {
      case shopNo === "406":
        jsonServer.receiveUnencryptData(res, "sh1apiope051/normal/4-1-6.json");
        break;
      default:
        // jsonServer.receiveDefaultSystemError(res);
        jsonServer.receiveUnencryptData(res, "sh1apiope051/normal/4-1-2.json");
    }
  })
  .all("", (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
