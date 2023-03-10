import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIDUMLGN
 * SH1APIDUMLGN
 *
 * @author Charlie
 */
export interface SH1APIDUMLGNRequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: userName
   * キー必須: Y | 値必須: Y
   */
  userName: string;

  /**
   * 項目名: userPwd
   * キー必須: Y | 値必須: Y
   */
  userPwd: string;
}

/**
 * API ID: SH1APIDUMLGN
 * SH1APIDUMLGN
 *
 * @author Charlie
 */
export type SH1APIDUMLGNResponseBody = ApiResponseBodyBase;
