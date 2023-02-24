const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope056', req.body);
    switch (req.body.dateFrom) {
      case '2021/07/03':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope056/normal/business-statistics-data/4-1-3.json'
        );
        break;
      case '2021/06/03':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope056/fatal/business-statistics-data/5-1-4.json'
        );
        break;
      case '2021/06/07':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope056/error/business-statistics-data/5-1-5.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope056/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
