const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();
const requestMap = new Map();

router
  .post('', (req, res) => {
    console.log('sh1apiope044', req.body);
    switch (req.body.ncoLocation) {
      case "1":
        jsonServer.receiveUnencryptData(res, 'sh1apiope044/normal/4-1-7.json');
        break;
      case "2":
        jsonServer.receiveUnencryptData(res, 'sh1apiope044/normal/4-1-4.json');
        break;
    
        default:
          jsonServer.receiveUnencryptData(res, 'sh1apiope044/normal/2-1-1.json');
    }



  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
