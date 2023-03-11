import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE051。
 * カード取引一覧APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE051RequestBody extends ApiRequestBodyBase {
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
   * 項目名: 受付番号
   * キー必須: N | 値必須: N
   */
  acceptanceNo?: string;

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
 * API ID: SH1APIOPE051。
 * カード取引一覧APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE051ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 帳票件数
     * キー必須: N | 値必須: N
     */
    cardCount?: number;

    /**
     * 項目名: カード取引一覧
     * キー必須: N | 値必須: N
     */
    CardToriList?: {
      /**
       * 項目名: カード取引
       * キー必須: N | 値必須: N
       */
      CardTori?: {
        /**
         * 項目名: 連番
         * キー必須: N | 値必須: N
         */
        serialNumber?: string;

        /**
         * 項目名: 店番
         * キー必須: N | 値必須: N
         */
        shopNo?: string;

        /**
         * 項目名: 支店／出張所名
         * キー必須: N | 値必須: N
         */
        accountBranchName?: string;

        /**
         * 項目名: おなまえ（フリガナ）
         * キー必須: N | 値必須: N
         */
        furikanaName?: string;

        /**
         * 項目名: 受付番号
         * キー必須: N | 値必須: N
         */
        acceptanceNo?: string;

        /**
         * 項目名: 印刷済フラグ
         * キー必須: N | 値必須: N
         */
        printedFlg?: string;
      };
    }[];
  };
}
