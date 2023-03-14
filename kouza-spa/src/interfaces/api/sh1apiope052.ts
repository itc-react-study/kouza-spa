import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE052。
 * MUN宛帳票生成APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE052RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string[];

  /**
   * 項目名: 一括印刷フラグ
   * キー必須: N | 値必須: N
   */
  bulkPrintFlag?: boolean;

  /**
   * 項目名: 受付日
   * キー必須: N | 値必須: N
   */
  acceptanceDate?: string;

  /**
   * 項目名: 拠点別
   * キー必須: N | 値必須: N
   */
  branchName?: string;

  /**
   * 項目名: 店番
   * キー必須: N | 値必須: N
   */
  shopNo?: string;

  /**
   * 項目名: 店名
   * キー必須: N | 値必須: N
   */
  shopName?: string;
}

/**
 * API ID: SH1APIOPE052。
 * MUN宛帳票生成APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE052ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: ダウンロードファイル
     * キー必須: Y | 値必須: N
     */
    downloadFiles: {
      /**
       * 項目名: ファイル名
       * キー必須: N | 値必須: N
       */
      fileName?: string;

      /**
       * 項目名: ファイル内容
       * キー必須: N | 値必須: N
       */
      fileContent?: string;
    }[];
  };
}
