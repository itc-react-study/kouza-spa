import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE068。
 * タブレット情報追加・更新APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE068RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: ステータス
   * キー必須: N | 値必須: N
   */
  status?: string;

  /**
   * 項目名: 処理タイプ
   * キー必須: Y | 値必須: Y
   */
  shoriType: string;

  /**
   * 項目名: タブレット情報
   * キー必須: Y | 値必須: Y
   */
  tabletInfo: {
    /**
     * 項目名: タブレットID
     * キー必須: Y | 値必須: Y
     */
    tabletId: string;

    /**
     * 項目名: タブレット名
     * キー必須: N | 値必須: N
     */
    tabletName?: string;

    /**
     * 項目名: 設置店番
     * キー必須: N | 値必須: N
     */
    shopNoSetted?: string;

    /**
     * 項目名: 削除フラグ
     * キー必須: N | 値必須: N
     */
    deleteFlag?: string;
  };
}

/**
 * API ID: SH1APIOPE068。
 * タブレット情報追加・更新APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE068ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 明細ステータス
     * キー必須: N | 値必須: N
     */
    status?: string;
  };
}
