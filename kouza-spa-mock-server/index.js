const bodyParser = require('body-parser');
const cors = require('cors');
const cryptoService = require('./crypto/crypto.service');
const cryptoKeys = require('./crypto/crypto-key');
const express = require('express');
const fs = require('fs');
const session = require('express-session');

var createError = require('http-errors');
var getBody = require('raw-body');
var iconv = require('iconv-lite');
var onFinished = require('on-finished');
var zlib = require('zlib');

const app = express();

/**
 * Get the content stream of the request.
 *
 * @param {object} req
 * @param {function} debug
 * @param {boolean} [inflate=true]
 * @return {object}
 * @api private
 */

function contentstream(req) {
  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase();
  var length = req.headers['content-length'];
  var stream;

  switch (encoding) {
    case 'deflate':
      stream = zlib.createInflate();
      req.pipe(stream);
      break;
    case 'gzip':
      stream = zlib.createGunzip();
      req.pipe(stream);
      break;
    case 'identity':
      stream = req;
      stream.length = length;
      break;
    default:
      throw createError(
        415,
        'unsupported content encoding "' + encoding + '"',
        {
          encoding: encoding,
          type: 'encoding.unsupported',
        }
      );
  }

  return stream;
}

function cryptoRequestBodyMiddleware(req, res, next) {
  // Define variables
  let stream;
  const encoding = 'UTF-8';

  // flag as parsed
  req._body = true;

  try {
    // get the content stream
    stream = contentstream(req);
    stream.length = undefined;
  } catch (err) {
    return next(err);
  }

  // read body
  getBody(stream, null, function (error, body) {
    if (error) {
      var _error;

      if (error.type === 'encoding.unsupported') {
        // echo back charset
        _error = createError(
          415,
          'unsupported charset "' + encoding.toUpperCase() + '"',
          {
            charset: encoding.toLowerCase(),
            type: 'charset.unsupported',
          }
        );
      } else {
        // set status code on error
        _error = createError(400, error);
      }

      // read off entire request
      stream.resume();
      onFinished(req, function onfinished() {
        next(createError(400, _error));
      });
      return;
    }

    // parse body
    var str = body;

    try {
      str =
        typeof body !== 'string' && encoding !== null
          ? iconv.decode(body, encoding)
          : body;
      // req.body = parse(str)

      if (str && typeof str === 'string') {
        try {
          // Normal request body (json)
          const requestBody = JSON.parse(str);
          req.body = requestBody;
        } catch (error) {
          // Encrypt body
          const encryptBody = cryptoService.decrypt(
            str,
            cryptoKeys.getKeyCp(),
            'object'
          );
          req.body = encryptBody;
        }
      }
    } catch (err) {
      next(
        createError(400, err, {
          body: str,
          type: err.type || 'entity.parse.failed',
        })
      );
      return;
    }

    next();
  });
}

app.use(cryptoRequestBodyMiddleware);
// app.use(bodyParser.json());

