const express = require('express');
const jsonServer = require('../utils/file_server');
const router = express.Router();

router
  .post('', (req, res) => {
    console.log('sh1apicom048', req.body);
    switch (req.body.acceptanceNo) {
      case 'XXXXXX12345672':
        // 形式点検
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/manager-judgment/2-1-1.json'
        );
        // jsonServer.receiveNormalData(res, 'sh1apicom048/normal/formal-check/4-1-3.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom048/error/formal-check/5-1-5.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/formal-check/5-1-4.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/error/manager-judgment/5-1-5.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/manager-judgment/5-1-4.json');
        break;
      case '2':
        // 再鑑
        // jsonServer.receiveNormalData(res, 'sh1apicom048/normal/1-1-2.json');
        // jsonServer.receiveNormalData(res, 'sh1apicom048/normal/recheck/2-1-1.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom048/error/recheck/5-1-5.json');
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/recheck/5-1-4.json');
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/recheck/2-1-2.json'
        );
        break;
      case '3':
        // jsonServer.receiveNormalData(res, 'sh1apicom048/normal/1-1-3.json');
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/account-open-operation/1-1-1.json'
        );
        // res.send(404);
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/account-open-operation/5-1-11.json');
        // jsonServer.receiveBusinessErrorData(res, 'sh1apicom048/error/account-open-operation/5-1-12.json');
        break;
      case '4':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/manager-judgment/2-1-1.json'
        );
        break;
      case 'yyy':
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom048/error/2-1-1.json'
        );
        break;
      case 'zzz':
        jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        break;

      // --- 修正内容再鑑モックデータ START --- //
      case '0100000012258': // case 1-22-58
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-58.json'
        );
        break;
      case '0100000012260': // case 1-22-60
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-60.json'
        );
        break;
      case '0100000012261': // case 1-22-61
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-61.json'
        );
        break;
      case '0100000012262': // case 1-22-62
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-62.json'
        );
        break;
      case '0100000012264': // case 1-22-64
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-64.json'
        );
        break;
      case '0100000012265': // case 1-22-65
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-65.json'
        );
        break;
      case '0100000012266': // case 1-22-66
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-66.json'
        );
        break;
      case '0100000012267': // case 1-22-67
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-67.json'
        );
        break;
      case '0100000012268': // case 1-22-68
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-68.json'
        );
        break;
      case '0100000012269': // case 1-22-69
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-69.json'
        );
        break;
      case '0100000012270': // case 1-22-70
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-70.json'
        );
        break;
      case '0100000012271': // case 1-22-71
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-71.json'
        );
        break;
      case '0100000012272': // case 1-22-72
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-72.json'
        );
        break;
      case '0100000012273': // case 1-22-73
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-73.json'
        );
        break;
      case '0100000012274': // case 1-22-74
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/modified-content-recheck/1-22-74.json'
        );
        break;
      // --- 修正内容再鑑モックデータ END --- //

      // --- 取引一覧表示（参照用）モックデータ START --- //
      case '0120000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/2-1-1.json'
        );
        break;
      case '0120000040101': // case 4-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-1.json'
        );
        break;
      case '0120000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-2.json'
        );
        break;
      case '0120000040103': // case 4-1-3
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-3.json'
        );
        break;
      case '0120000040104': // case 4-1-4
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-4.json'
        );
        break;
      case '0120000040105': // case 4-1-5
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-5.json'
        );
        break;
      case '0120000040106': // case 4-1-6
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-6.json'
        );
        break;
      case '0120000040107': // case 4-1-7
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-7.json'
        );
        break;
      case '0120000040108': // case 4-1-8
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/4-1-8.json'
        );
        break;
      case '0120000050111': // case 5-1-11
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom048/error/detail-reference/5-1-11.json'
        );
        break;
      case '0120000050112': // case 5-1-12
        jsonServer.receiveSystemErrorData(
          res,
          'sh1apicom048/fatal/detail-reference/5-1-12.json'
        );
        break;
      case '0120000050113': // case 5-1-13
        res.sendStatus(404);
        break;
      case '0120000050114': // case 5-1-14
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/5-1-14.json'
        );
        break;
      case '0120000050115': // case 5-1-15
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/5-1-15.json'
        );
        break;
      case '0120000050116': // case 5-1-16
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/detail-reference/5-1-16.json'
        );
        break;
      // --- 取引一覧表示（参照用）モックデータ END --- //

      // --- 本人確認資料表示 モックデータ START --- //
      case '0310000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/2-1-1.json'
        );
        break;
      case '0310000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-2.json'
        );
        break;
      case '0310000040103': // case 4-1-3
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-3.json'
        );
        break;
      case '0310000040104': // case 4-1-4
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-4.json'
        );
        break;
      case '0310000040105': // case 4-1-5
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-5.json'
        );
        break;
      case '0310000040106': // case 4-1-6
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-6.json'
        );
        break;
      case '0310000040107': // case 4-1-7
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/4-1-7.json'
        );
        break;
      case '0310000050102': // case 5-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/5-1-2.json'
        );
        break;
      case '0310000050103': // case 5-1-3
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/5-1-3.json'
        );
        break;
      case '0310000050104': // case 5-1-4
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/information-detail/5-1-4.json'
        );
        break;
      // --- 本人確認資料表示 モックデータ END --- //
      // --- 明細ヘッダ モックデータ START --- //
      case '0320000020101': // case 2-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/header-info-box/2-1-1.json'
        );
        break;
      case '0320000040101': // case 4-1-1
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/header-info-box/4-1-1.json'
        );
        break;
      case '0320000040102': // case 4-1-2
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/header-info-box/4-1-2.json'
        );
        break;
      // --- 明細ヘッダ モックデータ END --- //
      case 'XXXXXX1234565':
        // 取引一覧表示から遷移 case 5-1-6
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/transactions-list/2-1-1-crypto.json'
        );
        // jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        break;
      case 'XXXXXX1234566':
        // 取引一覧表示から遷移 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/risk-evaluation-tab/4-1-3.json'
        );
        break;
      case 'XXXXXX1234567':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX1234568':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/account-open-operation/1-26.json'
        );
        break;
      case 'XXXXXX1234569':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/account-open-operation/1-26-2.json'
        );
        break;
      case 'XXXXXX1234570':
      case 'XXXXXX1234571':
      case 'XXXXXX1234572':
      case 'XXXXXX1234573':
      case 'XXXXXX12345670':
        // 取引一覧表示から遷移 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/transactions-list/2-1-1-crypto.json'
        );
        break;
      case '2000000000001':
        // エラー処理未済一覧表示から遷移 商品選択 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-5.json'
        );
        break;
      case '2000000000002':
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-6.json'
        );
        break;
      case '999999999':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/1-1-1.json'
        );
        break;
      case 'zuo12345614':
        // 商品選択 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-1.json'
        );
        break;
      case 'zuo12345615':
        // 商品選択 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-2.json'
        );
        break;
      case 'zuo12345616':
        // 商品選択 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-3.json'
        );
        break;
      case 'zuo12345617':
        // 商品選択 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-4.json'
        );
      case '7777777777777':
        // 商品選択
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/2-1-7.json'
        );
        break;
      case 'zuo66667777':
        // 商品選択
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/4-1-1.json'
        );
        break;
      case 'zuo55558888':
        // 商品選択
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/4-1-2.json'
        );
        break;
      case 'zuo22223333':
        // 商品選択
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/4-1-3.json'
        );
        break;
      case 'zuo22223334':
        // 商品選択
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/product-selection-tab/4-1-4.json'
        );
        break;
      case 'XXXXXX12345614':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-1.json'
        );
        break;
      case 'XXXXXX12345615':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX12345616':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX12345617':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX12345618':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX12345619':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-1.json'
        );
        break;
      case 'XXXXXX12345620':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-3.json'
        );
        break;
      case 'XXXXXX12345621':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-3.json'
        );
        break;
      case 'XXXXXX12345622':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-3.json'
        );
        break;
      case '0000123456789':
        // エラー明細表示 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/error-detail/1-1-2全チェックok.json'
        );
        // jsonServer.receiveNormalData(
        //   res,
        //   'sh1apicom048/normal/error-detail/2-1-1-crypto.json'
        // );
        break;
      case '1000000000001':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case '1000000000002':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case '1000000000003':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-3.json'
        );
        break;
      case '1000000000006':
        // エラー処理未済一覧表示から遷移 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/error-detail/1-1-3.json'
        );
        //jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        //jsonServer.receiveBusinessErrorData(res, 'sh1apicom048/error/detail-reference/5-1-8.json');
        break;
      case '1000000000007':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case '1000000000008':
        // 事前照会 case
        jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        break;
      case '1000000000009':
        // 事前照会 case
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom048/error/2-1-1.json'
        );
        break;
      case '1000000000014':
        // 事前照会 case
        jsonServer.receiveBusinessErrorData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        break;
      case 'XXXXXX1234561':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
      case 'XXXXXX1234562':
        // 事前照会 case
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-3.json'
        );
      default:
        jsonServer.receiveNormalData(
          res,
          'sh1apicom048/normal/pre-inquiry-tab/1-1-2.json'
        );
        //jsonServer.receiveSystemErrorData(res, 'sh1apicom048/fatal/3-1-1.json');
        break;
    }
  })
  .all('', (req, res) => {
    jsonServer.receiveErrorData(res, 405);
  });

module.exports = router;
