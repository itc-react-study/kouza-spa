const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope042', req.body);
    switch (req.body.statusAfter) {
      case 'XXX1234568':
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');

        break;
      case '2':
      case 'XXX1234569':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/account-open-operation/5-1-23.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/account-open-operation/5-1-24.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/account-open-operation/5-1-29.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/account-open-operation/5-1-30.json');
        break;
      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '4':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '5':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/3-1-1.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/2-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/account-open-operation/5-1-65.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/account-open-operation/5-1-66.json');
        break;
      case '6':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '7':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '8':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope042/fatal/modified-content-recheck/5-1-29.json'
        // );
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope042/error/modified-content-recheck/5-1-30.json'
        // );
        break;
      case '9':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '10':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '11':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        break;
      case '12':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/3-1-1.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/2-1-1.json');
        break;
      case '13':
        jsonServer.receiveNormalData(res, 'sh1apiope042/normal/1-1-1.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/3-1-1.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope042/error/2-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope042/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope042/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
