const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope035', req.body);
    switch (req.body.acceptanceNo) {
      case 'XXX1234568':
      case 'XXX1234569':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-33-147.json');
        break;
      case 'XXXXXX12345616':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-33-147.json');
        break;
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-1-1.json');
        break;
      case '1000000000001':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-1-1.json');
        break;
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-1-2.json');
        break;
      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope035/normal/1-1-2.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope035/fatal/account-open-operation/5-1-59.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope035/error/account-open-operation/5-1-60.json');
        break;
      case '0000123456789':
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope035/error/modified-content-recheck/5-1-24.json'
        // );
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope035/fatal/modified-content-recheck/5-1-23.json'
        // );
        // res.send(404);
        if (req.body.resendTarget.ineiRirekiTourokuDebit === '1') {
          jsonServer.receiveNormalData(
            res,
            'sh1apiope035/normal/modified-content-recheck/2-1-2.json'
          );
          break;
        }

        if (req.body.resendTarget.shinkiFutsu === '1') {
          jsonServer.receiveNormalData(
            res,
            'sh1apiope035/normal/modified-content-recheck/2-1-1.json'
          );
          break;
        }
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope035/fatal/account-open-operation/5-1-59.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope035/error/account-open-operation/5-1-60.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope035/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope035/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
