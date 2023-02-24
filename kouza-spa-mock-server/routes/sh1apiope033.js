const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope033', req.body);
    switch (req.body.kycUketsukeBangou) {
      case '123456789':
        jsonServer.receiveNormalData(res, 'sh1apiope033/normal/1-1-1.json');
        break;
      case '111111111':
        jsonServer.receiveNormalData(res, 'sh1apiope033/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope033/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope033/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
