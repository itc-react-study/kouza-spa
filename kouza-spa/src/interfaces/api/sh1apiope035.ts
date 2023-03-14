import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE035。
 * 账号開設APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE035RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: 起動元イベント
   * キー必須: Y | 値必須: Y
   */
  sourceEvent: string;

  /**
   * 項目名: 再送信対象
   * キー必須: N | 値必須: N
   */
  resendTarget?: {
    /**
     * 項目名: 新規[普通]
     * キー必須: N | 値必須: N
     */
    shinkiFutsu?: string;

    /**
     * 項目名: 印影受付情報コード登録（IC）
     * キー必須: N | 値必須: N
     */
    ineiRirekiTourokuIc?: string;

    /**
     * 項目名: ダイレクト契約新規
     * キー必須: N | 値必須: N
     */
    directKeiyakuShinki?: string;

    /**
     * 項目名: 指定账号登録
     * キー必須: N | 値必須: N
     */
    directServiceShiteiKouzaTouroku?: string;

    /**
     * 項目名: E通知登録
     * キー必須: N | 値必須: N
     */
    directEtsuuchiTouroku?: string;

    /**
     * 項目名: ブランドデビットカード発行
     * キー必須: N | 値必須: N
     */
    drandDebitCardIssue?: string;

    /**
     * 項目名: 印影受付情報コード登録（デビット）
     * キー必須: N | 値必須: N
     */
    ineiRirekiTourokuDebit?: string;

    /**
     * 項目名: 実特法
     * キー必須: N | 値必須: N
     */
    jittokuhouTodokedeJouhouTouroku?: string;

    /**
     * 項目名: 属性登録
     * キー必須: N | 値必須: N
     */
    tougoukokyakuZokuseiTouroku?: string;

    /**
     * 項目名: 本人確認記録表
     * キー必須: N | 値必須: N
     */
    honninkakuninKirokuhyouTouroku?: string;

    /**
     * 項目名: KYC情報登録
     * キー必須: N | 値必須: N
     */
    tougoukokyakuKYCjouhouTouroku?: string;
  };
}

/**
 * API ID: SH1APIOPE035。
 * 账号開設APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE035ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 账号開設実行結果
     * キー必須: Y | 値必須: Y
     */
    accountFinishResult: string;

    /**
     * 項目名: 電文実行結果情報
     * キー必須: Y | 値必須: Y
     */
    denbunResultJouhou: {
      /**
       * 項目名: 新規[普通]結果
       * キー必須: Y | 値必須: Y
       */
      newKeyResult: string;

      /**
       * 項目名: 印影受付情報コード登録（IC）結果
       * キー必須: Y | 値必須: Y
       */
      printAcceptInfoIcLoginResult: string;

      /**
       * 項目名: ダイレクト契約新規結果
       * キー必須: Y | 値必須: Y
       */
      directNewResult: string;

      /**
       * 項目名: サービス指定账号登録結果
       * キー必須: Y | 値必須: Y
       */
      appointAccountBranchLoginResult: string;

      /**
       * 項目名: E通知登録結果
       * キー必須: Y | 値必須: Y
       */
      eNoticeResult: string;

      /**
       * 項目名: ブランドデビットカード発行結果
       * キー必須: Y | 値必須: Y
       */
      visaCardIssueResult: string;

      /**
       * 項目名: 印影受付情報コード登録（デビット）結果
       * キー必須: Y | 値必須: Y
       */
      printAcceptInfoDebitLoginResult: string;

      /**
       * 項目名: 実特法登録結果
       * キー必須: Y | 値必須: Y
       */
      oecdResult: string;

      /**
       * 項目名: 属性登録結果
       * キー必須: Y | 値必須: Y
       */
      attributeLoginResult: string;

      /**
       * 項目名: 本人確認記録表登録結果
       * キー必須: Y | 値必須: Y
       */
      selfComfirmationRecordResult: string;

      /**
       * 項目名: KYC情報登録結果
       * キー必須: Y | 値必須: Y
       */
      kycInfomationLoginResult: string;
    };
  };
}
