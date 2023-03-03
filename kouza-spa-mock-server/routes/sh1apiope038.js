const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope038', req.body);
    switch (req.body.processKubun) {
      case '0':
        switch (req.body.acceptanceNo) {
          case 'XXXXXX12345614':
          case 'XXXXXX12345615':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
            break;
          case 'XXXXXX12345616':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-2.json');
            break;
          case 'XXXXXX12345617':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-3.json');
            break;
          case 'XXXXXX12345618':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-4.json');
            break;
        }

        break;
      case '1':
        switch (req.body.acceptanceNo) {
          case '1000000000007':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-6.json');
            break;
          case '1000000000001':
            jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-5.json');
            break;
        }
        break;
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
        break;
      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
        break;
      case '4':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/4-1-16.json');
        break;
      case '5':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
        break;
      case '6':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
        break;
      case '7':
        jsonServer.receiveNormalData(res, 'sh1apiope038/normal/1-1-1.json');
        break;
      case 'fatal':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope038/fatal/unhandled-error-list/5-1-12.json'
        );
        break;
      case 'error':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope038/error/unhandled-error-list/5-1-13.json'
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
