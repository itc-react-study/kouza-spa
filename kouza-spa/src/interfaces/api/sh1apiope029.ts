import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE029。
 * 账号開設事前照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE029RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 検索方法
   * キー必須: Y | 値必須: Y
   */
  searchMethod: string;

  /**
   * 項目名: 人格識別区分
   * キー必須: N | 値必須: N
   */
  jinkakushikibetsuKubun?: string;

  /**
   * 項目名: カナのみ検索
   * キー必須: N | 値必須: N
   */
  kanaOnlySearchFlg?: string;

  /**
   * 項目名: 英字名なし
   * キー必須: N | 値必須: N
   */
  engNoSearchFlg?: string;

  /**
   * 項目名: 取引先名（漢字）
   * キー必須: N | 値必須: N
   */
  torihikisakiMeiKanji?: string;

  /**
   * 項目名: 取引先名（カナ）
   * キー必須: N | 値必須: N
   */
  torihikisakiMeiKana?: string;

  /**
   * 項目名: 取引先名（英字）
   * キー必須: N | 値必須: N
   */
  torihikisakiMeiEiji?: string;

  /**
   * 項目名: 生年月日元号区分
   * キー必須: N | 値必須: N
   */
  birthdayGengo?: string;

  /**
   * 項目名: 生年月日
   * キー必須: N | 値必須: N
   */
  birthday?: string;
}

/**
 * API ID: SH1APIOPE029。
 * 账号開設事前照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE029ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 事前照会
     * キー必須: N | 値必須: N
     */
    eventBeforeList?: {
      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      shopNo?: string;

      /**
       * 項目名: 支店名
       * キー必須: N | 値必須: N
       */
      subTenno?: string;

      /**
       * 項目名: CIF番号
       * キー必須: N | 値必須: N
       */
      cifBangou?: string;

      /**
       * 項目名: カナ氏名
       * キー必須: N | 値必須: N
       */
      kanaName?: string;

      /**
       * 項目名: 取引先名
       * キー必須: N | 値必須: N
       */
      torihikiName?: string;

      /**
       * 項目名: 生年月日
       * キー必須: N | 値必須: N
       */
      birthday?: string;

      /**
       * 項目名: 性別
       * キー必須: N | 値必須: N
       */
      gender?: string;
    }[];

    /**
     * 項目名: 制裁対象者
     * キー必須: N | 値必須: N
     */
    seisaitaishousha?: {
      /**
       * 項目名: 件数
       * キー必須: N | 値必須: N
       */
      kensuu?: number;

      /**
       * 項目名: 漢字検索済否フラグ
       * キー必須: N | 値必須: N
       */
      kanjiSearchFlg?: string;

      /**
       * 項目名: カナ検索済否フラグ
       * キー必須: N | 値必須: N
       */
      kanaSearchFlg?: string;

      /**
       * 項目名: 英字検索済否フラグ
       * キー必須: N | 値必須: N
       */
      engSearchFlg?: string;
    };

    /**
     * 項目名: 各種外国PEPs・Advers Media
     * キー必須: N | 値必須: N
     */
    kakushugaikokuPEPsAdversMedia?: {
      /**
       * 項目名: 件数
       * キー必須: N | 値必須: N
       */
      kensuu?: number;

      /**
       * 項目名: 漢字検索済否フラグ
       * キー必須: N | 値必須: N
       */
      kanjiSearchFlg?: string;

      /**
       * 項目名: カナ検索済否フラグ
       * キー必須: N | 値必須: N
       */
      kanaSearchFlg?: string;

      /**
       * 項目名: 英字検索済否フラグ
       * キー必須: N | 値必須: N
       */
      engSearchFlg?: string;
    };

    /**
     * 項目名: 制裁対象者チェックシステム画面URL
     * キー必須: N | 値必須: N
     */
    url?: string;
  };
}
