import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM018。
 * 店舗情報取得APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM018RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 店舗情報検索リスト
   * キー必須: Y | 値必須: Y
   */
  storeInfoSearchList: {
    /**
     * 項目名: 店舗番号
     * キー必須: N | 値必須: N
     */
    shopNo?: string;

    /**
     * 項目名: 店舗名
     * キー必須: N | 値必須: N
     */
    ShopName?: string;
  }[];
}

/**
 * API ID: SH1APICOM018。
 * 店舗情報取得APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM018ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: ヒット件数
     * キー必須: Y | 値必須: Y
     */
    hit: number;

    /**
     * 項目名: 店舗情報リスト
     * キー必須: N | 値必須: N
     */
    storeInfoList?: {
      /**
       * 項目名: 店舗ID
       * キー必須: N | 値必須: N
       */
      shopId?: string;

      /**
       * 項目名: 店舗名
       * キー必須: N | 値必須: N
       */
      shopName?: string;

      /**
       * 項目名: 店舗住所
       * キー必須: N | 値必須: N
       */
      shopAddress?: string;

      /**
       * 項目名: 店舗緯度
       * キー必須: N | 値必須: N
       */
      shopLatitude?: string;

      /**
       * 項目名: 店舗経度
       * キー必須: N | 値必須: N
       */
      shopLongitude?: string;

      /**
       * 項目名: 店舗番号
       * キー必須: N | 値必須: N
       */
      shopNo?: string;
    }[];
  };
}
