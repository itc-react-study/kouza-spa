const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apiope060', req.body);
    if (req.body.sortFlg) {
      switch (req.body.sortFlg) {
        case '1':
          jsonServer.receiveNormalData(
            res,
            'sh1apiope060/normal/transactions-list/2-1-1.json'
          );
          // jsonServer.receiveSystemErrorData(res, 'sh1apiope060/fatal/transactions-list/5-1-3.json');
          // jsonServer.receiveBusinessErrorData(res, 'sh1apiope060/error/transactions-list/5-1-4.json');
          // jsonServer.receiveSystemErrorData(res, 'sh1apiope060/fatal/transactions-list-for-reference/5-1-3.json');
          // jsonServer.receiveBusinessErrorData(res, 'sh1apiope060/error/transactions-list-for-reference/5-1-4.json');
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/2-1-1.json');
      }
    } else if (req.body.operatorId) {
      switch (req.body.operatorId) {
        case '10000411':
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/4-1-2.json');
          break;
        case '10000414':
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/4-1-4.json');
          break;
        case '20892133':
          jsonServer.receiveNormalData(res, 'sh1apiope060/default.json');
          break;
        case 'buserror':
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope060/error/5-1-3.json'
          );
          break;
        case 'syserror':
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope060/fatal/5-1-4.json'
          );
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/2-1-1.json');
      }
    } else if (req.body.operatorStatus) {
      switch (req.body.operatorStatus) {
        case '2':
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/4-1-3.json');
          break;
        default:
          jsonServer.receiveNormalData(res, 'sh1apiope060/normal/2-1-1.json');
      }
    } else {
      jsonServer.receiveNormalData(res, 'sh1apiope060/normal/2-1-1.json');
      //jsonServer.receiveBusinessErrorData(res, 'sh1apiope060/error//5-1-3.json');
      //jsonServer.receiveSystemErrorData(res, 'sh1apiope060/fatal/5-1-4.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
