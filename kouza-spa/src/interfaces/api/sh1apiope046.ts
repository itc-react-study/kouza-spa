import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE046。
 * 取引一覧掲示板照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE046RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 掲示板文言区分
   * キー必須: Y | 値必須: Y
   */
  forumTextDiv: string;
}

/**
 * API ID: SH1APIOPE046。
 * 取引一覧掲示板照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE046ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 掲示板文言
     * キー必須: Y | 値必須: N
     */
    forumText: string;
  };
}
