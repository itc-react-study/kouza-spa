import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE043。
 * アクセス履歴登録APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE043RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 操作内容区分
   * キー必須: N | 値必須: N
   */
  operationDiv?: string;

  /**
   * 項目名: アクセスファイル名
   * キー必須: N | 値必須: N
   */
  accessFileName?: string;

  /**
   * 項目名: 操作内容
   * キー必須: N | 値必須: N
   */
  operation?: string;
}

/**
 * API ID: SH1APIOPE043。
 * アクセス履歴登録APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE043ResponseBody = ApiResponseBodyBase;
