import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE050。
 * 账号開設エラー明細一覧APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE050RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付日
   * キー必須: Y | 値必須: N
   */
  acceptanceDate: string;

  /**
   * 項目名: 拠点別
   * キー必須: Y | 値必須: N
   */
  branchName: string;

  /**
   * 項目名: 账号開設済/未済
   * キー必須: Y | 値必須: N
   */
  accountFinishFlg: string;

  /**
   * 項目名: 設置店番
   * キー必須: Y | 値必須: N
   */
  shopNoSetted: string;

  /**
   * 項目名: 設置店名
   * キー必須: Y | 値必須: N
   */
  shopNameSetted: string;
}

/**
 * API ID: SH1APIOPE050。
 * 账号開設エラー明細一覧APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE050ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 件数
     * キー必須: Y | 値必須: Y
     */
    kensuu: number;

    /**
     * 項目名: エラー明細一覧
     * キー必須: Y | 値必須: Y
     */
    errorList: {
      /**
       * 項目名: 受付日
       * キー必須: Y | 値必須: Y
       */
      acceptanceDate: string;

      /**
       * 項目名: 受付番号
       * キー必須: Y | 値必須: Y
       */
      acceptanceNo: string;

      /**
       * 項目名: 氏名
       * キー必須: Y | 値必須: Y
       */
      lastName: string;

      /**
       * 項目名: ステータス
       * キー必須: Y | 値必須: Y
       */
      states: string;

      /**
       * 項目名: 新規[普通]
       * キー必須: Y | 値必須: Y
       */
      newKey: string;

      /**
       * 項目名: ダイレクト契約新規
       * キー必須: Y | 値必須: Y
       */
      directNew: string;

      /**
       * 項目名: E通知登録
       * キー必須: Y | 値必須: Y
       */
      eNotice: string;

      /**
       * 項目名: ブランドデビットカード発行
       * キー必須: Y | 値必須: Y
       */
      brandDebitCard: string;

      /**
       * 項目名: 実特法
       * キー必須: Y | 値必須: Y
       */
      oecd: string;

      /**
       * 項目名: 印影受付情報コード登録（IC）
       * キー必須: Y | 値必須: Y
       */
      printAcceptInfoIcLogin: string;

      /**
       * 項目名: 印影受付情報コード登録（デビット）
       * キー必須: Y | 値必須: Y
       */
      printAcceptInfoDebitLogin: string;

      /**
       * 項目名: 指定账号登録
       * キー必須: Y | 値必須: Y
       */
      appointAccountBranchLogin: string;

      /**
       * 項目名: 属性登録
       * キー必須: Y | 値必須: Y
       */
      attributeLogin: string;

      /**
       * 項目名: KYC情報登録
       * キー必須: Y | 値必須: Y
       */
      kycInfomationLogin: string;

      /**
       * 項目名: 本人確認記録表
       * キー必須: Y | 値必須: Y
       */
      selfComfirmationRecord: string;

      /**
       * 項目名: 印影レス登録
       * キー必須: Y | 値必須: Y
       */
      printLogin: string;

      /**
       * 項目名: 記録表イメージ登録
       * キー必須: Y | 値必須: Y
       */
      recordImagLogin: string;

      /**
       * 項目名: エラー処理担当者
       * キー必須: Y | 値必須: Y
       */
      errorOperatorId: string;

      /**
       * 項目名: エラー処理再鑑者
       * キー必須: Y | 値必須: Y
       */
      errorReexamOperatorId: string;
    }[];
  };
}
