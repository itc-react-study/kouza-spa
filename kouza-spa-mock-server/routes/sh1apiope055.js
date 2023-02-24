const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope055', req.body);
    switch (req.body.acceptanceNo) {
      case 'xxx':
        jsonServer.receiveNormalData(res, 'sh1apiope055/normal/1-1-1.json');
        break;
      case '123456789':
        jsonServer.receiveNormalData(res, 'sh1apiope055/normal/1-1-1.json');
        break;
      case '444444444':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope055/fatal/masking-information-detail/4-1-8.json'
        );
        break;
      case '555555555':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope055/error/masking-information-detail/4-1-9.json'
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
