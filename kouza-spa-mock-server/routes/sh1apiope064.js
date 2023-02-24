const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope064', req.body);
    switch (req.body.noticeDiv) {
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope064/normal/4-1-1.json');
        break;
      case '3':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope064/fatal/waiting-status-list/5-1-8.json'
        );
        break;
      case '4':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope064/error/waiting-status-list/5-1-9.json'
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
