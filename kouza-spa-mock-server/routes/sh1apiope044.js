const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();
const requestMap = new Map();

router
  .post('', (req, res) => {
    console.log('sh1apiope044', req.body);
    switch (req.body.shopNameSetted) {
      case '4-1-5':
      case '４－１－５':
        jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-5.json');
        break;
      case '4-1-6':
      case '４－１－６':
        jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-6.json');
        break;
      case '4-1-7':
      case '４－１－７':
        jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-7.json');
        break;
      case '4-1-8':
      case '４－１－８':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-8_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-8.json');
        }
        break;
      case '4-1-9':
      case '４－１－９':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-9_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-9.json');
        }
        break;
      case '4-1-10':
      case '４－１－１０':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-10_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-10.json');
        }
        break;
      case '4-1-11':
      case '４－１－１１':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-11_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-11.json');
        }
        break;
      case '4-1-12':
      case '４－１－１２':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-12_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-12.json');
        }
        break;
      case '4-1-13':
      case '４－１－１３':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-13_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-13.json');
        }
        break;
      case '4-1-14':
      case '４－１－１４':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-14_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-14.json');
        }
        break;
      case '4-1-15':
      case '４－１－１５':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/4-1-15_before.json'
          );
        } else {
          jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-15.json');
        }
        break;
      case '4-1-16':
      case '４－１－１６':
        jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-16.json');
        break;
      case '5-1-6':
      case '５－１－６':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope044/error/5-1-6.json'
        );
        break;
      case '5-1-7':
      case '５－１－７':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope044/fatal/5-1-7.json');
        break;
      case '5-1-8':
      case '５－１－８':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/5-1-8_before.json'
          );
        } else {
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope044/error/5-1-8.json'
          );
        }
        break;
      case '5-1-9':
      case '５－１－９':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/5-1-9_before.json'
          );
        } else {
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope044/fatal/5-1-9.json'
          );
        }
        break;
      case '5-1-10':
      case '５－１－１０':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/5-1-10_before.json'
          );
        } else {
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope044/error/5-1-10.json'
          );
        }
        break;
      case '5-1-11':
      case '５－１－１１':
        if (!requestMap.has(req.body.shopNameSetted)) {
          requestMap.set(req.body.shopNameSetted, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope044/normal/5-1-11_before.json'
          );
        } else {
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope044/fatal/5-1-11.json'
          );
        }
        break;
      default:
        jsonServer.receiveUnencryptData(res, 'sh1apiope044/normal/2-1-1.json');
      // jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-2.json');
      // jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-3.json');
      // jsonServer.receiveNormalData(res, 'sh1apiope044/normal/4-1-4.json');
      // jsonServer.receiveBusinessErrorData(res, 'sh1apiope044/error/5-1-4.json');
      // jsonServer.receiveSystemErrorData(res, 'sh1apiope044/fatal/5-1-5.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
