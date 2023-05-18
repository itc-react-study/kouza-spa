import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE044。
 * オペレータ状況一覧照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE044RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 拠点別
   * キー必須: N | 値必須: N
   */
  ncoLocation?: string;

  /**
   * 項目名: 権限スキルコード
   * キー必須: N | 値必須: N
   */
  roleNo?: string;

  /**
   * 項目名: 業務スキル
   * キー必須: N | 値必須: N
   */
  businessRole?: string;

  /**
   * 項目名: オペレータステータス
   * キー必須: N | 値必須: N
   */
  operatorStatus?: string;

  /**
   * 項目名: 設置店番
   * キー必須: N | 値必須: N
   */
  shopNoSetted?: string;

  /**
   * 項目名: 設置店名
   * キー必須: N | 値必須: N
   */
  shopNameSetted?: string;
}

/**
 * API ID: SH1APIOPE044。
 * オペレータ状況一覧照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE044ResponseBody extends ApiResponseBodyBase {
  [x: string]: any;
  data: {
    /**
     * 項目名: 待機中
     * キー必須: N | 値必須: N
     */
    inStandby?: number;

    /**
     * 項目名: 受付中
     * キー必須: N | 値必須: N
     */
    inHand?: number;

    /**
     * 項目名: 後処理中
     * キー必須: N | 値必須: N
     */
    inPostTreatment?: number;

    /**
     * 項目名: 離席1
     * キー必須: N | 値必須: N
     */
    inLeave1?: number;

    /**
     * 項目名: 離席2
     * キー必須: N | 値必須: N
     */
    inLeave2?: number;

    /**
     * 項目名: 離席3
     * キー必須: N | 値必須: N
     */
    inLeave3?: number;

    /**
     * 項目名: オペレータ一覧
     * キー必須: N | 値必須: N
     */
    operatorList?: {
      /**
       * 項目名: オペレータID
       * キー必須: N | 値必須: N
       */
      operatorID?: string;

      /**
       * 項目名: オペレータ名
       * キー必須: N | 値必須: N
       */
      operatorName?: string;

      /**
       * 項目名: 拠点別
       * キー必須: N | 値必須: N
       */
      necLocation?: string;

      /**
       * 項目名: 権限スキルコード
       * キー必須: N | 値必須: N
       */
      roleNo?: string;

      /**
       * 項目名: 権限スキル
       * キー必須: N | 値必須: N
       */
      roleName?: string;

      /**
       * 項目名: オペレータステータス
       * キー必須: N | 値必須: N
       */
      operatorStatus?: string;

      /**
       * 項目名: 経過時間
       * キー必須: N | 値必須: N
       */
      passingTime?: string;

      /**
       * 項目名: 設置店番
       * キー必須: N | 値必須: N
       */
      shopNoSetted?: string;

      /**
       * 項目名: 支店号機名
       * キー必須: N | 値必須: N
       */
      tabletName?: string;

      /**
       * 項目名: 業務スキル
       * キー必須: N | 値必須: N
       */
      businessRoleName?: string;
    }[];
  };
}
