import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE042。
 * オペレータステータス更新APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE042RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 更新前ステータス
   * キー必須: N | 値必須: N
   */
  statusBefore?: string;

  /**
   * 項目名: 更新後ステータス
   * キー必須: Y | 値必須: Y
   */
  statusAfter: string;

  /**
   * 項目名: 登録・更新フラグ
   * キー必須: Y | 値必須: Y
   */
  insUpdFlg: string;
}

/**
 * API ID: SH1APIOPE042。
 * オペレータステータス更新APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE042ResponseBody = ApiResponseBodyBase;
