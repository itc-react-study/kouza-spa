const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope061', req.body);
    switch (req.body.operatorId) {
      case '20892133':
        //jsonServer.receiveNormalData(res, 'sh1apiope061/default.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope061/fatal/operator-list/5-1-8.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope061/error/operator-information/5-1-5.json');
        jsonServer.receiveNormalData(
          res,
          'sh1apiope061/normal/transactions-list/2-1-3.json'
        );
        break;
      case '20892134':
        //jsonServer.receiveNormalData(res, 'sh1apiope061/default.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope061/fatal/operator-list/5-1-8.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope061/error/operator-information/5-1-5.json');
        jsonServer.receiveNormalData(
          res,
          'sh1apiope061/normal/transactions-list/2-1-1.json'
        );
        break;
      // OSR
      case '21071901':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-1.json');
        break;
      // CSR
      case '21071902':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-2.json');
        break;
      // 係員
      case '21071903':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-3.json');
        break;
      // リーダー
      case '21071904':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-4.json');
        break;
      // 検取
      case '21071905':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-5.json');
        break;
      // OSR
      case '21071906':
        jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-6.json');
        break;
      case '11111111':
        //jsonServer.receiveNormalData(res, 'sh1apiope061/default.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope061/fatal/operator-list/5-1-8.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope061/error/operator-information/5-1-5.json');
        jsonServer.receiveNormalData(
          res,
          'sh1apiope061/normal/transactions-list/2-1-2.json'
        );
        break;
      case '12345678':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope061/normal/transactions-list/2-1-2.json'
        );
        break;

      case 'buserror':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope061/error/operator-list/5-1-7.json'
        );
        break;
      case 'syserror':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope061/fatal/operator-list/5-1-8.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope061/fatal/3-1-1.json');
        break;
      default:
        // jsonServer.receiveNormalData(res, 'sh1apiope061/normal/2-1-1.json');

        jsonServer.receiveNormalData(res, 'sh1apiope061/default.json');
      // jsonServer.receiveBusinessErrorData(
      //   res,
      //   'sh1apiope061/error/operator-information/5-1-5.json'
      // );
      // jsonServer.receiveSystemErrorData(
      //   res,
      //   'sh1apiope061/fatal/operator-information/5-1-4.json'
      // );
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
