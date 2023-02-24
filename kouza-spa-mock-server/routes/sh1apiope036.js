const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope036', req.body);
    switch (req.body.hearingFlag) {
      case '0':
        jsonServer.receiveNormalData(res, 'sh1apiope036/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope036/fatal/account-open-operation/5-1-26.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope036/error/account-open-operation/5-1-27.json');
        break;
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope036/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope036/fatal/account-open-operation/5-1-20.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope036/error/account-open-operation/5-1-21.json');
        break;
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope036/normal/1-1-1.json');
        break;
      case 'xxx':
        jsonServer.receiveNormalData(res, 'sh1apiope036/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope036/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope036/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
