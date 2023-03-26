import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE057。
 * 業務統計データ一括ダウンロードAPIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE057RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 業務統計データファイル名
   * キー必須: Y | 値必須: Y
   */
  gyomuToukeiDataFileName: string;
}

/**
 * API ID: SH1APIOPE057。
 * 業務統計データ一括ダウンロードAPIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE057ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: ファイル
     * キー必須: N | 値必須: N
     */
    bizStatisticsfile?: string;
  };
}
