const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom067', req.body);
    switch (req.body.tabletId) {
      case '1234':
        jsonServer.receiveNormalData(res, 'sh1apicom067/normal/2-1-2.json');
        break;
      case '1235':
        jsonServer.receiveNormalData(res, 'sh1apicom067/normal/2-1-3.json');
        break;
      case '1236':
        jsonServer.receiveNormalData(res, 'sh1apicom067/normal/2-1-4.json');
        break;
      case '1237':
        jsonServer.receiveNormalData(res, 'sh1apicom067/normal/2-1-5.json');
        break;
      case '5555':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom067/error/5-1-4.json'
        );
        break;
      case '5556':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom067/fatal/5-1-5.json');
        break;
      case '11111111': // 入力端末特定情報が既に登録してない
        //jsonServer.receiveNormalData(res, 'sh1apicom067/normal/1-3-34.json');
        //jsonServer.receiveSystemErrorData(res, 'sh1apicom067/fatal/3-1-1.json');
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom067/error/2-1-1.json'
        );
        break;
      default:
        // 入力端末特定情報が既に登録済み
        jsonServer.receiveNormalData(res, 'sh1apicom067/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
