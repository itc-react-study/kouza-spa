const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope046', req.body);
    switch (req.body.forumTextDiv) {
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope046/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope046/error/transactions-list/5-1-9.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope046/fatal/transactions-list/5-1-8.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope046/error/transactions-list-for-reference/5-1-9.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope046/fatal/transactions-list-for-reference/5-1-8.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope046/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope046/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
