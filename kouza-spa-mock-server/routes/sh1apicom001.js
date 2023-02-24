const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom001', req.body);
    jsonServer.receiveUnencryptData(res, 'sh1apicom001/normal/1-1-1.json');
    //jsonServer.receiveSystemErrorData(res, 'sh1apicom001/fatal/3-1-1.json');
    //jsonServer.receiveBusinessErrorData(res, 'sh1apicom001/error/2-1-1.json');
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
