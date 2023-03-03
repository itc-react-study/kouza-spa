const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope041', req.body);
    switch (req.body.registNo) {
      case 'XXX1234568':
        //res.send(404);
        jsonServer.receiveNormalData(res, 'sh1apiope041/normal/1-1-1.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope041/fatal/account-open-operation/5-1-62.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope041/error/account-open-operation/5-1-63.json');
        break;
      case 'xxx':
      case '123456789':
      case 'XXX1234569':
        // res.send(404);
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope041/fatal/modified-content-recheck/5-1-26.json'
        // );
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope041/error/modified-content-recheck/5-1-27.json'
        // );
        jsonServer.receiveNormalData(res, 'sh1apiope041/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope041/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope041/fatal/3-1-1.json');
        break;
      case '3':
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope041/fatal/3-1-1.json');
        res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope041/fatal/account-open-operation/5-1-62.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope041/error/account-open-operation/5-1-63.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
