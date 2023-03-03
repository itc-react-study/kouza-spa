const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope053', req.body);
    switch (req.body.acceptanceDate) {
      case '20210614':
        jsonServer.receiveNormalData(res, 'sh1apiope053/normal/4-1-1.json');
        break;
      case '20210613':
        jsonServer.receiveNormalData(res, 'sh1apiope053/normal/4-1-2.json');
        break;
      case '20210612':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope053/fatal/5-1-4.json');
        break;
      case '20210611':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope053/error/5-1-5.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope053/normal/4-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
