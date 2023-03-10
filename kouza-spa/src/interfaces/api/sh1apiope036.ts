import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE036。
 * 問診開始通知APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE036RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: 問診中フラグ
   * キー必須: Y | 値必須: Y
   */
  hearingFlag: string;
}

/**
 * API ID: SH1APIOPE036。
 * 問診開始通知APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE036ResponseBody = ApiResponseBodyBase;
