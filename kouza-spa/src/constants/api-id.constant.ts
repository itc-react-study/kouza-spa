/**
 * API一覧に関連する構造定義インタフェース
 *
 * @author Charlie
 */
export interface ServerApi {
  /** エンドポイント */
  endpoint: string;

  /** メソッド(POST/GET/PUT/DELETEなど) */
  method: string;

  /** エンコード(省略した場合は、デフォルトUTF-8になる) */
  encode?: string;
}

/**
 * API一覧構造定義。
 *
 * @author Charlie
 */
export interface ServerApiConfig {
  [key: string]: ServerApi;
}

/**
 * API ID定数定義。
 *
 * @author Charlie
 */
export const ApiIds = {
  SH1APIDUMLGN: 'SH1APIDUMLGN',
  /** 初期化API */
  SH1APICOM001: 'SH1APICOM001',
  /** マスタ参照(通貨)API */
  SH1APICOM011: 'SH1APICOM011',
  /** マスタ参照(国)API  */
  SH1APICOM012: 'SH1APICOM012',
  /** マスタ参照(店舗)API */
  SH1APICOM013: 'SH1APICOM013',
  /** 住所検索(郵便番号)API */
  SH1APICOM014: 'SH1APICOM014',
  /** 账号開設事前照会API */
  SH1APIOPE029: 'SH1APIOPE029',
  /** i-CIF照会API */
  SH1APIOPE030: 'SH1APIOPE030',
  /** 円貨普通預金入出金明細照会API */
  SH1APIOPE031: 'SH1APIOPE031',
  /** KYCリスク評価算定API */
  SH1APIOPE032: 'SH1APIOPE032',
  /** 受入判定登録API */
  SH1APIOPE033: 'SH1APIOPE033',
  /** KYCリスク評価関連情報照会API */
  SH1APIOPE034: 'SH1APIOPE034',
  /** 账号開設API */
  SH1APIOPE035: 'SH1APIOPE035',
  /** 問診開始通知API */
  SH1APIOPE036: 'SH1APIOPE036',
  /** 業務データロック(账号)API */
  SH1APIOPE038: 'SH1APIOPE038',
  /** 業務データアンロック(账号)API */
  SH1APIOPE039: 'SH1APIOPE039',
  /** 業務データ更新(账号)API */
  SH1APIOPE040: 'SH1APIOPE040',
  /** 账号開設メール送信API */
  SH1APIOPE041: 'SH1APIOPE041',
  /** オペレータステータス更新API */
  SH1APIOPE042: 'SH1APIOPE042',
  /** アクセス履歴登録API */
  SH1APIOPE043: 'SH1APIOPE043',
  /** オペレータ状況一覧照会API */
  SH1APIOPE044: 'SH1APIOPE044',
  /** 業務データ一覧照会(账号)API */
  SH1APIOPE045: 'SH1APIOPE045',
  /** 取引一覧掲示板照会API */
  SH1APIOPE046: 'SH1APIOPE046',
  /** 取引一覧掲示板更新API */
  SH1APIOPE047: 'SH1APIOPE047',
  /** 業務データ明細照会(账号)API */
  SH1APICOM048: 'SH1APICOM048',
  /** スキャンイメージ照会API */
  SH1APIOPE049: 'SH1APIOPE049',
  /** 账号開設エラー明細一覧API */
  SH1APIOPE050: 'SH1APIOPE050',
  /** カード取引一覧API */
  SH1APIOPE051: 'SH1APIOPE051',
  /** MUN宛帳票生成API */
  SH1APIOPE052: 'SH1APIOPE052',
  /** 機微情報一覧API */
  SH1APIOPE053: 'SH1APIOPE053',
  /** 機微情報マスキング画像登録API */
  SH1APIOPE055: 'SH1APIOPE055',
  /** 業務統計データ一覧照会API */
  SH1APIOPE056: 'SH1APIOPE056',
  /** 業務統計データ一括ダウンロードAPI */
  SH1APIOPE057: 'SH1APIOPE057',
  /** アクセス履歴一覧照会API */
  SH1APIOPE058: 'SH1APIOPE058',
  /** アクセス履歴一括ダウンロードAPI */
  SH1APIOPE059: 'SH1APIOPE059',
  /** オペレータ情報一覧照会API */
  SH1APIOPE060: 'SH1APIOPE060',
  /** オペレータ情報明細照会API */
  SH1APIOPE061: 'SH1APIOPE061',
  /** オペレータ情報追加・更新API */
  SH1APIOPE062: 'SH1APIOPE062',
  /** 待ち状況表示API */
  SH1APIOPE063: 'SH1APIOPE063',
  /** 待ち状況一覧掲示板照会API */
  SH1APIOPE064: 'SH1APIOPE064',
  /** 待ち状況一覧掲示板更新API */
  SH1APIOPE065: 'SH1APIOPE065',
  /** タブレット情報一覧照会API */
  SH1APIOPE066: 'SH1APIOPE066',
  /** タブレット情報明細照会API */
  SH1APICOM067: 'SH1APICOM067',
  /** タブレット情報追加・更新API */
  SH1APIOPE068: 'SH1APIOPE068',
  /** 店舗情報取得API */
  SH1APICOM018: 'SH1APICOM018',
  /** ログインユーザー情報取得API */
  SH1APIOPE115: 'SH1APIOPE115',
};

