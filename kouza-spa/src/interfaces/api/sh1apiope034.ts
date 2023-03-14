import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE034。
 * KYCリスク評価関連情報照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE034RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: KYC受付番号
   * キー必須: Y | 値必須: Y
   */
  kycUketsukeBangou: string;

  /**
   * 項目名: KYCリスク評価システム登録年月日
   * キー必須: Y | 値必須: N
   */
  kycRiskHyoukaSystemTourokuNengappi: string;
}

/**
 * API ID: SH1APIOPE034。
 * KYCリスク評価関連情報照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE034ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 取引開始受入判定結果区分
     * キー必須: N | 値必須: N
     */
    torihikikaishiUkeireHanteiKekkaKubun?: string;

    /**
     * 項目名: 取引開始時承認者コメント
     * キー必須: N | 値必須: N
     */
    torihikikaishijiShouninshaComment?: string;

    /**
     * 項目名: 楽観排他日時
     * キー必須: N | 値必須: N
     */
    rakkanHaitaNichiji?: string;

    /**
     * 項目名: レコードステータス
     * キー必須: N | 値必須: N
     */
    recodeStatus?: string;

    /**
     * 項目名: KYCリスク評価システム登録年月日
     * キー必須: N | 値必須: N
     */
    kycRiskHyoukaSystemTourokuNengappi?: string;
  };
}
