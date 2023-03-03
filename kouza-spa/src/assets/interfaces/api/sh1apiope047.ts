import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE047。
 * 取引一覧掲示板更新APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE047RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 掲示板文言区分
   * キー必須: Y | 値必須: Y
   */
  forumTextDiv: string;

  /**
   * 項目名: 掲示板文言
   * キー必須: Y | 値必須: N
   */
  forumText: string;
}

/**
 * API ID: SH1APIOPE047。
 * 取引一覧掲示板更新APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE047ResponseBody = ApiResponseBodyBase;
