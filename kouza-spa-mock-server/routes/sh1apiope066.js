const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope066', req.body);
    switch (req.body.shopNoSetted) {
      case '6785':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope066/normal/waiting-status-list/4-1-1.json'
        );
        break;
      case '6787':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope066/normal/waiting-status-list/4-1-1.json'
        );
        break;
      case '67851':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope066/normal/waiting-status-list/4-1-1.json'
        );
        break;
      case '6788':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope066/fatal/waiting-status-list/5-1-4.json'
        );
        break;
      case '6789':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope066/error/waiting-status-list/5-1-5.json'
          //'sh1apiope066/error/2-1-1.json'
        );
        break;
      case '2222':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope066/normal/tablet-registration/1-1-1.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(
          res,
          'sh1apiope066/normal/waiting-status-list/4-1-1.json'
        );

      // jsonServer.receiveSystemErrorData(
      //   res,
      //   'sh1apiope066/fatal/3-1-1.json'
      // );

      // jsonServer.receiveBusinessErrorData(
      //   res,
      //   'sh1apiope066/error/2-1-1.json'
      // );

      // 0件
      // jsonServer.receiveNormalData(
      //   res,
      //   'sh1apiope066/normal/tablet-list/4-1-2.json'
      // );
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
