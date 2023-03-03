import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE039。
 * 業務データアンロック(口座)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE039RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 明細処理区分
   * キー必須: Y | 値必須: Y
   */
  dbProcessDistinguish: string;

  /**
   * 項目名: 明細処理ステータス
   * キー必須: Y | 値必須: Y
   */
  detailsStatus: string;

  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: 更新前ステータス
   * キー必須: Y | 値必須: Y
   */
  statusBefore: string;
}

/**
 * API ID: SH1APIOPE039。
 * 業務データアンロック(口座)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE039ResponseBody = ApiResponseBodyBase;
