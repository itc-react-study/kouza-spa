const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope029', req.body);
    switch (req.body.searchMethod) {
      case '1':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope029/normal/pre-inquiry-tab/1-1-1.json'
        );
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope029/error/formal-check/5-1-7.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope029/fatal/formal-check/5-1-6.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope029/fatal/recheck/5-1-10.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope029/error/recheck/5-1-11.json');

        break;
      case '2':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope029/normal/pre-inquiry-tab/1-1-1.json'
        );
        break;
      case '3':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        break;
      case '4':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom048/error/2-1-1.json'
        );
        break;
      default:
        jsonServer.receiveDefaultSystemError(res);
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
