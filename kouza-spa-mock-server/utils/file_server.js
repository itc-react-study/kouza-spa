const cryptoKeys = require('../crypto/crypto-key');
const cryptoService = require('../crypto/crypto.service');
const fs = require('fs');
const path = require('path');

/**
 * システムエラーへ変換処理
 * @param {HTTPResponse} res
 */
function createSystemError(res) {
  res.status(500).send({
    commonResponseHeader: {
      errorCode: '99999',
      errorMessage: '意外的なエラー発生',
    },
  });
}

/**
 * 指定JSONファイルからレスポンスデータを取る
 * @param path JSONファイル パス
 * @returns レスポンス データ
 */
function getJSON(path) {
  fullpath = './data/';
  const rawdata = fs.readFileSync(fullpath + path);
  if (rawdata) {
    return JSON.parse(rawdata);
  } else {
    return '';
  }
}

/**
 * HTTPステータス指定、エラーデータ受信
 * @param res レスポンス
 * @param status HTTPステータス
 */
function receiveErrorData(res, status) {
  res.status(status).end();
}

module.exports = {
  getJSON: getJSON,

  receiveDefaultSystemError: createSystemError,

  receiveErrorData: receiveErrorData,

  /**
   * 業務正常データ受信（暗号化しない）
   * @param res レスポンス
   * @param path JSONファイルパス
   */
  receiveUnencryptData: function (res, path) {
    let data = this.getJSON(path);
    try {
      res.status(200).send(data);
    } catch (err) {
      createSystemError(res);
    }
  },

  /**
   * 業務正常データ受信
   * @param res レスポンス
   * @param path JSONファイルパス
   */
  receiveNormalData: function (res, path) {
    let data = this.getJSON(path);
    try {
      res.status(200).send(cryptoService.encrypt(data, cryptoKeys.getKeyCp()));
    } catch (err) {
      createSystemError(res);
    }
  },

  /**
   * 業務エラーデータ受信
   * @param res レスポンス
   * @param path JSONファイルパス
   */
  receiveBusinessErrorData: function (res, path) {
    let data = this.getJSON(path);
    try {
      res.status(400).send(data);
    } catch (err) {
      createSystemError(res);
    }
  },

  /**
   * システムエラーデータ受信
   * @param res レスポンス
   * @param path JSONファイルパス
   */
  receiveSystemErrorData: function (res, path) {
    let data = this.getJSON(path);
    try {
      res.status(500).send({
        commonResponseHeader: {
          errorCode: '99999',
          errorMessage: data.commonResponseHeader.errorMessage,
        },
      });
    } catch (err) {
      createSystemError(res);
    }
  },

  /**
   * ダウンロードファイル
   * @param res レスポンス
   * @param file ファイルパス
   */
  downLoadFile: function (res, file) {
    fullpath = __dirname + '/../data/';
    var filePath = path.join(fullpath, file);
    var stats = fs.statSync(filePath);
    if (stats.isFile()) {
      res.set({
        'Content-type': 'application/octet-stream',
        'Content-Disposition':
          'attachment;filename=' + encodeURI(file.replace(/^.*[\\\/]/, '')),
      });
      fReadStream = fs.createReadStream(filePath);
      fReadStream.on('data', function (chunk) {
        res.write(chunk, 'binary');
      });
      fReadStream.on('end', function () {
        res.end();
      });
    } else {
      res.end(404);
    }
  },
};
