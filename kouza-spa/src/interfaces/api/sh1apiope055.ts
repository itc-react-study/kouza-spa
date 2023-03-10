import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE055。
 * 機微情報マスキング画像登録APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE055RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: スキャンイメージレイヤ
   * キー必須: Y | 値必須: Y
   */
  completeEventFlag: string;

  /**
   * 項目名: 機微情報マスキング画像情報リスト
   * キー必須: Y | 値必須: Y
   */
  maskingImageInfoList: {
    /**
     * 項目名: 機微情報マスキング画像情報
     * キー必須: Y | 値必須: Y
     */
    maskingImageInfo: {
      /**
       * 項目名: スキャンイメージコード
       * キー必須: Y | 値必須: Y
       */
      scanImageCd: string;

      /**
       * 項目名: スキャンイメージ連番
       * キー必須: Y | 値必須: Y
       */
      scanImageNo: string;

      /**
       * 項目名: スキャンイメージ画像
       * キー必須: Y | 値必須: Y
       */
      scanImageFile: string;
    };
  }[];
}

/**
 * API ID: SH1APIOPE055。
 * 機微情報マスキング画像登録APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE055ResponseBody = ApiResponseBodyBase;
