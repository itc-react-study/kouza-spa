import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE045。
 * 業務データ一覧照会(账号)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE045RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 照会タイプ
   * キー必須: Y | 値必須: Y
   */
  searchType: string;

  /**
   * 項目名: 受付日
   * キー必須: N | 値必須: N
   */
  acceptanceDate?: string;

  /**
   * 項目名: 受付番号
   * キー必須: N | 値必須: N
   */
  acceptanceNo?: string;

  /**
   * 項目名: 拠点別
   * キー必須: N | 値必須: N
   */
  ncoLocation?: string;

  /**
   * 項目名: 担当者名
   * キー必須: N | 値必須: N
   */
  operatorName?: string;

  /**
   * 項目名: 処理状況
   * キー必須: N | 値必須: N
   */
  treatmentStatus?: string;

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

  /**
   * 項目名: 店番
   * キー必須: N | 値必須: N
   */
  shopNo?: string;

  /**
   * 項目名: 账号番号
   * キー必須: N | 値必須: N
   */
  accountNo?: string;
}

/**
 * API ID: SH1APIOPE045。
 * 業務データ一覧照会(账号)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE045ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 形式点検待ち
     * キー必須: N | 値必須: N
     */
    checkWaiting?: number;

    /**
     * 項目名: オペレーション待ち
     * キー必須: N | 値必須: N
     */
    operationWaiting?: number;

    /**
     * 項目名: 管理者確認待ち
     * キー必須: N | 値必須: N
     */
    managerJudgementWaiting?: number;

    /**
     * 項目名: 再鑑待ち
     * キー必須: N | 値必須: N
     */
    reCheckWaiting?: number;

    /**
     * 項目名: 账号開設済
     * キー必須: N | 値必須: N
     */
    accountFinish?: number;

    /**
     * 項目名: 取引一覧
     * キー必須: N | 値必須: N
     */
    transactionList?: {
      /**
       * 項目名: 受付番号
       * キー必須: N | 値必須: N
       */
      acceptanceNo?: string;

      /**
       * 項目名: 支店号機名
       * キー必須: N | 値必須: N
       */
      branchMachine?: string;

      /**
       * 項目名: 顧客名
       * キー必須: N | 値必須: N
       */
      accountName?: string;

      /**
       * 項目名: 待ち時間
       * キー必須: N | 値必須: N
       */
      waitingTime?: number;

      /**
       * 項目名: 担当者ID
       * キー必須: N | 値必須: N
       */
      operatorId?: string;

      /**
       * 項目名: 担当者（フルネーム）
       * キー必須: N | 値必須: N
       */
      operatorNameFull?: string;

      /**
       * 項目名: 経過時間
       * キー必須: N | 値必須: N
       */
      passingTime?: number;

      /**
       * 項目名: 点検
       * キー必須: N | 値必須: N
       */
      check?: string;

      /**
       * 項目名: オペレーション
       * キー必須: N | 値必須: N
       */
      accountOpeningOperation?: string;

      /**
       * 項目名: 再鑑
       * キー必須: N | 値必須: N
       */
      reCheck?: string;

      /**
       * 項目名: 管理者確認
       * キー必須: N | 値必須: N
       */
      managerJudgement?: string;

      /**
       * 項目名: 結果
       * キー必須: N | 値必須: N
       */
      result?: string;

      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      shopNo?: string;

      /**
       * 項目名: 账号番号
       * キー必須: N | 値必須: N
       */
      accountNo?: string;

      /**
       * 項目名: 支店指定
       * キー必須: N | 値必須: N
       */
      shopSelected?: string;

      /**
       * 項目名: 既存账号
       * キー必須: N | 値必須: N
       */
      existingAccount?: string;

      /**
       * 項目名: ロック担当者ID
       * キー必須: N | 値必須: N
       */
      lockOperatorId?: string;

      /**
       * 項目名: オペレーション処理ステータス
       * キー必須: N | 値必須: N
       */
      operationProcessStatus?: string;
    }[];
  };
}
