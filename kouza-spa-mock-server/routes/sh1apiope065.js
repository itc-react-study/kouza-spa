const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .put('', (req, res) => {
    console.log('sh1apiope065', req.body);
    switch (req.body.noticeboard) {
      case '1111':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope065/fatal/waiting-status-list/5-1-14.json'
        );
        break;
      case '2222':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope065/error/waiting-status-list/5-1-15.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope065/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
