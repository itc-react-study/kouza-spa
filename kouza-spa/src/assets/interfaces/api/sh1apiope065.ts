import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE065。
 * 待ち状況一覧掲示板更新APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE065RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 掲示板文言区分
   * キー必須: Y | 値必須: Y
   */
  noticeDiv: string;

  /**
   * 項目名: 掲示板
   * キー必須: Y | 値必須: N
   */
  noticeboard: string;
}

/**
 * API ID: SH1APIOPE065。
 * 待ち状況一覧掲示板更新APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE065ResponseBody = ApiResponseBodyBase;
