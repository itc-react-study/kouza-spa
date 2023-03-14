import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE053。
 * 機微情報一覧APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE053RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付日
   * キー必須: Y | 値必須: N
   */
  acceptanceDate: string;

  /**
   * 項目名: 拠点別
   * キー必須: Y | 値必須: N
   */
  ncoLocation: string;

  /**
   * 項目名: 機微情報有無
   * キー必須: Y | 値必須: N
   */
  maskingInfoUmu: string;

  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: N
   */
  acceptanceNo: string;

  /**
   * 項目名: 機微情報ステータス
   * キー必須: Y | 値必須: N
   */
  maskingStatus: string;
}

/**
 * API ID: SH1APIOPE053。
 * 機微情報一覧APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE053ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 一覧検索件数
     * キー必須: N | 値必須: N
     */
    maskingInfoCount?: number;

    /**
     * 項目名: 機微情報一覧
     * キー必須: N | 値必須: N
     */
    maskingInfoList?: MaskingInfo[];
  };
}

/**
 * 機微情報。
 *
 * @author Charlie
 */
export interface MaskingInfo {
  /**
   * 項目名: 受付番号
   * キー必須: N | 値必須: N
   */
  acceptanceNo?: string;

  /**
   * 項目名: 機微情報有無
   * キー必須: N | 値必須: N
   */
  maskingInfoUmu?: string;

  /**
   * 項目名: 本人確認書類枚数
   * キー必須: N | 値必須: N
   */
  idCardFrontImageCount?: string;

  /**
   * 項目名: 機微情報ステータス
   * キー必須: N | 値必須: N
   */
  maskingStatus?: string;

  /**
   * 項目名: 機微情報ステータス（表示用）
   * キー必須: N | 値必須: N
   */
  maskingStatusStr?: string;

  /**
   * 項目名: 処理者ID
   * キー必須: N | 値必須: N
   */
  shoriID?: string;

  /**
   * 項目名: 処理者
   * キー必須: N | 値必須: N
   */
  operator?: string;

  /**
   * 項目名: 再鑑者ID
   * キー必須: N | 値必須: N
   */
  reCheckerID?: string;

  /**
   * 項目名: 再鑑者
   * キー必須: N | 値必須: N
   */
  reChecker?: string;

  /**
   * 項目名: ロック処理者ID
   * キー必須: N | 値必須: N
   */
  lockOperatorId?: string;
}
