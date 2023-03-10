import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM011。
 * マスタ参照(通貨)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */

export type SH1APICOM011RequestBody = ApiRequestBodyBase;

/**
 * API ID: SH1APICOM011。
 * マスタ参照(通貨)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM011ResponseBody extends ApiResponseBodyBase {
  /**
   * 項目名: 通貨のリスト
   * キー必須: Y | 値必須: Y
   */
  tuukaList: {
    /**
     * 項目名: 通貨コード
     * キー必須: Y | 値必須: Y
     */
    tuukaCode: string;

    /**
     * 項目名: 通貨名
     * キー必須: Y | 値必須: Y
     */
    tuukaMei: string;
  }[];
}