app.use(
  cors({
    // origin:"*" ,
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

// ポート
const port = 8001;
const { Router } = require('express');

//-------------------------
//ルーター定義
//-------------------------
// インデックス
const indexRouter = require('./routes/index');
// サンプル
const sampleRouter = require('./routes/sample');

// SH1APICOM001: 初期化API
const sh1apicom001Router = require('./routes/sh1apicom001');

// SH1APICOM011: マスタ参照(通貨)API
const sh1apicom011Router = require('./routes/sh1apicom011');

// SH1APICOM012: マスタ参照(国)API
const sh1apicom012Router = require('./routes/sh1apicom012');

// SH1APICOM013: マスタ参照(店舗)API
const sh1apicom013Router = require('./routes/sh1apicom013');

// SH1APICOM014: 住所検索(郵便番号)API
const sh1apicom014Router = require('./routes/sh1apicom014');

// SH1APICOM018: 店舗情報取得API
const sh1apicom018Router = require('./routes/sh1apicom018');

// SH1APIOPE029: 账号開設事前照会API
const sh1apiope029Router = require('./routes/sh1apiope029');

// SH1APIOPE030: i-CIF照会API
const sh1apiope030Router = require('./routes/sh1apiope030');

// SH1APIOPE031: 円貨普通預金入出金明細照会API
const sh1apiope031Router = require('./routes/sh1apiope031');

// SH1APIOPE032: KYCリスク評価算定API
const sh1apiope032Router = require('./routes/sh1apiope032');

// SH1APIOPE033: 受入判定登録API
const sh1apiope033Router = require('./routes/sh1apiope033');

// SH1APIOPE034: KYCリスク評価関連情報照会API
const sh1apiope034Router = require('./routes/sh1apiope034');

// SH1APIOPE035: 账号開設API
const sh1apiope035Router = require('./routes/sh1apiope035');

// SH1APIOPE036: 問診開始通知API
const sh1apiope036Router = require('./routes/sh1apiope036');

// SH1APIOPE038: 業務データロック(账号)API
const sh1apiope038Router = require('./routes/sh1apiope038');

// SH1APIOPE039: 業務データアンロック(账号)API
const sh1apiope039Router = require('./routes/sh1apiope039');

// SH1APIOPE040: 業務データ更新(账号)API
const sh1apiope040Router = require('./routes/sh1apiope040');

// SH1APIOPE041: 账号開設メール送信API
const sh1apiope041Router = require('./routes/sh1apiope041');

// SH1APIOPE042: オペレータステータス更新API
const sh1apiope042Router = require('./routes/sh1apiope042');

// SH1APIOPE043: アクセス履歴登録API
const sh1apiope043Router = require('./routes/sh1apiope043');

// SH1APIOPE044: オペレータ状況一覧照会API
const sh1apiope044Router = require('./routes/sh1apiope044');

// SH1APIOPE045: 業務データ一覧照会(账号)API
const sh1apiope045Router = require('./routes/sh1apiope045');

// SH1APIOPE046: 取引一覧掲示板照会API
const sh1apiope046Router = require('./routes/sh1apiope046');

// SH1APIOPE047: 取引一覧掲示板更新API
const sh1apiope047Router = require('./routes/sh1apiope047');

// SH1APICOM048: 業務データ明細照会(账号)API
const sh1apicom048Router = require('./routes/sh1apicom048');

// SH1APIOPE049: スキャンイメージ照会API
const sh1apiope049Router = require('./routes/sh1apiope049');

// SH1APIOPE050: 账号開設エラー明細一覧API
const sh1apiope050Router = require('./routes/sh1apiope050');

// SH1APIOPE051: カード取引一覧API
const sh1apiope051Router = require('./routes/sh1apiope051');

// SH1APIOPE052: MUN宛帳票生成API
const sh1apiope052Router = require('./routes/sh1apiope052');

// SH1APIOPE053: 機微情報一覧API
const sh1apiope053Router = require('./routes/sh1apiope053');

// SH1APIOPE055: 機微情報マスキング画像登録API
const sh1apiope055Router = require('./routes/sh1apiope055');

// SH1APIOPE056: 業務統計データ一覧照会API
const sh1apiope056Router = require('./routes/sh1apiope056');

// SH1APIOPE057: 業務統計データ一括ダウンロードAPI
const sh1apiope057Router = require('./routes/sh1apiope057');

// SH1APIOPE058: アクセス履歴一覧照会API
const sh1apiope058Router = require('./routes/sh1apiope058');

// SH1APIOPE059: アクセス履歴一括ダウンロードAPI
const sh1apiope059Router = require('./routes/sh1apiope059');

// SH1APIOPE060: オペレータ情報一覧照会API
const sh1apiope060Router = require('./routes/sh1apiope060');

// SH1APIOPE061: オペレータ情報明細照会API
const sh1apiope061Router = require('./routes/sh1apiope061');

// SH1APIOPE062: オペレータ情報追加・更新API
const sh1apiope062Router = require('./routes/sh1apiope062');

// SH1APIOPE063: 待ち状況表示API
const sh1apiope063Router = require('./routes/sh1apiope063');

// SH1APIOPE064: 待ち状況一覧掲示板照会API
const sh1apiope064Router = require('./routes/sh1apiope064');

// SH1APIOPE065: 待ち状況一覧掲示板更新API
const sh1apiope065Router = require('./routes/sh1apiope065');

// SH1APIOPE066: タブレット情報一覧照会API
const sh1apiope066Router = require('./routes/sh1apiope066');

// SH1APICOM067: タブレット情報明細照会API
const sh1apicom067Router = require('./routes/sh1apicom067');

// SH1APIOPE068: タブレット情報追加・更新API
const sh1apiope068Router = require('./routes/sh1apiope068');

// SH1APIOPE115: ログインユーザー情報取得API
const sh1apiope115Router = require('./routes/sh1apiope115');

app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  })
);

//-------------------------
//エンドポイント定義
//-------------------------
/**
 * インデックス: /
 *
 */
app.use('/login', indexRouter);

/**
 * サンプル: /api/v1/me/sample
 *
 */
app.use('/api/v1/me/sample', sampleRouter);

/**
 * API ID: SH1APICOM001
 * API名: 初期化API
 * エンドポイント: /initialize
 */
app.use('/initialize', sh1apicom001Router);

/**
 * API ID: SH1APICOM011
 * API名: マスタ参照(通貨)API
 * エンドポイント: /currencymaster/inquiry
 */
app.use('/currencymaster/inquiry', sh1apicom011Router);

