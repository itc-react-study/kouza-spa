const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope063', req.body);
    switch (req.body.shopNoSetted) {
      case '':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-1.json');
      case '6785':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-1.json');
      case '6787':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/1-1-1.json');
        break;
      case '67851':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-3.json');
        break;
      case '1234':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-2.json');
        break;
      case '7777':
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-3.json');
        break;
      case '1111':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope063/fatal/waiting-status-list/5-1-6.json'
        );
        break;
      case '3333':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope063/error/waiting-status-list/5-1-7.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope063/fatal/3-1-1.json');
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope063/normal/4-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
