import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE060
 * オペレータ情報一覧照会APIのリクエスト・ボディ
 * @author Charlie
 */
export interface SH1APIOPE060RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 拠点別
   * キー必須: N | 値必須: N
   */
  branchName?: string;

  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  operatorStatus?: string;

  /**
   * 項目名: 業務スキルコード
   * キー必須: N | 値必須: N
   */
  businessRoleNo?: string;

  /**
   * 項目名: 担当者ID
   * キー必須: N | 値必須: N
   */
  operatorId?: string;

  /**
   * 項目名: 担当者氏名
   * キー必須: N | 値必須: N
   */
  operatorName?: string;

  /**
   * 項目名: ソートフラグ
   * キー必須: N | 値必須: N
   */
  sortFlag?: string;
}

/**
 * API ID: SH1APIOPE060
 * オペレータ情報一覧照会APIのレスポンス・ボディ
 * @author Charlie
 */
export interface SH1APIOPE060ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 検索結果件数
     * キー必須: N | 値必須: N
     */
    operatorInfoCount?: number;

    /**
     * 項目名: 担当者情報一覧
     * キー必須: N | 値必須: N
     */
    operatorInfoList?: {
      /**
       * 項目名: 担当者情報
       * キー必須: N | 値必須: N
       */
      operatorInfo?: {
        /**
         * 項目名: 担当者ID
         * キー必須: N | 値必須: N
         */
        operatorId?: string;

        /**
         * 項目名: 担当者氏名
         * キー必須: N | 値必須: N
         */
        operatorName?: string;

        /**
         * 項目名: NCO拠点
         * キー必須: N | 値必須: N
         */
        branchName?: string;

        /**
         * 項目名: ステータス
         * キー必須: N | 値必須: N
         */
        operatorStatus?: string;

        /**
         * 項目名: ステータス表示用
         * キー必須: N | 値必須: N
         */
        operatorStatusStr?: string;

        /**
         * 項目名: 業務スキル名
         * キー必須: N | 値必須: N
         */
        businessRoleName?: string[];
      };
    }[];
  };
}
