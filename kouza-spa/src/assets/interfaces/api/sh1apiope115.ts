import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE115。
 * ログインユーザー情報取得APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export type SH1APIOPE115RequestBody = ApiRequestBodyBase;

/**
 * API ID: SH1APIOPE115。
 * ログインユーザー情報取得APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE115ResponseBody extends ApiResponseBodyBase {
  /**
   * 項目名: ユーザーID
   * キー必須: Y | 値必須: Y
   */
  userId: string;

  /**
   * 項目名: 所属店番
   * キー必須: Y | 値必須: N
   */
  userShopNumber: string;

  /**
   * 項目名: オペレーター情報
   * キー必須: N | 値必須: N
   */
  operatorInfo?: {
    /**
     * 項目名: 担当者氏名
     * キー必須: N | 値必須: N
     */
    operatorName?: string;

    /**
     * 項目名: NCO拠点名
     * キー必須: N | 値必須: N
     */
    branchName?: string;

    /**
     * 項目名: 業務スキルコードリスト
     * キー必須: N | 値必須: N
     */
    businessRoleNoList?: string[];

    /**
     * 項目名: 権限スキル
     * キー必須: N | 値必須: N
     */
    authorityID?: string;
  };
}
