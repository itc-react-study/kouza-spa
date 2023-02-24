const express = require('express');
const Mock = require('mockjs');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router.post('', (req, res) => {
  console.log('sh1apiope115', req.body);
  switch (req.body.commonRequestHeader.deviceShopNumber) {
    case '6785':
    case '67851':
    case '6787':
    case '':
      jsonServer.receiveNormalData(res, 'sh1apiope115/normal/1-1-1.json');
      break;
    case 'yyy':
      jsonServer.receiveBusinessErrorData(res, 'sh1apiope115/error/2-1-1.json');
      break;
    case 'zzz':
      jsonServer.receiveSystemErrorData(res, 'sh1apiope115/fatal/3-1-1.json');
      break;
    default:
      jsonServer.receiveNormalData(res, 'sh1apiope115/normal/1-1-1.json');
    // jsonServer.receiveDefaultSystemError(res);
  }
});

module.exports = router;
