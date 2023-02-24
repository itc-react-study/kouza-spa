const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom014', req.body);
    switch (req.body.postNo) {
      case '1234567':
        // 複数行データ
        jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-2.json');
        // jsonServer.receiveNormalData(
        //   res,
        //   'sh1apicom014/normal/cdd-edd-tab/1-19-4.json'
        // );
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom014/fatal/account-open-operation/5-1-17.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom014/error/account-open-operation/5-1-18.json');
        break;
      case '1000002':
        // 複数行データ
        //jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-2.json');
        // 1件
        jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-1件.json');
        break;
      case '1111111':
        // 一行データ
        jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-1件.json');
        break;
      case '1000000':
        // データなし
        jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-3.json');
        break;
      case '2222222':
        // 複数行データ
        jsonServer.receiveNormalData(res, 'sh1apicom014/normal/1-1-4.json');
        break;
      case '1111110':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom014/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom014/fatal/3-1-1.json');
        break;
      case '3333333':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apicom014/fatal/account-open-operation/5-1-17.json'
        );
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom014/error/account-open-operation/5-1-18.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
