const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope031', req.body);
    switch (req.body.shopNo) {
      case '769':
        jsonServer.receiveNormalData(res, 'sh1apiope031/normal/1-1-2.json');
        break;
      case '555':
        jsonServer.receiveNormalData(res, 'sh1apiope031/normal/1-1-3.json');
        break;
      case '967':
        jsonServer.receiveNormalData(res, 'sh1apiope031/normal/1-1-3.json');
        break;
      case '333':
        jsonServer.receiveNormalData(res, 'sh1apiope031/normal/1-1-3.json');
        break;
      case '222':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope031/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope031/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
