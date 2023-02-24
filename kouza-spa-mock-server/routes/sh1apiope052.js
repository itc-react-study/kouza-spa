const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope052', req.body);
    if (req.body.acceptanceNo && req.body.acceptanceNo.length > 0) {
      switch (req.body.acceptanceNo[0]) {
        case '2021040108002':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-8.json');
          break;
        case '2021050106001':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope052/error/5-1-6.json'
          );
          break;
        case '2021050107001':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope052/fatal/5-1-7.json'
          );
          break;
        default:
         jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-9.json');
      }
      return;
    }
    if (req.body.shopName) {
      switch (req.body.shopName) {
        case '4-1-9':
        case '418':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-8.json');
          break;
        case '4-1-10':
        case '４－１－１０':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-10.json');
          break;
        case '4-1-11':
        case '４－１－１１':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-11.json');
          break;
        case '4-1-12':
        case '４－１－１２':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-12.json');
          break;
        case '4-1-13':
        case '４－１－１３':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-13.json');
          break;
        case '5-1-8':
        case '５－１－８':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope052/error/5-1-8.json'
          );
          break;
        case '5-1-9':
        case '５－１－９':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope052/fatal/5-1-9.json'
          );
          break;
        case '5-1-10':
        case '５－１－１０':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/5-1-10.json');
          break;
        case '5-1-11':
        case '５－１－１１':
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/5-1-11.json');
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope052/normal/4-1-9.json');
      }
      return;
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
