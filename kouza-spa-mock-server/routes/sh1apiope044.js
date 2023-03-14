const express = require("express");
const jsonServer = require("../utils/file_server");
const router = express.Router();
const requestMap = new Map();

router
  .post("", (req, res) => {
    console.log("sh1apiope044", req.body);
    var ncoLocation = req.body.ncoLocation;
    var shopNoSetted = req.body.shopNoSetted;
    switch (true) {
      case ncoLocation === "1":
        jsonServer.receiveUnencryptData(res, "sh1apiope044/normal/4-1-3.json");
        break;
      case ncoLocation === "4":
        jsonServer.receiveUnencryptData(res, "sh1apiope044/normal/4-1-5.json");
        break;
      case shopNoSetted === "0012":
        jsonServer.receiveUnencryptData(res, "sh1apiope044/normal/4-1-3.json");
        break;
      case ncoLocation === "1" && shopNoSetted === "0012":
        jsonServer.receiveUnencryptData(res, "sh1apiope044/normal/4-1-3.json");
        break;

      default:
        jsonServer.receiveUnencryptData(res, "sh1apiope044/normal/2-1-1.json");
    }
  })

  .all("", (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
