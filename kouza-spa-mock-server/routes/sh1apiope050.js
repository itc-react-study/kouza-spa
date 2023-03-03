const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope050', req.body);
    switch (req.body.shopNameSetted) {
      case 'ｅｒｒｏｒ－ｔａｂ':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope050/normal/error-tab/2-1-1.json'
        );
        return;
    }
    switch (req.body.acceptanceDate) {
      case '20210701':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope050/normal/product-selection-tab/2-1-5.json'
        );
      case '20210610':
        jsonServer.receiveNormalData(res, 'sh1apiope050/normal/4-1-2.json');
      case '20210610':
        jsonServer.receiveNormalData(res, 'sh1apiope050/normal/4-1-2.json');
        break;
      case '20210611':
        jsonServer.receiveNormalData(res, 'sh1apiope050/normal/4-1-3.json');
        break;
      case '20210612':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope050/fatal/5-1-4.json');
        break;
      case '20210613':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope050/error/5-1-5.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope050/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
