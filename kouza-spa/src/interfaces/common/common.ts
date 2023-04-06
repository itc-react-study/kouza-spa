export interface Menu {
  isShow: boolean;
  title: string;
  path: string;
  element?: JSX.Element;
}

export interface KouzaMessage {
  /** 表示方法(area: メッセージエリア; inline: 項目直下, popup: ポップアップ) */
  display: 'inline' | 'area' | 'popup';
  /** メッセージ内容 */
  message: string;
  /** その以外の補足情報 */
  addition?: any;
}

export interface KouzaMessages {
  [key: string]: {
    /** 表示方法(area: メッセージエリア; inline: 項目直下, popup: ポップアップ) */
    display: 'inline' | 'area' | 'popup';
    /** メッセージ内容 */
    message: string;
    /** その以外の補足情報 */
    addition?: any;
  };
}
