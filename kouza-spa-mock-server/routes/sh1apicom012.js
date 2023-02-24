const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom012', req.body);
    switch (req.body.commonRequestHeader.applicationID) {
      case '':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom012/normal/cdd-edd-tab/1-1-1.json'
        );
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom012/error/detail-reference/5-1-5.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom012/fatal/detail-reference/5-1-6.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom012/fatal/account-open-operation/5-1-5.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom012/error/account-open-operation/5-1-6.json');
        // res.send(404);
        break;
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apicom012/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom012/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom012/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveNormalData(
          res,
          'sh1apicom012/normal/cdd-edd-tab/1-1-1.json'
        );
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
