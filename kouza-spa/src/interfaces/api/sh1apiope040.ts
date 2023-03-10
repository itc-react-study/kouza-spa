import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE040。
 * 業務データ更新(口座)APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE040RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: 受付番号
   * キー必須: Y | 値必須: Y
   */
  acceptanceNo: string;

  /**
   * 項目名: 明細処理ステータス
   * キー必須: Y | 値必須: Y
   */
  detailsStatus: string;

  /**
   * 項目名: オペレーション点検状態区分
   * キー必須: N | 値必須: N
   */
  operationCheckMode?: string;

  /**
   * 項目名: オペレーションボタン処理区分
   * キー必須: N | 値必須: N
   */
  operationButtonMode?: string;

  /**
   * 項目名: 役席判断結果
   * キー必須: N | 値必須: N
   */
  leaderResult?: string;

  /**
   * 項目名: オペレータ処理情報
   * キー必須: Y | 値必須: Y
   */
  operatorActionInformation?: {
    /**
     * 項目名: 名前（漢字）点検結果
     * キー必須: N | 値必須: N
     */
    customerNameKanjiCheck1?: string;

    /**
     * 項目名: 名前（漢字）処理結果
     * キー必須: N | 値必須: N
     */
    customerNameKanjiCheck2?: string;

    /**
     * 項目名: 名前（漢字）再鑑結果
     * キー必須: N | 値必須: N
     */
    customerNameKanjiCheck3?: string;

    /**
     * 項目名: 名前（漢字）修正値
     * キー必須: N | 値必須: N
     */
    customerNameKanjiModifiedValue?: string;

    /**
     * 項目名: 名前（カナ）点検結果
     * キー必須: N | 値必須: N
     */
    customerNameKanaCheck1?: string;

    /**
     * 項目名: 名前（カナ）処理結果
     * キー必須: N | 値必須: N
     */
    customerNameKanaCheck2?: string;

    /**
     * 項目名: 名前（カナ）再鑑結果
     * キー必須: N | 値必須: N
     */
    customerNameKanaCheck3?: string;

    /**
     * 項目名: 名前（カナ）修正値
     * キー必須: N | 値必須: N
     */
    customerNameKanaModifiedValue?: string;

    /**
     * 項目名: 名前（英字）点検結果
     * キー必須: N | 値必須: N
     */
    customerNameRomaCheck1?: string;

    /**
     * 項目名: 名前（英字）処理結果
     * キー必須: N | 値必須: N
     */
    customerNameRomaCheck2?: string;

    /**
     * 項目名: 名前（英字）再鑑結果
     * キー必須: N | 値必須: N
     */
    customerNameRomaCheck3?: string;

    /**
     * 項目名: 名前（英字）修正値
     * キー必須: N | 値必須: N
     */
    customerNameRomaModifiedValue?: string;

    /**
     * 項目名: 郵便番号点検結果
     * キー必須: N | 値必須: N
     */
    postNoCheck1?: string;

    /**
     * 項目名: 郵便番号処理結果
     * キー必須: N | 値必須: N
     */
    postNoCheck2?: string;

    /**
     * 項目名: 郵便番号再鑑結果
     * キー必須: N | 値必須: N
     */
    postNoCheck3?: string;

    /**
     * 項目名: 郵便番号修正値
     * キー必須: N | 値必須: N
     */
    postNoModifiedValue?: string;

    /**
     * 項目名: 住所（漢字）自動入力修正値
     * キー必須: N | 値必須: N
     */
    addrKanjiAutoModifiedValue?: string;

    /**
     * 項目名: 住所（カナ）自動入力修正値
     * キー必須: N | 値必須: N
     */
    addrKanaAutoModifiedValue?: string;

    /**
     * 項目名: 住所（漢字）点検結果
     * キー必須: N | 値必須: N
     */
    addrKanjiCheck1?: string;

    /**
     * 項目名: 住所（漢字）処理結果
     * キー必須: N | 値必須: N
     */
    addrKanjiCheck2?: string;

    /**
     * 項目名: 住所（漢字）再鑑結果
     * キー必須: N | 値必須: N
     */
    addrKanjiCheck3?: string;

    /**
     * 項目名: 住所（漢字）修正値
     * キー必須: N | 値必須: N
     */
    addrKanjiModifiedValue?: string;

    /**
     * 項目名: 住所（カナ）点検結果
     * キー必須: N | 値必須: N
     */
    addrKanaCheck1?: string;

    /**
     * 項目名: 住所（カナ）処理結果
     * キー必須: N | 値必須: N
     */
    addrKanaCheck2?: string;

    /**
     * 項目名: 住所（カナ）再鑑結果
     * キー必須: N | 値必須: N
     */
    addrKanaCheck3?: string;

    /**
     * 項目名: 住所（カナ）修正値
     * キー必須: N | 値必須: N
     */
    addrKanaModifiedValue?: string;

    /**
     * 項目名: 住所コード修正値
     * キー必須: N | 値必須: N
     */
    jushoModifiedValue?: string;

    /**
     * 項目名: 住所郵便番号重複フラグ修正値
     * キー必須: N | 値必須: N
     */
    duplicationFlgModifiedValue?: string;

    /**
     * 項目名: 生年月日点検結果
     * キー必須: N | 値必須: N
     */
    birthdayCheck1?: string;

    /**
     * 項目名: 生年月日処理結果
     * キー必須: N | 値必須: N
     */
    birthdayCheck2?: string;

    /**
     * 項目名: 生年月日再鑑結果
     * キー必須: N | 値必須: N
     */
    birthdayCheck3?: string;

    /**
     * 項目名: 生年月日_元号修正値
     * キー必須: N | 値必須: N
     */
    birthdayGengoModifiedValue?: string;

    /**
     * 項目名: 生年月日_年修正値
     * キー必須: N | 値必須: N
     */
    birthdayYearModifiedValue?: string;

    /**
     * 項目名: 生年月日_月修正値
     * キー必須: N | 値必須: N
     */
    birthdayMonthModifiedValue?: string;

    /**
     * 項目名: 生年月日_日修正値
     * キー必須: N | 値必須: N
     */
    birthdayDayModifiedValue?: string;
  };

  /**
   * 項目名: マスキング有無
   * キー必須: N | 値必須: N
   */
  maskingFlag?: string;

  /**
   * 項目名: 取引時確認備考欄
   * キー必須: N | 値必須: N
   */
  operationNote?: string;

  /**
   * 項目名: メモ欄
   * キー必須: N | 値必須: N
   */
  memo?: string;

  /**
   * 項目名: オペレーション点検済フラグ
   * キー必須: N | 値必須: N
   */
  operationCheckDoneFlg?: string;

  /**
   * 項目名: 受付不可理由
   * キー必須: N | 値必須: N
   */
  rejectReason?: string;

  /**
   * 項目名: 顧客受付情報
   * キー必須: Y | 値必須: Y
   */
  customerInformation?: {
    /**
     * 項目名: 電話番号（自宅）
     * キー必須: N | 値必須: N
     */
    telNoHome?: string;

    /**
     * 項目名: 電話番号（携帯）
     * キー必須: N | 値必須: N
     */
    telNoCellPhone?: string;

    /**
     * 項目名: 性別
     * キー必須: N | 値必須: N
     */
    gender?: string;

    /**
     * 項目名: 人格区分
     * キー必須: N | 値必須: N
     */
    personalityType?: string;

    /**
     * 項目名: Eメールアドレス
     * キー必須: N | 値必須: N
     */
    emailAddress?: string;

    /**
     * 項目名: 本人確認書類コード（書類1）
     * キー必須: Y | 値必須: Y
     */
    idCardTypeCode1: string;

    /**
     * 項目名: 書類名（書類1）
     * キー必須: N | 値必須: N
     */
    idCardName1?: string;

    /**
     * 項目名: 本人確認書類コード（書類2）
     * キー必須: N | 値必須: N
     */
    idCardTypeCode2?: string;

    /**
     * 項目名: 書類名（書類2）
     * キー必須: N | 値必須: N
     */
    idCardName2?: string;

    /**
     * 項目名: 本人確認書類コード（書類3）
     * キー必須: N | 値必須: N
     */
    idCardTypeCode3?: string;

    /**
     * 項目名: 書類名（書類3）
     * キー必須: N | 値必須: N
     */
    idCardName3?: string;

    /**
     * 項目名: 現住所確認有無
     * キー必須: N | 値必須: N
     */
    currentAddressUmu?: string;

    /**
     * 項目名: CIF登録区分
     * キー必須: N | 値必須: N
     */
    cifRegistKbn?: string;
  };

  /**
   * 項目名: 事前照会情報
   * キー必須: N | 値必須: N
   */
  eventBeforeInfo?: {
    /**
     * 項目名: 検索方法区分
     * キー必須: N | 値必須: N
     */
    searchMethod?: string;

    /**
     * 項目名: 人格識別区分
     * キー必須: N | 値必須: N
     */
    jinkakushikibetsuKubun?: string;

    /**
     * 項目名: カナのみ検索フラグ
     * キー必須: N | 値必須: N
     */
    kanaOnlySearchFlg?: string;

    /**
     * 項目名: 英字名なし検索フラグ
     * キー必須: N | 値必須: N
     */
    engNoSearchFlg?: string;

    /**
     * 項目名: エラーメッセージ
     * キー必須: N | 値必須: N
     */
    errorMessage?: string;

    /**
     * 項目名: 被リンク新規フラグ
     * キー必須: N | 値必須: N
     */
    linkNewFlg?: string;

    /**
     * 項目名: CIF番号
     * キー必須: N | 値必須: N
     */
    cifNo?: string;

    /**
     * 項目名: サービス指定口座登録フラグ
     * キー必須: N | 値必須: N
     */
    serviceAccountLoginFlg?: string;

    /**
     * 項目名: サービス指定口座店番
     * キー必須: N | 値必須: N
     */
    serviceKouzaTenno?: string;

    /**
     * 項目名: サービス指定口座科目
     * キー必須: N | 値必須: N
     */
    serviceKouzaKamaoku?: string;

    /**
     * 項目名: サービス指定口座口座番号
     * キー必須: N | 値必須: N
     */
    serviceKouzaKouzaNo?: string;

    /**
     * 項目名: 事前照会リスト
     * キー必須: N | 値必須: N
     */
    eventBeforeList?: {
      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      storeNo?: string;

      /**
       * 項目名: 支店名
       * キー必須: N | 値必須: N
       */
      storeNameKj?: string;

      /**
       * 項目名: CIF番号
       * キー必須: N | 値必須: N
       */
      cifNo?: string;

      /**
       * 項目名: カナ氏名
       * キー必須: N | 値必須: N
       */
      nameKn?: string;

      /**
       * 項目名: 取引先名
       * キー必須: N | 値必須: N
       */
      namekj?: string;

      /**
       * 項目名: 生年月日
       * キー必須: N | 値必須: N
       */
      birthday?: string;

      /**
       * 項目名: 性別
       * キー必須: N | 値必須: N
       */
      sex?: string;

      /**
       * 項目名: 選択フラグ
       * キー必須: N | 値必須: N
       */
      selectFlg?: string;
    }[];

    /**
     * 項目名: cif情報
     * キー必須: N | 値必須: N
     */
    cifInfo?: {
      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      storeNo?: string;

      /**
       * 項目名: CIF番号
       * キー必須: N | 値必須: N
       */
      cifNo?: string;

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
      nameEj?: string;

      /**
       * 項目名: 本人確認実施状況
       * キー必須: N | 値必須: N
       */
      identityVerificationStatus?: string;

      /**
       * 項目名: CDD登録
       * キー必須: N | 値必須: N
       */
      cddRegist?: string;

      /**
       * 項目名: EDD登録
       * キー必須: N | 値必須: N
       */
      eddRegist?: string;

      /**
       * 項目名: 禁通
       * キー必須: N | 値必須: N
       */
      forbidden?: string;

      /**
       * 項目名: 人格区分
       * キー必須: N | 値必須: N
       */
      characterDiv?: string;

      /**
       * 項目名: TEL1
       * キー必須: N | 値必須: N
       */
      telNo1?: string;

      /**
       * 項目名: TEL2
       * キー必須: N | 値必須: N
       */
      telNo2?: string;

      /**
       * 項目名: TEL3
       * キー必須: N | 値必須: N
       */
      telNo3?: string;

      /**
       * 項目名: 本部移管
       * キー必須: N | 値必須: N
       */
      headOfficeTrans?: string;

      /**
       * 項目名: 取引開始日
       * キー必須: N | 値必須: N
       */
      tradeStartDate?: string;

      /**
       * 項目名: 本人確認資料
       * キー必須: N | 値必須: N
       */
      identityVerificationDoc?: string;

      /**
       * 項目名: 本人確認資料番号
       * キー必須: N | 値必須: N
       */
      identityVerificationDocNo?: string;

      /**
       * 項目名: 勤務先名
       * キー必須: N | 値必須: N
       */
      officeName?: string;

      /**
       * 項目名: 印鑑区分
       * キー必須: N | 値必須: N
       */
      sealDiv?: string;

      /**
       * 項目名: 国籍1
       * キー必須: N | 値必須: N
       */
      nationality1?: string;

      /**
       * 項目名: 国籍2
       * キー必須: N | 値必須: N
       */
      nationality2?: string;

      /**
       * 項目名: 国籍3
       * キー必須: N | 値必須: N
       */
      nationality3?: string;

      /**
       * 項目名: 海外住所(漢字)
       * キー必須: N | 値必須: N
       */
      addressKjOversea?: string;

      /**
       * 項目名: 海外住所(英字)
       * キー必須: N | 値必須: N
       */
      addressEjOversea?: string;

      /**
       * 項目名: 居住性区分
       * キー必須: N | 値必須: N
       */
      habitabilityDiv?: string;

      /**
       * 項目名: おるすばん番号
       * キー必須: N | 値必須: N
       */
      orusubanNo?: string;

      /**
       * 項目名: EDD先分類区分
       * キー必須: N | 値必須: N
       */
      eddDiv?: string;

      /**
       * 項目名: 外為取扱区分
       * キー必須: N | 値必須: N
       */
      fgnExchDiv?: string;
    };

    /**
     * 項目名: CIF口座情報リスト
     * キー必須: N | 値必須: N
     */
    cifAccountList?: {
      /**
       * 項目名: 店番
       * キー必須: N | 値必須: N
       */
      storeNo?: string;

      /**
       * 項目名: CIF番号
       * キー必須: N | 値必須: N
       */
      cifNo?: string;

      /**
       * 項目名: 科目
       * キー必須: N | 値必須: N
       */
      accountType?: string;

      /**
       * 項目名: 口座番号
       * キー必須: N | 値必須: N
       */
      accountNo?: string;

      /**
       * 項目名: 口座種類
       * キー必須: N | 値必須: N
       */
      accountKind?: string;

      /**
       * 項目名: 通知区分
       * キー必須: N | 値必須: N
       */
      notificationDiv?: string;

      /**
       * 項目名: 本部移管
       * キー必須: N | 値必須: N
       */
      headOfficeTrans?: string;

      /**
       * 項目名: 郵便戻り
       * キー必須: N | 値必須: N
       */
      mailReturn?: string;

      /**
       * 項目名: E通帳保持
       * キー必須: N | 値必須: N
       */
      bankbookEcoHold?: string;

      /**
       * 項目名: 共通印鑑票区分
       * キー必須: N | 値必須: N
       */
      comSealHold?: string;

      /**
       * 項目名: ダイレクト代表口座
       * キー必須: N | 値必須: N
       */
      directHold?: string;

      /**
       * 項目名: ダイレクト初回登録日
       * キー必須: N | 値必須: N
       */
      directRegistDate?: string;

      /**
       * 項目名: ダイレクト契約者特定コード
       * キー必須: N | 値必須: N
       */
      directKeiyakushatokuteiCode?: string;

      /**
       * 項目名: 選択フラグ
       * キー必須: N | 値必須: N
       */
      selectFlg?: string;
    }[];

    /**
     * 項目名: 異動明細照会リスト
     * キー必須: N | 値必須: N
     */
    idoumeisaiList?: {
      /**
       * 項目名: 元帳残高
       * キー必須: N | 値必須: N
       */
      balance?: string;

      /**
       * 項目名: 処理日
       * キー必須: N | 値必須: N
       */
      tradeDate?: string;

      /**
       * 項目名: 摘要
       * キー必須: N | 値必須: N
       */
      description?: string;

      /**
       * 項目名: 支払金額
       * キー必須: N | 値必須: N
       */
      payment?: string;

      /**
       * 項目名: 入金金額
       * キー必須: N | 値必須: N
       */
      deposit?: string;

      /**
       * 項目名: 処理店等
       * キー必須: N | 値必須: N
       */
      tradeStoreNo?: string;

      /**
       * 項目名: 選択フラグ
       * キー必須: N | 値必須: N
       */
      selectFlg?: string;

      /**
       * 項目名: 取引金額
       * キー必須: N | 値必須: N
       */
      tradeAmount?: string;

      /**
       * 項目名: 入払区分
       * キー必須: N | 値必須: N
       */
      paymentSummary?: string;

      /**
       * 項目名: 入払摘要
       * キー必須: N | 値必須: N
       */
      paymentDescriptionKj?: string;

      /**
       * 項目名: カナ摘要
       * キー必須: N | 値必須: N
       */
      paymentDescriptionKn?: string;

      /**
       * 項目名: 付込店
       * キー必須: N | 値必須: N
       */
      entryStore?: string;

      /**
       * 項目名: 振込依頼人
       * キー必須: N | 値必須: N
       */
      transReuester?: string;

      /**
       * 項目名: 仕向名
       * キー必須: N | 値必須: N
       */
      bankName?: string;

      /**
       * 項目名: 仕向支店名
       * キー必須: N | 値必須: N
       */
      storeName?: string;

      /**
       * 項目名: 処理店
       * キー必須: N | 値必須: N
       */
      transStore?: string;
    }[];
  };

  /**
   * 項目名: 制裁タブ情報
   * キー必須: N | 値必須: N
   */
  sanctionsTabInfo?: {
    /**
     * 項目名: 制裁対象-漢字検索フラグ
     * キー必須: N | 値必須: N
     */
    sanctionsSearchKjFlg?: string;

    /**
     * 項目名: 制裁対象-カナ検索フラグ
     * キー必須: N | 値必須: N
     */
    sanctionsSearchKnFlg?: string;

    /**
     * 項目名: 制裁対象-英字検索フラグ
     * キー必須: N | 値必須: N
     */
    sanctionsSearchEjFlg?: string;

    /**
     * 項目名: 制裁対象-件数
     * キー必須: N | 値必須: N
     */
    sanctionsSearchResult?: number;

    /**
     * 項目名: PEPs対象-漢字検索フラグ
     * キー必須: N | 値必須: N
     */
    pepsSearchKjFlg?: string;

    /**
     * 項目名: PEPs対象-カナ検索フラグ
     * キー必須: N | 値必須: N
     */
    pepsSearchKnFlg?: string;

    /**
     * 項目名: PEPs対象-英字検索フラグ
     * キー必須: N | 値必須: N
     */
    pepsSearchEjFlg?: string;

    /**
     * 項目名: PEPs対象-件数
     * キー必須: N | 値必須: N
     */
    pepsSearchResult?: number;

    /**
     * 項目名: PEPs等チェック
     * キー必須: N | 値必須: N
     */
    pepsCheck?: string;

    /**
     * 項目名: スクリーニング検索URL
     * キー必須: N | 値必須: N
     */
    screeningSearchUrl?: string;
  };

  /**
   * 項目名: CDDEDDTab情報
   * キー必須: N | 値必須: N
   */
  cddEddTabInfo?: {
    /**
     * 項目名: 取引目的
     * キー必須: N | 値必須: N
     */
    trading_Cd?: string;

    /**
     * 項目名: 通常月取引額
     * キー必須: N | 値必須: N
     */
    monthlyTradeAmountCd?: string;

    /**
     * 項目名: 職業
     * キー必須: N | 値必須: N
     */
    occupationCd?: string;

    /**
     * 項目名: 業種
     * キー必須: N | 値必須: N
     */
    business_Cd?: string;

    /**
     * 項目名: 業種その他(詳細)
     * キー必須: N | 値必須: N
     */
    businessOther?: string;

    /**
     * 項目名: 個人事業主/自営業(詳細)
     * キー必須: N | 値必須: N
     */
    businessRemarks?: string;

    /**
     * 項目名: 勤務先名（カナ）
     * キー必須: N | 値必須: N
     */
    officeNameKj?: string;

    /**
     * 項目名: 勤務先名（漢字）
     * キー必須: N | 値必須: N
     */
    officeNameKn?: string;

    /**
     * 項目名: 勤務先郵便番号
     * キー必須: N | 値必須: N
     */
    officePostalCd?: string;

    /**
     * 項目名: 勤務先住所
     * キー必須: N | 値必須: N
     */
    officeAddress?: string;

    /**
     * 項目名: 勤務先TEL
     * キー必須: N | 値必須: N
     */
    officeTel?: string;

    /**
     * 項目名: 制裁対象国
     * キー必須: N | 値必須: N
     */
    sanctionedAssetDiv?: string;

    /**
     * 項目名: 制裁対象国1コード
     * キー必須: N | 値必須: N
     */
    sanctionedCountry1Cd?: string;

    /**
     * 項目名: 制裁対象国2コード
     * キー必須: N | 値必須: N
     */
    sanctionedCountry2Cd?: string;

    /**
     * 項目名: 制裁対象国3コード
     * キー必須: N | 値必須: N
     */
    sanctionedCountry3Cd?: string;

    /**
     * 項目名: 制裁対象国1
     * キー必須: N | 値必須: N
     */
    sanctionedCountry1?: string;

    /**
     * 項目名: 制裁対象国2
     * キー必須: N | 値必須: N
     */
    sanctionedCountry2?: string;

    /**
     * 項目名: 制裁対象国3
     * キー必須: N | 値必須: N
     */
    sanctionedCountry3?: string;

    /**
     * 項目名: 取引/資産
     * キー必須: N | 値必須: N
     */
    sanctionedAssetContent?: string;

    /**
     * 項目名: 国籍1コード
     * キー必須: N | 値必須: N
     */
    nationality1Cd?: string;

    /**
     * 項目名: 国籍2コード
     * キー必須: N | 値必須: N
     */
    nationality2Cd?: string;

    /**
     * 項目名: 国籍3コード
     * キー必須: N | 値必須: N
     */
    nationality3Cd?: string;

    /**
     * 項目名: 国籍1
     * キー必須: N | 値必須: N
     */
    nationality1?: string;

    /**
     * 項目名: 国籍2
     * キー必須: N | 値必須: N
     */
    nationality2?: string;

    /**
     * 項目名: 国籍3
     * キー必須: N | 値必須: N
     */
    nationality3?: string;

    /**
     * 項目名: 在留資格
     * キー必須: N | 値必須: N
     */
    residentStatusCd?: string;

    /**
     * 項目名: 在留資格その他
     * キー必須: N | 値必須: N
     */
    residentStatusOther?: string;

    /**
     * 項目名: 許可年月日
     * キー必須: N | 値必須: N
     */
    permitDate?: string;

    /**
     * 項目名: 在留資格満了日
     * キー必須: N | 値必須: N
     */
    stayPeriod?: string;

    /**
     * 項目名: 居住国コード
     * キー必須: N | 値必須: N
     */
    residenceCountryCd?: string;

    /**
     * 項目名: 居住国
     * キー必須: N | 値必須: N
     */
    residenceCountry?: string;

    /**
     * 項目名: 入国6カ月超確認
     * キー必須: N | 値必須: N
     */
    stayStartCheckDiv?: string;

    /**
     * 項目名: 資産額
     * キー必須: N | 値必須: N
     */
    assetAmount?: string;

    /**
     * 項目名: 資産背景
     * キー必須: N | 値必須: N
     */
    assetBackground?: string;

    /**
     * 項目名: 収入額
     * キー必須: N | 値必須: N
     */
    incomeAmount?: string;

    /**
     * 項目名: 収入背景
     * キー必須: N | 値必須: N
     */
    incomeBackground?: string;

    /**
     * 項目名: 外国送金目的
     * キー必須: N | 値必須: N
     */
    purposeOfFgnRemit?: string;

    /**
     * 項目名: 送金相手国1コード
     * キー必須: N | 値必須: N
     */
    tradingCountry1Cd?: string;

    /**
     * 項目名: 送金相手国2コード
     * キー必須: N | 値必須: N
     */
    tradingCountry2Cd?: string;

    /**
     * 項目名: 送金相手国3コード
     * キー必須: N | 値必須: N
     */
    tradingCountry3Cd?: string;

    /**
     * 項目名: 送金相手国1
     * キー必須: N | 値必須: N
     */
    tradingCountry1?: string;

    /**
     * 項目名: 送金相手国2
     * キー必須: N | 値必須: N
     */
    tradingCountry2?: string;

    /**
     * 項目名: 送金相手国3
     * キー必須: N | 値必須: N
     */
    tradingCountry3?: string;

    /**
     * 項目名: 送金取引通貨種類1コード
     * キー必須: N | 値必須: N
     */
    tradingCurrency1Cd?: string;

    /**
     * 項目名: 送金取引通貨種類2コード
     * キー必須: N | 値必須: N
     */
    tradingCurrency2Cd?: string;

    /**
     * 項目名: 送金取引通貨種類3コード
     * キー必須: N | 値必須: N
     */
    tradingCurrency3Cd?: string;

    /**
     * 項目名: 送金取引通貨種類1
     * キー必須: N | 値必須: N
     */
    tradingCurrency1?: string;

    /**
     * 項目名: 送金取引通貨種類2
     * キー必須: N | 値必須: N
     */
    tradingCurrency2?: string;

    /**
     * 項目名: 送金取引通貨種類3
     * キー必須: N | 値必須: N
     */
    tradingCurrency3?: string;

    /**
     * 項目名: 高リスク職業業種区分
     * キー必須: N | 値必須: N
     */
    highRiskJob?: string;

    /**
     * 項目名: 200万円超/回の目的
     * キー必須: N | 値必須: N
     */
    purposeCashTrade?: string;

    /**
     * 項目名: 通常月1,000万円超の目的
     * キー必須: N | 値必須: N
     */
    purposeMonthlyTrade?: string;
  };

  /**
   * 項目名: リスク評価Tab情報
   * キー必須: N | 値必須: N
   */
  kycRiskcEvalutionTabInfo?: {
    /**
     * 項目名: KYC受付番号
     * キー必須: N | 値必須: N
     */
    kycRegistNo?: string;

    /**
     * 項目名: 総合評価トグル
     * キー必須: N | 値必須: N
     */
    allEval?: string;

    /**
     * 項目名: 顧客タイプ評価トグル
     * キー必須: N | 値必須: N
     */
    clientEval?: string;

    /**
     * 項目名: 国・地方評価トグル
     * キー必須: N | 値必須: N
     */
    countryEval?: string;

    /**
     * 項目名: 商品・サービス評価トグル
     * キー必須: N | 値必須: N
     */
    productEval?: string;

    /**
     * 項目名: 受入方針
     * キー必須: N | 値必須: N
     */
    acpPolicy?: string;

    /**
     * 項目名: 受入方針コメント
     * キー必須: N | 値必須: N
     */
    acpRef_comment?: string;

    /**
     * 項目名: 承認結果
     * キー必須: N | 値必須: N
     */
    appdResult?: string;

    /**
     * 項目名: 承認者コメント
     * キー必須: N | 値必須: N
     */
    authorizerComment?: string;

    /**
     * 項目名: KYC登録年月日
     * キー必須: N | 値必須: N
     */
    kycRegistDate?: string;

    /**
     * 項目名: KYC楽観排他日時
     * キー必須: N | 値必須: N
     */
    kycOptLockDate?: string;

    /**
     * 項目名: 受入方針ステータス
     * キー必須: N | 値必須: N
     */
    acpRefStatus?: string;
  };

  /**
   * 項目名: 商品選択Tab情報
   * キー必須: N | 値必須: N
   */
  syouhinSelectTabInfo?: {
    /**
     * 項目名: 口座開設希望店
     * キー必須: N | 値必須: N
     */
    storeNo?: string;

    /**
     * 項目名: 口座開設希望店名
     * キー必須: N | 値必須: N
     */
    storeName?: string;

    /**
     * 項目名: 印鑑種類区分
     * キー必須: N | 値必須: N
     */
    sealDiv?: string;

    /**
     * 項目名: 預金種類区分
     * キー必須: N | 値必須: N
     */
    accountKindDiv?: string;

    /**
     * 項目名: ダイレクト申込区分
     * キー必須: N | 値必須: N
     */
    directAplDiv?: string;

    /**
     * 項目名: ワンタイムパスワード利用申込区分
     * キー必須: N | 値必須: N
     */
    otpAplDiv?: string;

    /**
     * 項目名: 即時利用
     * キー必須: N | 値必須: N
     */
    directStpDiv?: string;

    /**
     * 項目名: 通帳タイプ
     * キー必須: N | 値必須: N
     */
    bankbookKindDiv?: string;

    /**
     * 項目名: キャッシュカード
     * キー必須: N | 値必須: N
     */
    cashcardTypeDiv?: string;

    /**
     * 項目名: キャッシュカードデザイン
     * キー必須: N | 値必須: N
     */
    cashcardDesignDiv?: string;

    /**
     * 項目名: ブランドデビットカード
     * キー必須: N | 値必須: N
     */
    debitcardBrandDiv?: string;

    /**
     * 項目名: ブランドデビットカードデザイン
     * キー必須: N | 値必須: N
     */
    debitcardDesignDiv?: string;

    /**
     * 項目名: ローマ字氏名
     * キー必須: N | 値必須: N
     */
    debitcardName?: string;

    /**
     * 項目名: 通帳受取方法
     * キー必須: N | 値必須: N
     */
    bankbookReceivediv?: string;

    /**
     * 項目名: カード固有氏名
     * キー必須: N | 値必須: N
     */
    cashcardName?: string;

    /**
     * 項目名: サービス指定変更有無
     * キー必須: N | 値必須: N
     */
    serviceDesignationChangeUmu?: string;
  };

  /**
   * 項目名: 口座開設エラーTab情報
   * キー必須: N | 値必須: N
   */
  errorTabInfo?: {
    /**
     * 項目名: 電文発行情報
     * キー必須: N | 値必須: N
     */
    telegramExceInfo?: {
      /**
       * 項目名: 登録内容
       * キー必須: N | 値必須: N
       */
      registEifName?: string;

      /**
       * 項目名: 登録結果
       * キー必須: N | 値必須: N
       */
      registEifResult?: string;

      /**
       * 項目名: SBT処理済み
       * キー必須: N | 値必須: N
       */
      registSbtFlg?: string;
    }[];
  };
}

/**
 * API ID: SH1APIOPE040。
 * 業務データ更新(口座)APIのレスポンス・ボディ。
 *
 * @author Charlie
 */

export type SH1APIOPE040ResponseBody = ApiResponseBodyBase;
