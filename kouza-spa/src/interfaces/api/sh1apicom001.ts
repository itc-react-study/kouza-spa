import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM001
 * 初期化APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM001RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 端末特定情報
   * キー必須: N | 値必須: N
   */
  deviceSpecificInformation?: string;
}

/**
 * API ID: SH1APICOM001。
 * 初期化APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM001ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: セッションキー
     * キー必須: Y | 値必須: Y
     */
    sessionKey: string;

    /**
     * 項目名: 鍵A生成元情報
     * キー必須: Y | 値必須: Y
     */
    keyA: string;

    /**
     * 項目名: 鍵B生成元情報
     * キー必須: Y | 値必須: Y
     */
    keyB: string;

    /**
     * 項目名: 鍵C生成元情報
     * キー必須: Y | 値必須: Y
     */
    keyC: string;

    /**
     * 項目名: 本人容貌フラグ
     * キー必須: Y | 値必須: Y
     */
    faceFlags: {
      /**
       * 項目名: 運転免許証
       * キー必須: Y | 値必須: Y
       */
      driverLicense: boolean;

      /**
       * 項目名: 個人番号カード
       * キー必須: Y | 値必須: Y
       */
      myNumber: boolean;

      /**
       * 項目名: 健康保険証
       * キー必須: Y | 値必須: Y
       */
      insuranceCard: boolean;

      /**
       * 項目名: 運転免許証(WEB)
       * キー必須: Y | 値必須: Y
       */
      driverLicenseWeb: boolean;

      /**
       * 項目名: 個人番号カード(WEB)
       * キー必須: Y | 値必須: Y
       */
      myNumberWeb: boolean;

      /**
       * 項目名: 健康保険証(WEB)
       * キー必須: Y | 値必須: Y
       */
      insuranceCardWeb: boolean;
    };

    /**
     * 項目名: 申込別閉塞フラグ
     * キー必須: Y | 値必須: Y
     */
    idBlockadeFlags: {
      /**
       * 項目名: ICチップ（運転免許証）
       * キー必須: Y | 値必須: Y
       */
      licenseIc: number;

      /**
       * 項目名: ICチップ（個人番号カード）
       * キー必須: Y | 値必須: Y
       */
      myNumberIc: number;

      /**
       * 項目名: 運転免許証（券面/店頭タブレット）
       * キー必須: Y | 値必須: Y
       */
      licenseTabletImg: number;

      /**
       * 項目名: 運転免許証（券面/スマート账号開設）
       * キー必須: Y | 値必須: Y
       */
      licenseSmartImg: number;

      /**
       * 項目名: マイナンバーカード（券面/店頭タブレット）
       * キー必須: Y | 値必須: Y
       */
      myNumberTabletImg: number;

      /**
       * 項目名: マイナンバーカード（券面/スマート账号開設）
       * キー必須: Y | 値必須: Y
       */
      myNumberSmartImg: number;

      /**
       * 項目名: 健康保険証 ＋ 補完書類
       * キー必須: Y | 値必須: Y
       */
      insuranceCardImg: number;

      /**
       * 項目名: 運転免許証 ＋ マイナンバーカード
       * キー必須: Y | 値必須: Y
       */
      licenseMyNumberImg: number;

      /**
       * 項目名: 運転免許証 ＋ 健康保険証
       * キー必須: Y | 値必須: Y
       */
      licenseInsuranceCardImg: number;

      /**
       * 項目名: マイナンバーカード ＋ 健康保険証
       * キー必須: Y | 値必須: Y
       */
      myNumberInsuranceCardImg: number;

      /**
       * 項目名: 行員撮影
       * キー必須: Y | 値必須: Y
       */
      staffImg: number;
    };

    /**
     * 項目名: eKYCサービス設定
     * キー必須: Y | 値必須: Y
     */
    ekycSettings: {
      /**
       * 項目名: フレームアウト情報のチェックフラグ
       * キー必須: Y | 値必須: Y
       */
      frameoutCheckLimit: number;

      /**
       * 項目名: 顔照合試行回数上限
       * キー必須: Y | 値必須: Y
       */
      faceVerifyLimit: number;

      /**
       * 項目名: 顔照合スコア閾値
       * キー必須: Y | 値必須: Y
       */
      faceScoreThreshold: number;

      /**
       * 項目名: 人物ライブネススコア閾値
       * キー必須: Y | 値必須: Y
       */
      personalLivenessScoreThreshold: number;

      /**
       * 項目名: 券面ライブネススコア閾値
       * キー必須: Y | 値必須: Y
       */
      apLivenessScoreThreshold: number;

      /**
       * 項目名: OCR試行回数上限
       * キー必須: Y | 値必須: Y
       */
      ocrRetakeLimit: number;
    };

    /**
     * 項目名: 端末特定情報
     * キー必須: N | 値必須: N
     */
    deviceSpecificInformation?: string;

    /**
     * 項目名: 申込有無
     * キー必須: N | 値必須: N
     */
    regist?: boolean;

    /**
     * 項目名: アプリ評価ポップアップ表示フラグ
     * キー必須: N | 値必須: N
     */
    cpFlag?: number;
  };
}
