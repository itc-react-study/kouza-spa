const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope068', req.body);
    switch (req.body.tabletInfo.tabletId) {
      case '88888888':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope068/error/2-1-1.json'
        );
        break;
      case '99999999':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope068/fatal/3-1-1.json');
        break;
      case '11111111': //追加
        jsonServer.receiveSystemErrorData(res, 'sh1apiope068/fatal/3-1-1.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apiope068/error/2-1-1.json');
        break;
      case '111111': // 行選択
        //jsonServer.receiveSystemErrorData(res, 'sh1apiope068/fatal/3-1-1.json');
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope068/error/2-1-1.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope068/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
