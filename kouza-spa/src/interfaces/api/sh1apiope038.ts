import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE038。
 * 業務データロック(账号)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE038RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 明細処理区分
   * キー必須: Y | 値必須: Y
   */
  processKubun: string;

  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: 処理分岐
   * キー必須: Y | 値必須: N
   */
  processingBranch: string;

  /**
   * 項目名: 更新前ステータス
   * キー必須: Y | 値必須: Y
   */
  statusBefore: string;
}

/**
 * API ID: SH1APIOPE038。
 * 業務データロック(账号)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE038ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 明細処理ステータス
     * キー必須: N | 値必須: N
     */
    processStatus?: string;

    /**
     * 項目名: オペレーション処理ステータス
     * キー必須: N | 値必須: N
     */
    operationProcessStatus?: string;

    /**
     * 項目名: 担当者更新後ステータス
     * キー必須: N | 値必須: N
     */
    operatorStatus?: string;

    /**
     * 項目名: 機微情報処理状況
     * キー必須: N | 値必須: N
     */
    maskingStatus?: string;
  };
}
