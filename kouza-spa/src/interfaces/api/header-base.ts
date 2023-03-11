/**
 * リクエスト・ボディ共通部
 *
 * @author Charlie
 */
export interface ApiRequestHeaderBase {
  /**
   * 取引ID。
   * "SH6-"+UUID(タイプ4)。
   */
  transactionID: string;

  /**
   * 取引通番。
   * "000000"固定。
   */
  transactionSeqNo: string;

  /**
   * トレースID。
   *  数値5桁の乱数。
   * 同一イベントで複数APIを発行する場合、同じ値を設定する。
   */
  traceID: string;

  /**
   * 経路選択情報。
   * 設定不要。
   */
  routingInfo?: string;

  /**
   * メディアタイプ。
   * "application/json"固定。
   */
  'Content-Type': string;

  /**
   * セッションID。
   * 未使用。
   */
  sessionId: string;

  /**
   * UserAgent。
   * 【店頭タブレット/スマート账号開設アプリ】
   * OS標準のUserAgentの前位置に、账号開設アプリ情報（バージョン）を結合する。  ※文字列  非暗号化
   * ●書式
   * iOS :      {1}/{3} (iOS {4}; {5}) {7}
   * Android : {2}/{3} (Android {4}; {6}) {7}
   * ●各種値
   * {1} : バンドルID = "jp..bk.openaccount.app"          ※アプリ固有値
   * {2} : パッケージ名 = "jp..bk.openaccount.app"        ※アプリ固有値
   * {3} : アプリバージョン（e.g. 2.0.0）                                  ※アプリ固有値
   * {4} : OSバージョン（e.g. 9.2.1）
   * {5} : プラットフォームコード // sysctlbyname("hw.machine")
   * {6} : モデル名 // Android.os.Build.MODEL
   * {7} : OS標準のUserAgent情報
   * 【上記以外（スマート账号開設Web/後方アプリ）】
   * 未設定（標準のUserAgentが自動設定）
   */
  UserAgent?: string;

  /**
   * Web申込。
   * true：スマート账号開設Web。
   * Web以外(スマホアプリ/タブレット/後方)の場合、未設定。
   */
  'Remote-Web'?: boolean;

  /**
   * 署名。
   * リクエストのjsonデータをhmac(sha256)方式でハッシュ化し、base64エンコードした値
   * ハッシュ化用キーは、キー発行APIで取得の、鍵A
   * ※	ハッシュ化するjson文字列は、
   * インデント用のスペースやタブ、改行は取り除き、スラッシュやマルチバイト文字のエスケープは行わないこと
   */
  'X-Signiture-Btmu'?: string;

  /**
   * チャネル情報。
   * 1:店頭タブレット
   * 2:スマート
   * 3:WEB
   * 後方の場合、未設定
   */
  'Channel-Info'?: string;
}
