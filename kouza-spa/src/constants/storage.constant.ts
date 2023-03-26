/**
 * ストレージ キー定数定義
 *
 * @author Charlie
 */
export const StorageConstants = {
  /** 共通情報 */
  COMMON: {
    /** 担当者ステータス */
    OPERATOR_STATUS: 'OPERATOR_STATUS',
    /** NCOと事務企画部区分  true: NCO  false: 事務企画部 */
    NCO_OR_OFFICE_PLAN_DEP_KUBUN: 'NCO_OR_OFFICE_PLAN_DEP_KUBUN',
  },
  /** メニュー */
  SH1SCROPE001: {},
  /** オペレータ状況一覧 */
  SH1SCROPE002: {},
  /** 取引一覧表示 */
  SH1SCROPE003: {},
  /** 形式点検 */
  SH1SCROPE004: {},
  /** 口座開設オペレーション */
  SH1SCROPE005: {
    /** 明細処理ステータス */
    DETAIL_STATUS: 'DETAIL_STATUS',
  },
  /** 再鑑 */
  SH1SCROPE006: {},
  /** 役席判断 */
  SH1SCROPE007: {},
  /** エラー処理未済一覧 */
  SH1SCROPE008: {},
  /** エラー明細表示 */
  SH1SCROPE009: {},
  /** 修正内容再鑑 */
  SH1SCROPE010: {},
  /** 取引一覧表示(参照用) */
  SH1SCROPE011: {},
  /** 明細表示(参照用) */
  SH1SCROPE012: {},
  /** 帳票印刷一覧 */
  SH1SCROPE013: {},
  /** MUFG一覧 */
  SH1SCROPE014: {},
  /** 業務統計データ */
  SH1SCROPE015: {},
  /** 機微情報一覧 */
  SH1SCROPE016: {},
  /** 機微情報明細 */
  SH1SCROPE017: {
    /** 入力情報．機微情報一覧画面．機微情報一覧．選択された機微情報．受付番号 */
    ACCEPTANCE_NO: 'ACCEPTANCE_NO',
    /** 入力情報．機微情報一覧画面．機微情報一覧．選択された機微情報．ステータス */
    MASKING_STATUS: 'MASKING_STATUS',
    /** 入力情報．機微情報一覧画面．機微情報一覧．選択された機微情報．明細処理区分 */
    PROCESS_KUBUN: 'PROCESS_KUBUN',
  },
  /** オペレータ一覧 */
  SH1SCROPE018: {
    /** 選択されたオペレータ情報．オペレータID */
    SELECTED_OPERATOR_ID: 'SELECTED_OPERATOR_ID',
    /** 選択したオペレータのステータス */
    SELECTED_OPERATOR_STATUS: 'SELECTED_OPERATOR_STATUS',
  },
  /** オペレータ情報表示 */
  SH1SCROPE019: {},
  /** アクセス履歴一覧 */
  SH1SCROPE020: {},
  /** 待ち状況一覧 */
  SH1SCROPE021: {
    /** 設置店番 */
    SHOP_NO_SETTED: 'SHOP_NO_SETTED',
  },
  /** タブレット一覧 */
  SH1SCROPE022: {},
  /** タブレット登録 */
  SH1SCROPE023: {
    /** タブレットID */
    TABLET_ID: 'TABLET_ID',
    /** タブレットのステータス */
    TABLET_STATUS: 'TABLET_STATUS',
    /** タブレットのステータス */
    TABLET_SPECINFO: 'TABLET_SPECINFO',
  },
  /** 事前照会タブ */
  SH1SCROPE024: {
    /** 形式点検以外画面からの業務データ明細照会(銀行口座)APIのレスポンス項目 */
    PRE_INQUIRY_TAB_OBJ: 'PRE_INQUIRY_TAB_OBJ',
    /** 被リンク新規が選択された対象 */
    LINKED_OBJ: 'LINKED_OBJ',
    /** 選択されたCIF照会結果情報を商品選択タブのサービス指定口座登録（代表口座）欄に設定の対象 */
    SELECTED_OBJ: 'SELECTED_OBJ',
    /** 顧客情報 */
    CUSTOMER_INFO_MODIFIED_VALUE_INFO: 'CUSTOMER_INFO_MODIFIED_VALUE_INFO',
    /** タブ　エラーコード */
    TAB_ERROR_CODE: 'TAB_ERROR_CODE',
    /** 商品選択Tab情報 */
    SYOUHIN_SELECT_TAB_INFO: 'SYOUHIN_SELECT_TAB_INFO',
    /** 本人確認タブ　イメージコード */
    SCAN_IMAGE_CODE: 'SCAN_IMAGE_CODE',
    /** 本人確認タブ　イメージ スタイル */
    SCAN_IMAGE_STYLE: 'SCAN_IMAGE_STYLE',
    /** 異動明細無し */
    MEI_SAI_SHOU_KAI_ERROR: 'MEI_SAI_SHOU_KAI_ERROR',
  },
  /** 制裁対象タブ */
  SH1SCROPE025: {},
  /** CDD/EDDタブ */
  SH1SCROPE026: {},
  /** リスク評価タブ */
  SH1SCROPE027: {
    /** KYCリスク評価システム登録年月日 */
    KYC_RISK_HYOUKA_SYSTEM_TOUROKU_NENGAPPI:
      'KYC_RISK_HYOUKA_SYSTEM_TOUROKU_NENGAPPI',
    /** 楽観排他日時 */
    RAKKAN_HAITA_NICHIJI: 'RAKKAN_HAITA_NICHIJI',
    /** 受入方針ステータス */
    RECODE_STATUS: 'RECODE_STATUS',
    /** コメント活性フラグ */
    DISABLED_FLAG_OBJ: 'DISABLED_FLAG_OBJ',
  },
  /** 商品選択タブ */
  SH1SCROPE028: {
    /** ローマ字氏名 */
    DEBITCARD_NAME: 'DEBITCARD_NAME',
    /** ローマ字氏名（初期値が空フラグ） */
    DEBITCARD_NAME_BLANK: 'DEBITCARD_NAME_BLANK',
  },
  /** エラータブ */
  SH1SCROPE029: {},
  /** フレーム共通 */
  SH1SCROPE030: {},
  /** 本人確認資料表示 */
  SH1SCROPE031: {},
  /** 明細ヘッダ */
  SH1SCROPE032: {},
  /** 本人確認タブ */
  SH1SCROPE033: {},
};
