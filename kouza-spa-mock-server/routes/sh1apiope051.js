const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();
const requestMap = new Map();

router
  .post('', (req, res) => {
    console.log('sh1apiope051', req.body);
    switch (req.body.shopName) {
      case '1-2-1':
      case '１－２－１':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/1-2-1.json');
        break;
      case '3-1-1':
      case '３－１－１':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/3-1-1.json');
        break;
      case '4-1-2':
      case '４－１－２':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-2.json');
        break;
      case '4-1-3':
      case '４－１－３':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-3.json');
        break;
      case '4-1-4':
      case '４－１－４':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-4.json');
        break;
      case '4-1-5':
      case '４－１－５':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-5.json');
        break;
      case '4-1-6':
      case '４－１－６':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-6.json');
        break;
      case '4-1-7':
      case '４－１－７':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-7.json');
        break;
      case '418':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-8.json');
        break;
      case '4-1-9':
      case '４－１－９':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/4-1-9_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-9.json');
        }
        break;
      case '4-1-10':
      case '４－１－１０':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/4-1-10_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-10.json');
        }
        break;
      case '4-1-11':
      case '４－１－１１':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/4-1-11_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-11.json');
        }
        break;
      case '4-1-12':
      case '４－１－１２':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/4-1-12_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-12.json');
        }
        break;
      case '4-1-13':
      case '４－１－１３':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/4-1-13_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-13.json');
        }
        break;
      case '4-1-14':
      case '４－１－１４':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-14.json');
      case '5-1-4':
      case '５－１－４':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope051/error/5-1-4.json'
        );
        break;
      case '5-1-5':
      case '５－１－５':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope051/fatal/5-1-5.json');
        break;
      case '5-1-6':
      case '５－１－６':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/5-1-6.json');
        break;
      case '5-1-7':
      case '５－１－７':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/5-1-7.json');
        break;
      case '5-1-8':
      case '５－１－８':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/5-1-8.json');
        break;
      case '5-1-9':
      case '５－１－９':
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/5-1-9.json');
        break;
      case '5-1-10':
      case '５－１－１０':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/5-1-10_before.json'
          );
        } else {
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope051/error/5-1-10.json'
          );
        }
        break;
      case '5-1-11':
      case '５－１－１１':
        if (!requestMap.has(req.body.shopName)) {
          requestMap.set(req.body.shopName, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope051/normal/5-1-11_before.json'
          );
        } else {
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope051/fatal/5-1-11.json'
          );
        }
        break;
      default:
        // jsonServer.receiveDefaultSystemError(res);
        jsonServer.receiveNormalData(res, 'sh1apiope051/normal/4-1-2.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
