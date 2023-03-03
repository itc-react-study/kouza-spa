import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE041。
 * 账号開設メール送信APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE041RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  registNo: string;

  /**
   * 項目名: メール種別
   * キー必須: Y | 値必須: Y
   */
  mailType: string;
}

/**
 * API ID: SH1APIOPE041。
 * 账号開設メール送信APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE041ResponseBody = ApiResponseBodyBase;
