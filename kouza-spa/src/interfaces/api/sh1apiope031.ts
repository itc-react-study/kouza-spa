import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE031。
 * 円貨普通預金入出金明細照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE031RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 店番
   * キー必須: Y | 値必須: Y
   */
  shopNo: string;

  /**
   * 項目名: 账号番号
   * キー必須: Y | 値必須: Y
   */
  kouzaNo: string;
}

/**
 * API ID: SH1APIOPE031。
 * 円貨普通預金入出金明細照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE031ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 元帳残高
     * キー必須: N | 値必須: N
     */
    motochouZandaka?: string;

    /**
     * 項目名: エラーメッセージ
     * キー必須: N | 値必須: N
     */
    nyuushukkinMeisaiShoukaiErrorKubun?: string;

    /**
     * 項目名: 異動明細リスト
     * キー必須: N | 値必須: N
     */
    kyousaiList?: {
      /**
       * 項目名: ID
       * キー必須: N | 値必須: N
       */
      id?: string;

      /**
       * 項目名: 処理日
       * キー必須: N | 値必須: N
       */
      idouMeisaiTorihikiBi?: string;

      /**
       * 項目名: 摘要
       * キー必須: N | 値必須: N
       */
      iriharaitekiyouMongon?: string;

      /**
       * 項目名: 支払金額
       * キー必須: N | 値必須: N
       */
      siharaiKingaku?: string;

      /**
       * 項目名: 入金金額
       * キー必須: N | 値必須: N
       */
      nyukinKingaku?: string;

      /**
       * 項目名: 処理店等
       * キー必須: N | 値必須: N
       */
      syoriStr?: string;

      /**
       * 項目名: 取引金額
       * キー必須: N | 値必須: N
       */
      torihikiKingaku?: string;

      /**
       * 項目名: 入払区分
       * キー必須: N | 値必須: N
       */
      iriharaiKubun?: string;

      /**
       * 項目名: 入払摘要
       * キー必須: N | 値必須: N
       */
      kanjiIriharaitekiyouMongon?: string;

      /**
       * 項目名: カナ摘要
       * キー必須: N | 値必須: N
       */
      kanaIriharaitekiyouMongon?: string;

      /**
       * 項目名: 付込店
       * キー必須: N | 値必須: N
       */
      meisaiKichouTenban?: string;

      /**
       * 項目名: 振込依頼人
       * キー必須: N | 値必須: N
       */
      kanaFurikomiIraininShimei?: string;

      /**
       * 項目名: 仕向名
       * キー必須: N | 値必須: N
       */
      kanaShimukesakiGinkouMei?: string;

      /**
       * 項目名: 仕向支店名
       * キー必須: N | 値必須: N
       */
      kanaShimukesakiKouzatenMei?: string;

      /**
       * 項目名: 処理店
       * キー必須: N | 値必須: N
       */
      shoriTenban?: string;
    }[];
  };
}
