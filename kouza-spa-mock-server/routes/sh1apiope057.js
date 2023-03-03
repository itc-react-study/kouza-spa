const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope057', req.body);
    switch (req.body.gyomuToukeiDataFileName) {
      case '20201111-XXXXXXXX.zip':
        jsonServer.receiveNormalData(res, 'sh1apiope057/normal/1-1-1.json');
        break;
      case 'fatal.zip':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope057/fatal/5-1-6.json');
        break;
      case 'error.zip':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope057/error/5-1-7.json'
        );
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
