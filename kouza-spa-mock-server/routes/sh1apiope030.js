const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope030', req.body);
    switch (req.body.shopNo) {
      case '407':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-2.json');
        break;
      case '777':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-3.json');
        break;
      case '666':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope030/fatal/3-1-1.json');
        break;
      case '555':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope030/error/2-1-1.json'
        );
        break;
      case '222':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-1.json');
        break;
      case '789':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-4.json');
        break;
      case '456':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-6.json');
        break;
      case '123':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-7.json');
        break;
      case '989':
        jsonServer.receiveNormalData(res, 'sh1apiope030/normal/1-1-8.json');
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope030/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