/**
 * API一覧定義。
 *
 * @author Charlie
 */
export const API_DI_CONFIG: ServerApiConfig = {
  /** ダミーログイン */
  SH1APIDUMLGN: {
    endpoint: '/login',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 初期化API */
  SH1APICOM001: {
    endpoint: '/initialize',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** マスタ参照(通貨)API */
  SH1APICOM011: {
    endpoint: '/currencymaster/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** マスタ参照(国)API  */
  SH1APICOM012: {
    endpoint: '/countrymaster/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** マスタ参照(店舗)API */
  SH1APICOM013: {
    endpoint: '/branchmaster/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 住所検索(郵便番号)API */
  SH1APICOM014: {
    endpoint: '/zipcodetoaddress/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 店舗情報取得API */
  SH1APICOM018: {
    endpoint: '/branchinfo/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 账号開設事前照会API */
  SH1APIOPE029: {
    endpoint: '/accountregistration/beforecheck',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** i-CIF照会API */
  SH1APIOPE030: {
    endpoint: '/icif/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 円貨普通預金入出金明細照会API */
  SH1APIOPE031: {
    endpoint: '/depositandwithdrawalyen/inquiry',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** KYCリスク評価算定API */
  SH1APIOPE032: {
    endpoint: '/kycrisk/inquiry',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 受入判定登録API */
  SH1APIOPE033: {
    endpoint: '/acceptdecision/register',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** KYCリスク評価関連情報照会API */
  SH1APIOPE034: {
    endpoint: '/kycriskrelatedinfo/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 账号開設API */
  SH1APIOPE035: {
    endpoint: '/account/open',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 問診開始通知API */
  SH1APIOPE036: {
    endpoint: '/interviewstarting/notice',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 業務データロック(账号)API */
  SH1APIOPE038: {
    endpoint: '/accountbizinfo/lock',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 業務データアンロック(账号)API */
  SH1APIOPE039: {
    endpoint: '/accountbizinfo/unlock',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 業務データ更新(账号)API */
  SH1APIOPE040: {
    endpoint: '/accountbizinfo/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 账号開設メール送信API */
  SH1APIOPE041: {
    endpoint: '/accountopenmail/send',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** オペレータステータス更新API */
  SH1APIOPE042: {
    endpoint: '/operatorstatus/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** アクセス履歴登録API */
  SH1APIOPE043: {
    endpoint: '/accesshistory/register',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** オペレータ状況一覧照会API */
  SH1APIOPE044: {
    endpoint: '/operatorstatuslist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 業務データ一覧照会(账号)API */
  SH1APIOPE045: {
    endpoint: '/accountbizainfolist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 取引一覧掲示板照会API */
  SH1APIOPE046: {
    endpoint: '/transactionlist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 取引一覧掲示板更新API */
  SH1APIOPE047: {
    endpoint: '/transactionlist/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 業務データ明細照会(账号)API */
  SH1APICOM048: {
    endpoint: '/accountbizainfodetail/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** スキャンイメージ照会API */
  SH1APIOPE049: {
    endpoint: '/scanimg/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 账号開設エラー明細一覧API */
  SH1APIOPE050: {
    endpoint: '/openaccounterrlist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** カード取引一覧API */
  SH1APIOPE051: {
    endpoint: '/cardtransactionlist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** MUN宛帳票生成API */
  SH1APIOPE052: {
    endpoint: '/munform/generate',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 機微情報一覧API */
  SH1APIOPE053: {
    endpoint: '/sensitiveinfolist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 機微情報マスキング画像登録API */
  SH1APIOPE055: {
    endpoint: '/sensitiveinfomaskingimg/register',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 業務統計データ一覧照会API */
  SH1APIOPE056: {
    endpoint: '/bizstatslist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 業務統計データ一括ダウンロードAPI */
  SH1APIOPE057: {
    endpoint: '/bizstatslist/download',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** アクセス履歴一覧照会API */
  SH1APIOPE058: {
    endpoint: '/accesshistorylist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** アクセス履歴一括ダウンロードAPI */
  SH1APIOPE059: {
    endpoint: '/accesshistorylist/download',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** オペレータ情報一覧照会API */
  SH1APIOPE060: {
    endpoint: '/operatorlist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** オペレータ情報明細照会API */
  SH1APIOPE061: {
    endpoint: '/operatorinfo/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** オペレータ情報追加・更新API */
  SH1APIOPE062: {
    endpoint: '/operatorinfo/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** 待ち状況表示API */
  SH1APIOPE063: {
    endpoint: '/waitingstatus/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 待ち状況一覧掲示板照会API */
  SH1APIOPE064: {
    endpoint: '/waitinglist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** 待ち状況一覧掲示板更新API */
  SH1APIOPE065: {
    endpoint: '/waitinglist/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** タブレット情報一覧照会API */
  SH1APIOPE066: {
    endpoint: '/tabletlist/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** タブレット情報明細照会API */
  SH1APICOM067: {
    endpoint: '/tabletinfo/inquiry',
    method: 'POST',
    encode: 'UTF-8',
  },
  /** タブレット情報追加・更新API */
  SH1APIOPE068: {
    endpoint: '/tabletinfo/update',
    method: 'PUT',
    encode: 'UTF-8',
  },
  /** ログインユーザー情報取得API */
  SH1APIOPE115: {
    endpoint: '/authuser',
    method: 'POST',
    encode: 'UTF-8',
  },
};
