const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope032', req.body);
    switch (req.body.kycUketsukeBangou) {
      case '0843791585718':
        jsonServer.receiveNormalData(res, 'sh1apiope032/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope032/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope032/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope032/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
