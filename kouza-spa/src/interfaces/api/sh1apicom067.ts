import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APICOM067。
 * タブレット情報明細照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM067RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: タブレットID
   * キー必須: Y | 値必須: Y
   */
  tabletId: string;
}

/**
 * API ID: SH1APICOM067。
 * タブレット情報明細照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APICOM067ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: タブレット名
     * キー必須: N | 値必須: N
     */
    tabletName?: string;

    /**
     * 項目名: 店番
     * キー必須: N | 値必須: N
     */
    shopNo?: string;

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
     * 項目名: 削除フラグ(検印待ち)
     * キー必須: N | 値必須: N
     */
    delFlgEdit?: string;

    /**
     * 項目名: データ有無フラグ
     * キー必須: N | 値必須: N
     */
    dataUmuFlg?: string;
  };
}
