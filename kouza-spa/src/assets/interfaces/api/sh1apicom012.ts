import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM012。
 * マスタ参照(国)API のリクエスト・ボディ。
 *
 * @author Charlie
 */

export type SH1APICOM012RequestBody = ApiRequestBodyBase;

/**
 * API ID: SH1APICOM012。
 * マスタ参照(国)API のレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM012ResponseBody extends ApiResponseBodyBase {
  /**
   * 項目名: 国リスト
   * キー必須: Y | 値必須: Y
   */
  kuniList: {
    /**
     * 項目名: 国コード
     * キー必須: Y | 値必須: Y
     */
    kuniCode: string;

    /**
     * 項目名: 国名・地域名(日本語(簡略))
     * キー必須: Y | 値必須: Y
     */
    kuniName_kj: string;

    /**
     * 項目名: 経済制裁対象時表示国名
     * キー必須: Y | 値必須: N
     */
    kuniSanctionedName: string;

    /**
     * 項目名: 国籍表示フラグ
     * キー必須: Y | 値必須: Y
     */
    nationalityFlg: string;

    /**
     * 項目名: 経済制裁対象国表示フラグ
     * キー必須: Y | 値必須: Y
     */
    sanctionedFlg: string;
  }[];
}
