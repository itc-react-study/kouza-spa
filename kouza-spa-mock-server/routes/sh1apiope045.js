const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope045', req.body);
    if (req.body.shopNameSetted) {
      switch (req.body.shopNameSetted) {
        case 'ｄｅｔａｉｌ－ｒｅｆｅｒｅｎｃｅ':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/detail-reference/2-1-1.json'
          );
          return;
        case 'ｉｎｆｏｒｍａｔｉｏｎ－ｄｅｔａｉｌ':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/information-detail/2-1-1.json'
          );
          return;
        case 'ｈｅａｄｅｒ－ｉｎｆｏ－ｂｏｘ':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/header-info-box/2-1-1.json'
          );
        case 'ｐｒｏｄｕｃｔ':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/product-selection-tab/2-1-1.json'
          );
          return;
      }
    }

    if (req.body.shopNoSetted) {
      switch (req.body.shopNoSetted) {
        case '2222':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/product-selection-tab/2-1-1.json'
          );
          return;
      }
      switch (req.body.shopNoSetted) {
        case '3333':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope045/normal/product-selection-tab/4-1-1.json'
          );
          return;
      }
    }

    switch (('req.body.searchType', req.body.searchType)) {
      case '1':
        // 2-1-1
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-1.json');
        // 13件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-13.json');
        // 2-1-12、13などなど　背景色をクリーム色
        // jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-12.json');
        // 0件 1-4-1
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/1-4-1.json');
        // 4-1-6　45件
        jsonServer.receiveNormalData(
          res,
          'sh1apiope045/normal/transactions-list/4-1-6.json'
        );
        // 100件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-100.json');
        // 101件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-101.json');
        // 行選択時 エラー発生　1-4-4 ~
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/1-4-4.json');

        // jsonServer.receiveSystemErrorData(res, 'sh1apiope045/fatal/transactions-list/5-1-6.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope045/error/transactions-list/5-1-7.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope045/fatal/transactions-list-for-reference/5-1-6.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope045/error/transactions-list-for-reference/5-1-7.json');
        break;

      case '2':
        // 取引一覧 処理開始　ボタンを押す
        // 2-1-1
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-1.json');
        // 2-1-12、13などなど　背景色をクリーム色
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-12.json');
        // 4-1-6　45件
        jsonServer.receiveNormalData(
          res,
          'sh1apiope045/normal/transactions-list/4-1-6.json'
        );
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-23.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-24.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-25.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-26.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-27.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-28.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-29.json');
        // jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-30.json');
        // jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-31.json');
        // 0件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/1-4-1.json');
        break;

      case '3':
        // 取引一覧（参照用）
        // 2-1-1
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-1.json');
        // 2-1-12、13などなど　背景色をクリーム色
        // jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/2-1-12.json');

        // 4-1-6　45件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-6.json');
        // 550件
        jsonServer.receiveNormalData(
          res,
          'sh1apiope045/normal/transactions-list/4-1-550.json'
        );
        // 200件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-200.json');
        // 0件
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list/4-1-2.json');
        //jsonServer.receiveNormalData(res, 'sh1apiope045/normal/transactions-list-for-reference/4-1-4.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope045/fatal/transactions-list-for-reference/5-1-6.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope045/error/transactions-list-for-reference/5-1-7.json');
        break;

      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope045/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope045/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
