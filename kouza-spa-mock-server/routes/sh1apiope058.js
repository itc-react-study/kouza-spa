const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope058', req.body);
    if (req.body.dateFrom) {
      switch (req.body.dateFrom) {
        case '20210608':
          jsonServer.receiveNormalData(res, 'sh1apiope058/normal/4-1-13.json');
          break;
        case '20210609':
          jsonServer.receiveNormalData(res, 'sh1apiope058/normal/4-1-14.json');
          break;
        case '20210610':
          jsonServer.receiveNormalData(res, 'sh1apiope058/normal/4-1-15.json');
          break;
        case '20210501':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope058/error/5-1-3.json'
          );
          break;
        case '20210502':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope058/fatal/5-1-4.json'
          );
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope058/normal/2-1-1.json');
          break;
      }
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
