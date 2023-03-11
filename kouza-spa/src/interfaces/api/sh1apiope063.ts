import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE063。
 * 待ち状況表示APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE063RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 設置店番
   * キー必須: Y | 値必須: N
   */
  shopNoSetted: string;
}

/**
 * API ID: SH1APIOPE063。
 * 待ち状況表示APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE063ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: タブレット使用状況一覧
     * キー必須: Y | 値必須: N
     */
    tabUsageInfoList: {
      /**
       * 項目名: 端末名
       * キー必須: N | 値必須: N
       */
      deviceName?: string;

      /**
       * 項目名: 使用状況
       * キー必須: N | 値必須: N
       */
      useStatus?: string;
    }[];

    /**
     * 項目名: 新規账号開設待ち状況
     * キー必須: N | 値必須: N
     */
    accountNewWaiting?: string;
  };
}
