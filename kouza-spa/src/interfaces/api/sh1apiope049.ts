import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE049。
 * スキャンイメージ照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE049RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: スキャンイメージレイヤ
   * キー必須: Y | 値必須: Y
   */
  scanImageLayer: string;
}

/**
 * API ID: SH1APIOPE049。
 * スキャンイメージ照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE049ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 機微情報ステータス
     * キー必須: N | 値必須: N
     */
    maskingStatus?: string;

    /**
     * 項目名: スキャンイメージ情報リスト
     * キー必須: Y | 値必須: Y
     */
    scanImageInfoList: {
      /**
       * 項目名: スキャンイメージ名
       * キー必須: N | 値必須: N
       */
      scanImageName?: string;

      /**
       * 項目名: 受付番号
       * キー必須: N | 値必須: N
       */
      acceptanceNo?: string;

      /**
       * 項目名: スキャンイメージコード
       * キー必須: N | 値必須: N
       */
      scanImageCd?: string;

      /**
       * 項目名: スキャンイメージ連番
       * キー必須: N | 値必須: N
       */
      scanImageNo?: string;

      /**
       * 項目名: スキャンイメージレイヤ
       * キー必須: N | 値必須: N
       */
      scanImageLayer?: string;

      /**
       * 項目名: スキャンイメージファイル
       * キー必須: N | 値必須: N
       */
      scanImageFile?: string;
    }[];
  };
}
