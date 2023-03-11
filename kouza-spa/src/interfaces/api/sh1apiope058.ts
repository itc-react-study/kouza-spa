import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE058。
 * アクセス履歴一覧照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE058RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 日付（From）
   * キー必須: Y | 値必須: Y
   */
  dateFrom: string;

  /**
   * 項目名: 日付（To）
   * キー必須: Y | 値必須: Y
   */
  dateTo: string;

  /**
   * 項目名: 対象ファイル種類
   * キー必須: Y | 値必須: Y
   */
  fileType: string;
}

/**
 * API ID: SH1APIOPE058。
 * アクセス履歴一覧照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE058ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: ダウンロードファイル一覧
     * キー必須: N | 値必須: N
     */
    fileList?: {
      /**
       * 項目名: ファイル項番
       * キー必須: N | 値必須: N
       */
      fileNo?: number;

      /**
       * 項目名: ファイルサイズ
       * キー必須: N | 値必須: N
       */
      fileSize?: string;

      /**
       * 項目名: ファイル名
       * キー必須: N | 値必須: N
       */
      fileName?: string;
    }[];
  };
}
