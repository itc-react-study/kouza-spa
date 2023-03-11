import { ApiRequestBodyBase } from './request-base';
import { ApiResponseBodyBase } from './response-base';

/**
 * API ID: SH1APIOPE032。
 * KYCリスク評価算定APIのリクエスト・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE032RequestBody extends ApiRequestBodyBase {
  /**
   * 項目名: KYC受付番号
   * キー必須: N | 値必須: N
   */
  kycUketsukeBangou?: string;

  /**
   * 項目名: KYCリスク評価システム登録年月日
   * キー必須: N | 値必須: N
   */
  kycRiskHyoukaSystemTourokuNengappi?: string;

  /**
   * 項目名: 楽観排他日時
   * キー必須: N | 値必須: N
   */
  rakkanHaitaNichiji?: string;

  /**
   * 項目名: CIF顧客属性入力項目群
   * キー必須: N | 値必須: N
   */
  cifKokyakuzokuseiNyuuryokuKoumokugun?: {
    /**
     * 項目名: 人格区分
     * キー必須: Y | 値必須: Y
     */
    jinkakuKubun: string;

    /**
     * 項目名: 生設立年月日元号区分
     * キー必須: Y | 値必須: Y
     */
    seisetsuritsunengappiGengouKubun: string;

    /**
     * 項目名: 生設立年月日文言
     * キー必須: Y | 値必須: Y
     */
    seisetsuritsunengappiMongon: string;

    /**
     * 項目名: 性別区分
     * キー必須: Y | 値必須: Y
     */
    seibetsuKubun: string;

    /**
     * 項目名: 国コード
     * キー必須: Y | 値必須: Y
     */
    kuniCode: string;

    /**
     * 項目名: 電話番号（携帯）
     * キー必須: Y | 値必須: Y
     */
    mobile: string;

    /**
     * 項目名: 電話番号（自宅）
     * キー必須: N | 値必須: N
     */
    tel?: string;

    /**
     * 項目名: 漢字取引先名
     * キー必須: N | 値必須: N
     */
    kanjiTorihikisakiMei?: string;

    /**
     * 項目名: カナ取引先名
     * キー必須: Y | 値必須: Y
     */
    kanaTorihikisakiMei: string;

    /**
     * 項目名: 英字取引先名
     * キー必須: N | 値必須: N
     */
    eijiTorihikisakiMei?: string;

    /**
     * 項目名: 漢字補足住所
     * キー必須: Y | 値必須: Y
     */
    kanjiHosokuJuusho: string;

    /**
     * 項目名: 漢字住所表記文言
     * キー必須: Y | 値必須: Y
     */
    kanjiJuushoHyoukiMongon: string;

    /**
     * 項目名: 郵便番号
     * キー必須: N | 値必須: N
     */
    yuubinBangou?: string;
  };

  /**
   * 項目名: CDD情報入力内容
   * キー必須: N | 値必須: N
   */
  cddJouhouNyuuryokuNaiyou?: {
    /**
     * 項目名: 取引目的コード
     * キー必須: N | 値必須: N
     */
    torihikiMokutekiCode?: string;

    /**
     * 項目名: 第２取引目的コード
     * キー必須: N | 値必須: N
     */
    dai2TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第３取引目的コード
     * キー必須: N | 値必須: N
     */
    dai3TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第４取引目的コード
     * キー必須: N | 値必須: N
     */
    dai4TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第５取引目的コード
     * キー必須: N | 値必須: N
     */
    dai5TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第６取引目的コード
     * キー必須: N | 値必須: N
     */
    dai6TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第７取引目的コード
     * キー必須: N | 値必須: N
     */
    dai7TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第８取引目的コード
     * キー必須: N | 値必須: N
     */
    dai8TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第９取引目的コード
     * キー必須: N | 値必須: N
     */
    dai9TorihikiMokutekiCode?: string;

    /**
     * 項目名: 第１０取引目的コード
     * キー必須: N | 値必須: N
     */
    dai10TorihikiMokutekiCode?: string;

    /**
     * 項目名: 取引目的備考文言
     * キー必須: N | 値必須: N
     */
    torihikiMokutekiBikouMongon?: string;

    /**
     * 項目名: 職業
     * キー必須: Y | 値必須: Y
     */
    shokugyouCode: string;

    /**
     * 項目名: 業種
     * キー必須: N | 値必須: N
     */
    kinmusakiGyoushuCode?: string;

    /**
     * 項目名: 業種その他（詳細）
     * キー必須: N | 値必須: N
     */
    shokugyouShousaiMongon?: string;

    /**
     * 項目名: 個人事業内容詳細文言
     * キー必須: N | 値必須: N
     */
    kojinjigyouNaiyouShousaiMongon?: string;

    /**
     * 項目名: 漢字勤務先名
     * キー必須: N | 値必須: N
     */
    kanjiKinmusakiMei?: string;

    /**
     * 項目名: カナ勤務先名
     * キー必須: N | 値必須: N
     */
    kanaKinmusakiMei?: string;

    /**
     * 項目名: 勤務先郵便番号
     * キー必須: N | 値必須: N
     */
    kinmusakiYuubinBangou?: string;

    /**
     * 項目名: 勤務先住所表記文言
     * キー必須: N | 値必須: N
     */
    kinmusakiJuushoHyoukiMongon?: string;

    /**
     * 項目名: 勤務先電話番号
     * キー必須: N | 値必須: N
     */
    kinmusakiDenwaBangou?: string;

    /**
     * 項目名: 高リスク職業業種区分
     * キー必須: N | 値必須: N
     */
    kouRiskShokugyouGyoushuKubun?: string;

    /**
     * 項目名: 国籍１コード
     * キー必須: Y | 値必須: Y
     */
    kokuseki1Code: string;

    /**
     * 項目名: 国籍２コード
     * キー必須: N | 値必須: N
     */
    kokuseki2Code?: string;

    /**
     * 項目名: 国籍３コード
     * キー必須: N | 値必須: N
     */
    kokuseki3Code?: string;

    /**
     * 項目名: 在留資格コード
     * キー必須: N | 値必須: N
     */
    zairyuuShikakuCode?: string;

    /**
     * 項目名: 在留資格その他
     * キー必須: N | 値必須: N
     */
    residentStatusOther?: string;

    /**
     * 項目名: 在留期間満了年月日文言
     * キー必須: N | 値必須: N
     */
    zairyuukikanManryounengappiMongon?: string;

    /**
     * 項目名: 入国年月日文言
     * キー必須: N | 値必須: N
     */
    nyuukokunengappiMongon?: string;

    /**
     * 項目名: 制裁国取引資産有無区分
     * キー必須: Y | 値必須: Y
     */
    seisaikokuTorihikiShisanUmuKubun: string;

    /**
     * 項目名: 制裁国取引資産内容文言
     * キー必須: N | 値必須: N
     */
    seisaikokuTorihikiShisanNaiyouMongon?: string;

    /**
     * 項目名: 取引制裁国１コード
     * キー必須: N | 値必須: N
     */
    torihikiaruSeisaikoku1Code?: string;

    /**
     * 項目名: 取引制裁国２コード
     * キー必須: N | 値必須: N
     */
    torihikiaruSeisaikoku2Code?: string;

    /**
     * 項目名: 取引制裁国３コード
     * キー必須: N | 値必須: N
     */
    torihikiaruSeisaikoku3Code?: string;

    /**
     * 項目名: PEP区分
     * キー必須: N | 値必須: N
     */
    pepKubun?: string;

    /**
     * 項目名: 通常月取引額
     * キー必須: Y | 値必須: Y
     */
    tsuujouGesshuuTorihikiGaku: string;

    /**
     * 項目名: 送金貿易取引目的文言
     * キー必須: N | 値必須: N
     */
    soukinBouekiTorihikimokutekiMongon?: string;

    /**
     * 項目名: 送金貿易取引相手国１コード
     * キー必須: N | 値必須: N
     */
    soukinBouekiTorihikiaitekoku1Code?: string;

    /**
     * 項目名: 送金貿易取引相手国２コード
     * キー必須: N | 値必須: N
     */
    soukinBouekiTorihikiaitekoku2Code?: string;

    /**
     * 項目名: 送金貿易取引相手国３コード
     * キー必須: N | 値必須: N
     */
    soukinBouekiTorihikiaitekoku3Code?: string;

    /**
     * 項目名: 取扱通貨種類１コード
     * キー必須: N | 値必須: N
     */
    toriatsukaiTsukaShurui1Code?: string;

    /**
     * 項目名: 取扱通貨種類２コード
     * キー必須: N | 値必須: N
     */
    toriatsukaiTsukaShurui2Code?: string;

    /**
     * 項目名: 取扱通貨種類３コード
     * キー必須: N | 値必須: N
     */
    toriatsukaiTsukaShurui3Code?: string;

    /**
     * 項目名: 200万円超/回目的
     * キー必須: N | 値必須: N
     */
    onceMokuteki?: string;

    /**
     * 項目名: 通常月1,000万円目的
     * キー必須: N | 値必須: N
     */
    monthlyMokuteki?: string;
  };

  /**
   * 項目名: EDD情報入力内容
   * キー必須: N | 値必須: N
   */
  eddJouhouNyuuryokuNaiyou?: {
    /**
     * 項目名: 資産額
     * キー必須: N | 値必須: N
     */
    shisanGaku?: string;

    /**
     * 項目名: 資産額備考文言
     * キー必須: N | 値必須: N
     */
    shisangakuBikouMongon?: string;

    /**
     * 項目名: 収入額
     * キー必須: N | 値必須: N
     */
    shuunyuuGaku?: string;

    /**
     * 項目名: 収入額備考文言
     * キー必須: N | 値必須: N
     */
    shuunyuugakuBikouMongon?: string;
  };
}

/**
 * API ID: SH1APIOPE032。
 * KYCリスク評価算定APIのレスポンス・ボディ。
 *
 * @author Charlie
 */
export interface SH1APIOPE032ResponseBody extends ApiResponseBodyBase {
  data: {
    /**
     * 項目名: KYC受付番号
     * キー必須: N | 値必須: N
     */
    kycUketsukeBangou?: string;

    /**
     * 項目名: KYCリスク評価システム登録年月日
     * キー必須: N | 値必須: N
     */
    kycRiskHyoukaSystemTourokuNengappi?: string;

    /**
     * 項目名: 楽観排他日時
     * キー必須: N | 値必須: N
     */
    rakkanHaitaNichiji?: string;

    /**
     * 項目名: 顧客タイプ評価
     * キー必須: N | 値必須: N
     */
    kokyakuTypeHyouka?: string;

    /**
     * 項目名: 国・地方評価
     * キー必須: N | 値必須: N
     */
    kuniChihouHyouka?: string;

    /**
     * 項目名: 商品・サービス評価
     * キー必須: N | 値必須: N
     */
    shouhinServiceHyouka?: string;

    /**
     * 項目名: 総合評価
     * キー必須: N | 値必須: N
     */
    sougouHyouka?: string;
  };
}
