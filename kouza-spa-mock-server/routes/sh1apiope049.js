const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();
const requestMap = new Map();

router
  .post('', (req, res) => {
    console.log('sh1apiope049', req.body);
    switch (req.body.acceptanceNo) {
      case '1':
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope049/error/formal-check/5-1-9.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope049/fatal/formal-check/5-1-8.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope049/error/manager-judgment/5-1-7.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope049/fatal/manager-judgment/5-1-6.json');
        break;
      case '2':
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-2-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope049/error/recheck/5-1-7.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope049/fatal/recheck/5-1-6.json');
        break;
      case '3':
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-1-1.json');
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apiope049/fatal/account-open-operation/5-1-14.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apiope049/error/account-open-operation/5-1-15.json');
        break;
      case 'xxx':
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-1-1.json');
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope049/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apiope049/fatal/3-1-1.json');
        break;
      case 'XXXXXX12345616':
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-1-1.json');
        break;
      case '0000123456789':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case '0001123456789':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-7.json'
        );
        break;
      case '0000987654321':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/masking-information-detail/1-1-2.json'
        );
        break;
      case '0000111111111':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/masking-information-detail/1-1-3.json'
        );
        break;
      case '0000222222222':
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope049/fatal/masking-information-detail/4-1-4.json'
        );
        break;
      case '0000333333333':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope049/error/masking-information-detail/4-1-5.json'
        );
        break;

      // --- 取引一覧表示（参照用）モックデータ START --- //
      case '0120000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/2-1-1.json'
        );
        break;
      case '0120000040101': // case 4-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-1.json'
        );
        break;
      case '0120000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-2.json'
        );
        break;
      case '0120000040103': //  case 4-1-3
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-3.json'
        );
        break;
      case '0120000040104': // case 4-1-4
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-4.json'
        );
        break;
      case '0120000040105': // case 4-1-5
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-5.json'
        );
        break;
      case '0120000040106': // case 4-1-6
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-6.json'
        );
        break;
      case '0120000040107': // case 4-1-7
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/4-1-7.json'
        );
        break;
      case '0120000050111': // case 5-1-11
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/5-1-11.json'
        );
        break;
      case '0120000050112': // case 5-1-12
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/5-1-12.json'
        );
        break;
      case '0120000050113': // case 5-1-13
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/detail-reference/5-1-13.json'
        );
        break;
      case '0120000050114': // case 5-1-14
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apiope049/error/detail-reference/5-1-14.json'
        );
        break;
      case '0120000050115': // case 5-1-15
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apiope049/fatal/detail-reference/5-1-15.json'
        );
        break;
      case '0120000050116': // case 5-1-16
        res.sendStatus(404);
        break;
      // --- 取引一覧表示（参照用）モックデータ END --- //

      // --- 本人確認資料表示 モックデータ START --- //
      case '0310000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/2-1-1.json'
        );
        break;
      case '0310000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/4-1-2.json'
        );
        break;
      case '0310000040103': // case 4-1-3
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/4-1-3.json'
        );
        break;
      case '0310000040104': // case 4-1-4
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/4-1-4.json'
        );
        break;
      case '0310000040105': // case 4-1-5
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/4-1-5.json'
        );
        break;
      case '0310000040106': // case 4-1-6
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/information-detail/4-1-6.json'
        );
        break;
      case '0310000040107': // case 4-1-7
        if (!requestMap.has(req.body.acceptanceNo)) {
          requestMap.set(req.body.acceptanceNo, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope049/normal/information-detail/4-1-7_before.json'
          );
        } else {
          jsonServer.receiveNormalData(
            res,
            'sh1apiope049/normal/information-detail/4-1-7.json'
          );
        }
        break;
      case '0310000050102': // case 5-1-2
        if (!requestMap.has(req.body.acceptanceNo)) {
          requestMap.set(req.body.acceptanceNo, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope049/normal/information-detail/5-1-2_before.json'
          );
        } else {
          jsonServer.receiveBusinessErrorData(
            res,
            'sh1apiope049/error/information-detail/5-1-2.json'
          );
        }
        break;
      case '0310000050103': // case 5-1-3
        if (!requestMap.has(req.body.acceptanceNo)) {
          requestMap.set(req.body.acceptanceNo, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope049/normal/information-detail/5-1-3_before.json'
          );
        } else {
          jsonServer.receiveSystemErrorData(
            res,
            'sh1apiope049/fatal/information-detail/5-1-3.json'
          );
        }
        break;
      case '0310000050104': // case 5-1-4
        if (!requestMap.has(req.body.acceptanceNo)) {
          requestMap.set(req.body.acceptanceNo, 1);
          jsonServer.receiveNormalData(
            res,
            'sh1apiope049/normal/information-detail/5-1-4_before.json'
          );
        } else {
          res.sendStatus(404);
        }
        break;
      // --- 本人確認資料表示 モックデータ END --- //

      // --- 明細ヘッダ モックデータ START --- //
      case '0320000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/header-info-box/2-1-1.json'
        );
        break;
      case '0320000040101': // case 4-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/header-info-box/4-1-1.json'
        );
        break;
      case '0320000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/header-info-box/4-1-2.json'
        );
        break;
      // --- 明細ヘッダ モックデータ END --- //

      case 'XXXXXX1234565':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234565':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234567':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234568':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234569':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234570':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234571':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234572':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234573':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX1234568':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      case 'XXXXXX12345670':
        jsonServer.receiveNormalData(
          res,
          'sh1apiope049/normal/formal-check/4-1-6.json'
        );
        break;
      default:
        jsonServer.receiveNormalData(res, 'sh1apiope049/normal/1-1-1.json');
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
