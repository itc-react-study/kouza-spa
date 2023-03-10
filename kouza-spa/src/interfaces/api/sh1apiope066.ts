import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE066。
 * タブレット情報一覧照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE066RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: タブレット名
   * キー必須: N | 値必須: N
   */
  tabletName?: string;

  /**
   * 項目名: 店番
   * キー必須: N | 値必須: N
   */
  shopNoSetted?: string;

  /**
   * 項目名: 設置店名
   * キー必須: N | 値必須: N
   */
  shopNameSetted?: string;

  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  status?: string;
}

/**
 * API ID: SH1APIOPE066。
 * タブレット情報一覧照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE066ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: タブレット情報一覧
     * キー必須: Y | 値必須: N
     */
    tabletInfoList: TabletInfo[];
  };
}

/**
 * タブレット情報。
 *
 * @author Charlie
 */
export interface TabletInfo {
  /**
   * 項目名: タブレット名
   * キー必須: N | 値必須: N
   */
  tabletName?: string;

  /**
   * 項目名: 店番
   * キー必須: N | 値必須: N
   */
  shopNoSetted?: string;

  /**
   * 項目名: 設置店名
   * キー必須: N | 値必須: N
   */
  shopNameSetted?: string;

  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  status?: string;

  /**
   * 項目名: タブレットID
   * キー必須: N | 値必須: N
   */
  tabletId?: string;

  /**
   * 項目名: 検印申請担当者ID
   * キー必須: N | 値必須: N
   */
  requestOperatorId?: string;

  /**
   * 項目名: ロック担当者ID
   * キー必須: N | 値必須: N
   */
  lockOperatorId?: string;
}
