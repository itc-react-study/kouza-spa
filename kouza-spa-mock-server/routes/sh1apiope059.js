const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope059', req.body);
    switch (req.body.fileName) {
      case '2011-05-05.zip':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope059/error/5-1-5.json'
        );
        break;
      case '2011-05-06.zip':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope059/fatal/5-1-6.json');
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope059/normal/4-1-2.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
