import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE030。
 * i-CIF照会APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE030RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 店番
   * キー必須: Y | 値必須: Y
   */
  shopNo: string;

  /**
   * 項目名: CIF番号
   * キー必須: Y | 値必須: Y
   */
  cifBangou: string;
}

/**
 * API ID: SH1APIOPE030。
 * i-CIF照会APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE030ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: 第1住所
     * キー必須: N | 値必須: N
     */
    address1?: string;

    /**
     * 項目名: 第2住所
     * キー必須: N | 値必須: N
     */
    address2?: string;

    /**
     * 項目名: 英字名
     * キー必須: N | 値必須: N
     */
    englishName?: string;

    /**
     * 項目名: 本確
     * キー必須: N | 値必須: N
     */
    confirmStr?: string;

    /**
     * 項目名: CDD
     * キー必須: N | 値必須: N
     */
    cddStr?: string;

    /**
     * 項目名: EDD
     * キー必須: N | 値必須: N
     */
    eddStr?: string;

    /**
     * 項目名: 禁通
     * キー必須: N | 値必須: N
     */
    noticeStatusStr?: string;

    /**
     * 項目名: 人格区分
     * キー必須: N | 値必須: N
     */
    personalityType?: string;

    /**
     * 項目名: 人格区分ラベル
     * キー必須: N | 値必須: N
     */
    personalityTypeStr?: string;

    /**
     * 項目名: TEL1
     * キー必須: N | 値必須: N
     */
    telPhone1?: string;

    /**
     * 項目名: TEL2
     * キー必須: N | 値必須: N
     */
    telPhone2?: string;

    /**
     * 項目名: TEL3
     * キー必須: N | 値必須: N
     */
    telPhone3?: string;

    /**
     * 項目名: 本部
     * キー必須: N | 値必須: N
     */
    busyo?: string;

    /**
     * 項目名: 取引開始日
     * キー必須: N | 値必須: N
     */
    torihikiStartDate?: string;

    /**
     * 項目名: 本人確認資料
     * キー必須: N | 値必須: N
     */
    honnjiConfirm?: string;

    /**
     * 項目名: 本人確認資料番号
     * キー必須: N | 値必須: N
     */
    honnjiConfirmCode?: string;

    /**
     * 項目名: 勤務先
     * キー必須: N | 値必須: N
     */
    kinmuAddress?: string;

    /**
     * 項目名: 共通印鑑
     * キー必須: N | 値必須: N
     */
    yinnga?: string;

    /**
     * 項目名: 国籍1
     * キー必須: N | 値必須: N
     */
    nation1?: string;

    /**
     * 項目名: 国籍2
     * キー必須: N | 値必須: N
     */
    nation2?: string;

    /**
     * 項目名: 国籍3
     * キー必須: N | 値必須: N
     */
    nation3?: string;

    /**
     * 項目名: 海外住所(漢字)
     * キー必須: N | 値必須: N
     */
    kannjiAddress?: string;

    /**
     * 項目名: 海外住所(英字)
     * キー必須: N | 値必須: N
     */
    enAddress?: string;

    /**
     * 項目名: 非居
     * キー必須: N | 値必須: N
     */
    liveStr?: string;

    /**
     * 項目名: おるすばん番号
     * キー必須: N | 値必須: N
     */
    keiyakuCode?: string;

    /**
     * 項目名: 保有账号数
     * キー必須: N | 値必須: N
     */
    hoyuuKouzaSuu?: string;

    /**
     * 項目名: cif一覧
     * キー必須: N | 値必須: N
     */
    cifList?: {
      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      shopNo?: string;

      /**
       * 項目名: CIF番号
       * キー必須: N | 値必須: N
       */
      cifBangou?: string;

      /**
       * 項目名: 科目コード
       * キー必須: N | 値必須: N
       */
      koumokuCode?: string;

      /**
       * 項目名: 科目名
       * キー必須: N | 値必須: N
       */
      koumokuStr?: string;

      /**
       * 項目名: 账号番号
       * キー必須: N | 値必須: N
       */
      accountNo?: string;

      /**
       * 項目名: 種類
       * キー必須: N | 値必須: N
       */
      syurui?: string;

      /**
       * 項目名: 通知区分
       * キー必須: N | 値必須: N
       */
      noticeKubun?: string;

      /**
       * 項目名: 本部
       * キー必須: N | 値必須: N
       */
      busyo?: string;

      /**
       * 項目名: 郵便
       * キー必須: N | 値必須: N
       */
      email?: string;

      /**
       * 項目名: E帳
       * キー必須: N | 値必須: N
       */
      ecyou?: string;

      /**
       * 項目名: 共通
       * キー必須: N | 値必須: N
       */
      kyoutsu?: string;

      /**
       * 項目名: ダイレクト代表账号
       * キー必須: N | 値必須: N
       */
      directkouza?: string;

      /**
       * 項目名: ダイレクト初回登録日
       * キー必須: N | 値必須: N
       */
      directfirstLoginDate?: string;

      /**
       * 項目名: ダイレクト契約者特定コード
       * キー必須: N | 値必須: N
       */
      directKeiyakushatokuteiCode?: string;
    }[];

    /**
     * 項目名: EDD先分類区分
     * キー必須: N | 値必須: N
     */
    eddBunnruiKubun?: string;

    /**
     * 項目名: 外為取扱区分
     * キー必須: N | 値必須: N
     */
    fgnExchDiv?: string;
  };
}
