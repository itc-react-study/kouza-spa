const CryptoJS = require('crypto-js');

const baseKeyA = 'MDEyMzQ1Njc4OTAxMjM0NQ==';
const baseKeyB = 'OTg3NjU0MzIxMDk4NzY1NA==';
const baseKeyC = 'QUIwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMUNERQ==';
const sessionKey = '1NIdtmq+Uh/9Ct5QmUvBOA==';

/**
 * 暗号化／復号に使用する鍵を生成するクラス。
 *
 * @author XXX
 */
module.exports = {
  /**
   * A鍵：アプリ内申込情報（暗証番号以外）を取得する。
   *
   * @returns A鍵
   */
  getKeyA: function () {
    // A鍵生成元情報 + サーバーセッションキー
    return createAppKey(baseKeyA, sessionKey);
  },

  /**
   * B鍵：アプリ内申込情報（暗証番号）を取得する。
   *
   * @returns B鍵
   */
  getKeyB: function () {
    // B鍵生成元情報 + サーバーセッションキー
    return createAppKey(baseKeyB, sessionKey);
  },

  /**
   * AB鍵：アプリ内申込情報（永続化データ）を取得する。
   *
   * @returns AB鍵
   */
  getKeyAB: function () {
    // A鍵生成元情報 + B鍵生成元情報
    return createAppKey(baseKeyA, baseKeyB);
  },

  /**
   * C+鍵：クラサバ間通信(账号申込データ)を取得する。
   *
   * @returns C+鍵
   */
  getKeyCp: function () {
    // パスフレーズ（暗号鍵）
    // Base64 Decode: C鍵生成元情報
    const passPhraseWordArray = CryptoJS.enc.Base64.parse(baseKeyC);

    // C+鍵生成
    return this.sliceWordArray(passPhraseWordArray, 2, 3);
  },

  /**
   * C++鍵：クラサバ間通信(账号申込データ)を取得する。
   *
   * @returns C++鍵
   */
  getKeyCpp: function () {
    // パスフレーズ（暗号鍵）
    // Base64 Decode: C鍵生成元情報
    const passPhraseWordArray = CryptoJS.enc.Base64.parse(baseKeyC);

    // C++鍵生成
    return this.sliceWordArray(passPhraseWordArray, 3, 2);
  },

  /**
   * アプリ内申込情報の暗号化鍵を生成する。
   *
   * @param baseKey1 A/B鍵生成元情報
   * @param baseKey2 サーバーセッションキー/B鍵生成元情報
   * @returns アプリ内申込情報の暗号化鍵(A/B/AB鍵)
   */
  createAppKey: function (baseKey1, baseKey2) {
    // パスフレーズ（暗号鍵）
    // Base64 Decode
    const passPhraseFirst = CryptoJS.enc.Base64.parse(baseKey1);

    // Base64 Decode
    const passPhraseLast = CryptoJS.enc.Base64.parse(baseKey2);

    // 鍵生成元情報を基づいて暗号化鍵を作成する
    const passPhrase = passPhraseFirst.concat(passPhraseLast);

    return passPhrase;
  },

  /**
   * CryptoJS.lib.WordArrayの指定箇所からデータを切り出す
   * CryptoJS.lib.WordArrayをNumber配列に変換し、パラメーターにて指定された値により
   * 以下のようにしてデータを切り出す
   *  Number[].slice(start, (Number[].length - end))
   * 切り出されたデータは再度CryptoJS.lib.WordArrayに変換され結果として応答される
   * @param target 取り出し対象となるCryptoJS.lib.WordArrayオブジェクト
   * @param start 取り出し範囲の先頭の位置
   * @param end Number[]の長さからこの値の差が切り出し範囲の末尾の直前の位置となる
   * @returns CryptoJS.lib.WordArrayオブジェクト
   */
  sliceWordArray: function (target, start, end) {
    // WordArray -> Number[] convert
    let byteArray = this.toByteArray(target);

    let slicedData = byteArray.slice(start, byteArray.length - end);

    // Number[] -> WordArray convert
    return this.toWordArray(slicedData);
  },

  /**
   * CryptoJS.lib.WordArrayをNumber配列データに変換
   * @param wordArray CryptoJS.lib.WordArrayオブジェクト
   * @returns Number配列データ
   */
  toByteArray: function (wordArray) {
    const words = wordArray.words;
    const sigBytes = wordArray.sigBytes;

    let byteArray = [];
    for (let i = 0; i < sigBytes; i++) {
      byteArray[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }

    return byteArray;
  },

  /**
   * Number配列データをCryptoJS.lib.WordArrayに変換
   * @param byteArray Number配列データ
   * @returns CryptoJS.lib.WordArrayオブジェクト
   */
  toWordArray: function (byteArray) {
    const len = byteArray.length;

    let words = [];
    for (let i = 0; i < len; i++) {
      words[i >>> 2] |= (byteArray[i] & 0xff) << (24 - (i % 4) * 8);
    }

    return CryptoJS.lib.WordArray.create(words, len);
  },
};
