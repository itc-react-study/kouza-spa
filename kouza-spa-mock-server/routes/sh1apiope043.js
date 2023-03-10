const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope043', req.body);
    switch (req.body.operation) {
      case '明細表示（参照用）':
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/detail-reference/5-1-8.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/detail-reference/5-1-9.json');
        // res.send(404);
        break;
    }

    switch (req.body.operationDiv) {
      // ログイン
      case '21':
        jsonServer.receiveUnencryptData(res, 'sh1apiope043/normal/1-1-1.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/transactions-list/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/transactions-list/5-1-3.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/account-open-operation/5-1-8.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/account-open-operation/5-1-9.json');
        break;
      // 画面表示
      case '01':
        jsonServer.receiveNormalData(res, 'sh1apiope043/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/transactions-list/5-1-3.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/transactions-list/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/formal-check/5-1-3.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/formal-check/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/transactions-list-for-reference/5-1-3.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/transactions-list-for-reference/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/recheck/5-1-3.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/recheck/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/operator-information/5-1-3.json');
        // jsonServer.receiveSystemErrorData(res,'sh1apiope043/fatal/operator-information/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/tablet-registration/5-1-2.json');
        // jsonServer.receiveSystemErrorData(res,'sh1apiope043/fatal/tablet-registration/5-1-3.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/operator-list/5-1-1.json');
        // jsonServer.receiveSystemErrorData(res,'sh1apiope043/fatal/operator-list/5-1-2.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/operator-status-list/5-1-2.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/operator-status-list/5-1-3.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/form-printing-list/5-1-2.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/form-printing-list/5-1-3.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope043/error/-list/5-1-2.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope043/fatal/-list/5-1-3.json');
        // res.send(404);
        break;
      case '03':
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope043/error/3-1-2.json'
        // );

        break;
      case '04':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope043/error/4-1-1.json'
        );
        break;
      case '05':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope043/fatal/waiting-status-list/5-1-2.json'
        );
        break;
      case '06':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope043/error/waiting-status-list/5-1-3.json'
        );
        break;
      default:
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope043/error/4-1-1.json'
        );
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;