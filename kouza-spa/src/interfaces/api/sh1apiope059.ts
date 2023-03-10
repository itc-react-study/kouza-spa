import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE059。
 * アクセス履歴一括ダウンロードAPIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE059RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 対象ファイル種類
   * キー必須: Y | 値必須: Y
   */
  fileType: string;

  /**
   * 項目名: ファイル名
   * キー必須: Y | 値必須: Y
   */
  fileName: string;
}

/**
 * API ID: SH1APIOPE059。
 * アクセス履歴一括ダウンロードAPIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE059ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: ファイル
     * キー必須: Y | 値必須: Y
     */
    file: string;
  };
}
