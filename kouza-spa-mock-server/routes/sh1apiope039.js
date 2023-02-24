const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope039', req.body);
    switch (req.body.acceptanceNo) {
      case '123456789':
        jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-1-1.json');
      // jsonServer.receiveBusinessErrorData(
      //   res,
      //   'sh1apiope039/error/modified-content-recheck/5-1-33.json'
      // );
      // jsonServer.receiveSystemErrorData(
      //   res,
      //   'sh1apiope039/fatal/modified-content-recheck/5-1-32.json'
      // );
      // res.send(404);
    }
    switch (req.body.dbProcessDistinguish) {
      case '0':
        jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope039/error/formal-check/5-1-13.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/formal-check/5-1-12.json');
        break;
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/account-open-operation/5-1-38.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope039/error/account-open-operation/5-1-39.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/account-open-operation/5-1-41.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope039/error/account-open-operation/5-1-42.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/account-open-operation/5-1-47.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope039/error/account-open-operation/5-1-48.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/account-open-operation/5-1-53.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope039/error/account-open-operation/5-1-54.json');
        break;
      case '2':
      // jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-2-1.json');
      // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/fatal/recheck/5-1-14.json');
      // jsonServer.receiveBusinessErrorData(
      //   res,
      //   'sh1apiope039/error/recheck/5-1-15.json'
      // );

      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-1-1.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/error/manager-judgment/5-1-15.json');
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope039/fatal/manager-judgment/5-1-14.json'
        // );
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope039/error/recheck/5-1-15.json'
        // );

        break;
      case '4':
        jsonServer.receiveNormalData(res, 'sh1apiope039/normal/1-1-1.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope039/error/manager-judgment/5-1-15.json');

        break;
      case '5':
        res.send('404');
      case 'fatal':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope039/fatal/masking-information-detail/4-1-6.json'
        );
        break;
      case 'error':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope039/error/masking-information-detail/4-1-7.json'
        );
        break;
      case '6':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope039/normal/masking-information-detail/1-1-1.json'
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
