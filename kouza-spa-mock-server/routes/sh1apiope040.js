const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope040', req.body);
    switch (req.body.acceptanceNo) {
      case '123456789':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
      case 'XXXXXX12345617':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
      case '1000000000001':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
      case 'XXXXXX12345618':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
      case 'XXXXXX12345616':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(
        //   res,
        //   'sh1apiope040/error/modified-content-recheck/5-1-21.json'
        // );
        // jsonServer.receiveSystemErrorData(
        //   res,
        //   'sh1apiope040/fatal/modified-content-recheck/5-1-20.json'
        // );
        //res.send(404);
        break;
      case 'xxx':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope040/error/2-1-1.json'
        );
        break;
      case '0000123456789':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        break;
      case 'XXX1234568':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        break;
      case 'XXX1234569':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        break;
      case 'XXX12345672':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/formal-check/5-1-11.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/formal-check/5-1-10.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/error/manager-judgment/5-1-13.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/manager-judgment/5-1-12.json');
        break;
      case 'XXX1234567':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/formal-check/5-1-11.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/formal-check/5-1-10.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/error/manager-judgment/5-1-13.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/manager-judgment/5-1-12.json');
        break;
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-2-1.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/recheck/5-1-12.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/recheck/5-1-13.json');
        break;
      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope040/normal/1-2-1.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/recheck/5-1-12.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/recheck/5-1-13.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/account-open-operation/5-1-32.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-33.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/account-open-operation/5-1-35.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-36.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/account-open-operation/5-1-44.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-45.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/account-open-operation/5-1-50.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-51.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/account-open-operation/5-1-56.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-57.json');
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope040/fatal/3-1-1.json');
        break;
      default:
      // jsonServer.receiveDefaultSystemError(res);
      //jsonServer.receiveBusinessErrorData(res, 'sh1apiope040/error/account-open-operation/5-1-57.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
