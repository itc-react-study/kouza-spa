import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM014。
 * 住所検索(郵便番号)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM014RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 郵便番号
   * キー必須: Y | 値必須: Y
   */
  postNo: string;
}

/**
 * API ID: SH1APICOM014。
 * 住所検索(郵便番号)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM014ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 検索結果リスト
     * キー必須: N | 値必須: N
     */
    addrList?: {
      /**
       * 項目名: 郵便番号
       * キー必須: N | 値必須: N
       */
      postNo?: string;

      /**
       * 項目名: 代表住所(漢字)
       * キー必須: N | 値必須: N
       */
      addressMainKj?: string;

      /**
       * 項目名: 補足住所(漢字)
       * キー必須: N | 値必須: N
       */
      addressSubKanji?: string;

      /**
       * 項目名: 代表住所(カナ)
       * キー必須: N | 値必須: N
       */
      addressMainKn?: string;

      /**
       * 項目名: 補足住所(カナ)
       * キー必須: N | 値必須: N
       */
      addressSubKn?: string;

      /**
       * 項目名: 住所郵便番号重複フラグ
       * キー必須: N | 値必須: N
       */
      duplicateFlag?: string;

      /**
       * 項目名: 住所コード
       * キー必須: N | 値必須: N
       */
      juushoCode?: string;
    }[];
  };
}
