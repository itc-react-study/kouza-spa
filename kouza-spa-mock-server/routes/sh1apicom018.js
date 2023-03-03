const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom018', req.body);
    switch (req.body.storeInfoSearchList[0].shopNo) {
      case '001':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom018/normal/modified-content-recheck/1-22-45_1.json'
        );
        break;
      case '002':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom018/normal/modified-content-recheck/1-22-45_2.json'
        );
        break;
      case '003':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom018/normal/modified-content-recheck/1-22-45_3.json'
        );
        break;
      case '111':
        jsonServer.receiveNormalData(res, 'sh1apicom018/normal/1-1-1.json');
        break;
      case '222':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom018/error/2-1-1.json'
        );
        break;
      case '333':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom018/error/5-1-2.json'
        );
        break;
      case '444':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom018/error/5-1-3.json'
        );
        break;
      case '555':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom018/fatal/5-1-4.json');
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apicom018/normal/1-1-1.json');
    }
  })
  .all('', (req, ress) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
