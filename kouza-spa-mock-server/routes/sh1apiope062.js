const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope062', req.body);
    if (req.body.operatorInfo.operatorId) {
      switch (req.body.operatorInfo.operatorId) {
        case 'xxx':
          jsonServer.receiveNormalData(res, 'sh1apiope062/normal/1-1-1.json');
          break;
        case 'yyy':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope062/error/2-1-1.json'
          );
          break;
        case 'zzz':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope062/fatal/3-1-1.json'
          );
          break;
        case '20892137':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope062/error/operator-list/5-1-5.json'
          );
          break;
        case '20892138':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope062/fatal/operator-list/5-1-6.json'
          );
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope062/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope062/error/operator-information/5-1-7.json'
        // );
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope062/fatal/operator-information/5-1-6.json'
        // );
      }
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
