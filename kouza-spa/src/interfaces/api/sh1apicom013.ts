import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM013。
 * マスタ参照(店舗)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM013RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 店番
   * キー必須: Y | 値必須: Y
   */
  shopNo: string;
}

/**
 * API ID: SH1APICOM013。
 * マスタ参照(店舗)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM013ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 店名
     * キー必須: N | 値必須: N
     */
    shopName?: string;
  };
}
