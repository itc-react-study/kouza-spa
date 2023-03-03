const CryptoJS = require('crypto-js');
const CryptoKeys = require('./crypto-key');

/**
 * 初期化ベクトル(IV)。
 * 下記のデータをBase64エンコードした内容：
 * 0x0000 0000 0000 0000 0000 0000 0000 0000
 */
ivBase64 = 'AAAAAAAAAAAAAAAAAAAAAA==';

/**
 * 256AESでデータを暗号化する。
 *
 * @param str 暗号化したいデータ
 * @param key 鍵
 * @returns AES256 string 変換したデータ
 */
function encryptAES256(str, key) {
  // 初期ベクトル(Base64デコードする)
  const ivData = CryptoJS.enc.Base64.parse(this.ivBase64);

  // 暗号化オプション (IV:初期化ベクトル, CBCモード, パディングモード：PKCS7)
  const options = {
    iv: ivData,
    mode: CryptoJS.mode.CBC,
    keySize: 256 / 32,
    padding: CryptoJS.pad.Pkcs7,
  };

  // 暗号化したい元のデータ
  const utf8Plain = CryptoJS.enc.Utf8.parse(str);

  // 暗号化
  const encrypted = CryptoJS.AES.encrypt(utf8Plain, key, options);

  return encrypted.toString();
}

/**
 * 256AESでデータを復号化する。
 *
 * @param str  復号化したいデータ
 * @param key 鍵
 * @returns string 変換したデータ
 */
function decryptAES256(enctyptStr, key) {
  // 初期ベクトル(Base64デコードする)
  const ivData = CryptoJS.enc.Base64.parse(this.ivBase64);

  // 暗号化オプション (IV:初期化ベクトル, CBCモード, パディングモード：PKCS7)
  const options = {
    iv: ivData,
    mode: CryptoJS.mode.CBC,
    keySize: 256 / 32,
    padding: CryptoJS.pad.Pkcs7,
  };

  // 復号化
  const decrypted = CryptoJS.AES.decrypt(enctyptStr, key, options);

  return decrypted.toString(CryptoJS.enc.Utf8);
}

module.exports = {
  /**
   * 申込情報を暗号化する。
   *
   * @param value 申込情報の明文
   * @param type 暗号化種別
   */
  encrypt: function (value, encryptKey) {
    if (value === null || typeof value === 'undefined') {
      return value;
    }

    let encrypted;
    try {
      if (encryptKey) {
        let stringValue = '';
        if (typeof value === 'object') {
          stringValue = JSON.stringify(value);
        } else {
          stringValue = value.toString();
        }
        encrypted = encryptAES256(stringValue, encryptKey);
      } else {
        // 鍵取れない場合は暗号化しない
        encrypted = value;
      }
    } catch (error) {
      console.error('encrypt error: ', error);
    }
    return encrypted;
  },

  /**
   * 申込情報を複号化する。
   * @param data 暗号化したデータ
   * @returns 申込情報の明文
   */
  decrypt: function (data, encryptKey, returnType) {
    // デフォルトはstringを返す
    const dataType = returnType || 'string';

    let decrypted;
    if (data) {
      try {
        if (encryptKey) {
          // 複号化
          const itemValue = decryptAES256(data, encryptKey);

          if (dataType === 'string') {
            decrypted = itemValue;
          } else if (dataType === 'boolean') {
            decrypted = JSON.parse(itemValue);
          } else if (dataType === 'number') {
            decrypted = Number(itemValue);
          } else {
            if (itemValue !== '') {
              decrypted = JSON.parse(itemValue);
            }
          }
        } else {
          decrypted = data;
        }
      } catch (error) {
        console.error('decrypt error: ', error);
      }
    }
    return decrypted;
  },
};