/**
 * API ID: SH1APICOM012
 * API名: マスタ参照(国)API
 * エンドポイント: /countrymaster/inquiry
 */
app.use('/countrymaster/inquiry', sh1apicom012Router);

/**
 * API ID: SH1APICOM013
 * API名: マスタ参照(店舗)API
 * エンドポイント: /branchmaster/inquiry
 */
app.use('/branchmaster/inquiry', sh1apicom013Router);

/**
 * API ID: SH1APICOM014
 * API名: 住所検索(郵便番号)API
 * エンドポイント: /zipcodetoaddress/inquiry
 */
app.use('/zipcodetoaddress/inquiry', sh1apicom014Router);

/**
 * API ID: SH1APICOM018
 * API名: 店舗情報取得API
 * エンドポイント: /zipcodetoaddress/inquiry
 */
app.use('/branchinfo/inquiry', sh1apicom018Router);

/**
 * API ID: SH1APIOPE029
 * API名: 账号開設事前照会API
 * エンドポイント: /accountregistration/beforecheck
 */
app.use('/accountregistration/beforecheck', sh1apiope029Router);

/**
 * API ID: SH1APIOPE030
 * API名: i-CIF照会API
 * エンドポイント: /icif/inquiry
 */
app.use('/icif/inquiry', sh1apiope030Router);

/**
 * API ID: SH1APIOPE031
 * API名: 円貨普通預金入出金明細照会API
 * エンドポイント: /depositandwithdrawalyen/inquiry
 */
app.use('/depositandwithdrawalyen/inquiry', sh1apiope031Router);

/**
 * API ID: SH1APIOPE032
 * API名: KYCリスク評価算定API
 * エンドポイント: /kycrisk/inquiry
 */
app.use('/kycrisk/inquiry', sh1apiope032Router);

/**
 * API ID: SH1APIOPE033
 * API名: 受入判定登録API
 * エンドポイント: /acceptdecision/register
 */
app.use('/acceptdecision/register', sh1apiope033Router);

/**
 * API ID: SH1APIOPE034
 * API名: KYCリスク評価関連情報照会API
 * エンドポイント: /kycriskrelatedinfo/inquiry
 */
app.use('/kycriskrelatedinfo/inquiry', sh1apiope034Router);

/**
 * API ID: SH1APIOPE035
 * API名: 账号開設API
 * エンドポイント: /account/open
 */
app.use('/account/open', sh1apiope035Router);

/**
 * API ID: SH1APIOPE036
 * API名: 問診開始通知API
 * エンドポイント: /interviewstarting/notice
 */
app.use('/interviewstarting/notice', sh1apiope036Router);

/**
 * API ID: SH1APIOPE038
 * API名: 業務データロック(账号)API
 * エンドポイント: /accountbizinfo/lock
 */
app.use('/accountbizinfo/lock', sh1apiope038Router);

/**
 * API ID: SH1APIOPE039
 * API名: 業務データアンロック(账号)API
 * エンドポイント: /accountbizinfo/unlock
 */
app.use('/accountbizinfo/unlock', sh1apiope039Router);

/**
 * API ID: SH1APIOPE040
 * API名: 業務データ更新(账号)API
 * エンドポイント: /accountbizinfo/update
 */
app.use('/accountbizinfo/update', sh1apiope040Router);

/**
 * API ID: SH1APIOPE041
 * API名: 账号開設メール送信API
 * エンドポイント: /accountomenmail/send
 */
app.use('/accountomenmail/send', sh1apiope041Router);

/**
 * API ID: SH1APIOPE042
 * API名: オペレータステータス更新API
 * エンドポイント: /operatorstatus/update
 */
app.use('/operatorstatus/update', sh1apiope042Router);

/**
 * API ID: SH1APIOPE043
 * API名: アクセス履歴登録API
 * エンドポイント: /accesshistory/register
 */
app.use('/accesshistory/register', sh1apiope043Router);

/**
 * API ID: SH1APIOPE044
 * API名: オペレータ状況一覧照会API
 * エンドポイント: /operatorstatuslist/inquiry
 */
app.use('/operatorstatuslist/inquiry', sh1apiope044Router);

/**
 * API ID: SH1APIOPE045
 * API名: 業務データ一覧照会(账号)API
 * エンドポイント: /accountbizainfolist/inquiry
 */
app.use('/accountbizainfolist/inquiry', sh1apiope045Router);

/**
 * API ID: SH1APIOPE046
 * API名: 取引一覧掲示板照会API
 * エンドポイント: /transactionlist/inquiry
 */
app.use('/transactionlist/inquiry', sh1apiope046Router);

/**
 * API ID: SH1APIOPE047
 * API名: 取引一覧掲示板更新API
 * エンドポイント: /transactionlist/update
 */
app.use('/transactionlist/update', sh1apiope047Router);

/**
 * API ID: SH1APICOM048
 * API名: 業務データ明細照会(账号)API
 * エンドポイント: /accountbizainfodetail/inquiry
 */
app.use('/accountbizainfodetail/inquiry', sh1apicom048Router);

/**
 * API ID: SH1APIOPE049
 * API名: スキャンイメージ照会API
 * エンドポイント: /scanimg/inquiry
 */
app.use('/scanimg/inquiry', sh1apiope049Router);

/**
 * API ID: SH1APIOPE050
 * API名: 账号開設エラー明細一覧API
 * エンドポイント: /openaccounterrlist/inquiry
 */
app.use('/openaccounterrlist/inquiry', sh1apiope050Router);

/**
 * API ID: SH1APIOPE051
 * API名: カード取引一覧API
 * エンドポイント: /cardtransactionlist/inquiry
 */
app.use('/cardtransactionlist/inquiry', sh1apiope051Router);

/**
 * API ID: SH1APIOPE052
 * API名: MUN宛帳票生成API
 * エンドポイント: /munform/generate
 */
app.use('/munform/generate', sh1apiope052Router);

/**
 * API ID: SH1APIOPE053
 * API名: 機微情報一覧API
 * エンドポイント: /sensitiveinfolist/inquiry
 */
app.use('/sensitiveinfolist/inquiry', sh1apiope053Router);

/**
 * API ID: SH1APIOPE055
 * API名: 機微情報マスキング画像登録API
 * エンドポイント: /sensitiveinfomaskingimg/register
 */
app.use('/sensitiveinfomaskingimg/register', sh1apiope055Router);

/**
 * API ID: SH1APIOPE056
 * API名: 業務統計データ一覧照会API
 * エンドポイント: /bizstatslist/inquiry
 */
app.use('/bizstatslist/inquiry', sh1apiope056Router);

/**
 * API ID: SH1APIOPE057
 * API名: 業務統計データ一括ダウンロードAPI
 * エンドポイント: /bizstatslist/download
 */
app.use('/bizstatslist/download', sh1apiope057Router);

/**
 * API ID: SH1APIOPE058
 * API名: アクセス履歴一覧照会API
 * エンドポイント: /accesshistorylist/inquiry
 */
app.use('/accesshistorylist/inquiry', sh1apiope058Router);

/**
 * API ID: SH1APIOPE059
 * API名: アクセス履歴一括ダウンロードAPI
 * エンドポイント: /accesshistorylist/download
 */
app.use('/accesshistorylist/download', sh1apiope059Router);

/**
 * API ID: SH1APIOPE060
 * API名: オペレータ情報一覧照会API
 * エンドポイント: /operatorlist/inquiry
 */
app.use('/operatorlist/inquiry', sh1apiope060Router);

/**
 * API ID: SH1APIOPE061
 * API名: オペレータ情報明細照会API
 * エンドポイント: /operatorinfo/inquiry
 */
app.use('/operatorinfo/inquiry', sh1apiope061Router);

/**
 * API ID: SH1APIOPE062
 * API名: オペレータ情報追加・更新API
 * エンドポイント: /operatorinfo/update
 */
app.use('/operatorinfo/update', sh1apiope062Router);

/**
 * API ID: SH1APIOPE063
 * API名: 待ち状況表示API
 * エンドポイント: /waitingstatus/inquiry
 */
app.use('/waitingstatus/inquiry', sh1apiope063Router);

/**
 * API ID: SH1APIOPE064
 * API名: 待ち状況一覧掲示板照会API
 * エンドポイント: /waitinglist/inquiry
 */
app.use('/waitinglist/inquiry', sh1apiope064Router);

/**
 * API ID: SH1APIOPE065
 * API名: 待ち状況一覧掲示板更新API
 * エンドポイント: /waitinglist/update
 */
app.use('/waitinglist/update', sh1apiope065Router);

/**
 * API ID: SH1APIOPE066
 * API名: タブレット情報一覧照会API
 * エンドポイント: /tabletlist/inquiry
 */
app.use('/tabletlist/inquiry', sh1apiope066Router);

/**
 * API ID: SH1APICOM067
 * API名: タブレット情報明細照会API
 * エンドポイント: /tabletinfo/inquiry
 */
app.use('/tabletinfo/inquiry', sh1apicom067Router);

/**
 * API ID: SH1APIOPE068
 * API名: タブレット情報追加・更新API
 * エンドポイント: /tabletinfo/update
 */
app.use('/tabletinfo/update', sh1apiope068Router);

/**
 * API ID: SH1APIOPE115
 * API名: ログインユーザー情報取得API
 * エンドポイント: /authuser
 */
app.use('/authuser', sh1apiope115Router);

var http = require('http');
http.createServer(app).listen(port, function () {
  console.info('server listening on ' + port);
});
