import React from "react";
import "./HeaderInfoBox.css";

/**
 * 明細ヘッダ
 * @returns {JSX.Element}
 */
const HeaderInfoBox = (): JSX.Element => {
  return (
    <div className="header-info-box">
      <div>
        <li>
          <span className="header-info-box-title">受付日</span>
          <span>20210608</span>
        </li>
        <li>
          <span className="header-info-box-title">受付番号</span>
          <span>1608000091</span>
        </li>
        <li>
          <span className="header-info-box-title">支店号機名1</span>
          <span>新宿001</span>
        </li>
        <li>
          <span className="header-info-box-title">経過時間</span>
          <span>50分</span>
        </li>
        <li>
          <span className="header-info-box-title">ステータス</span>
          <span>山田：新宿</span>
        </li>
      </div>

      <div>
        <li>
          <span className="header-info-box-title">点検1</span>
          <span>小林：新宿</span>
        </li>
        <li>
          <span className="header-info-box-title">ｵﾍﾟﾚｰｼｮﾝ</span>
          <span>小林：新宿</span>
        </li>
        <li>
          <span className="header-info-box-title">再鑑</span>
          <span>再鑑A：新宿</span>
        </li>

        <li>
          <span className="header-info-box-title">管理者確認1</span>
          <span>管理者：新宿</span>
        </li>
      </div>
    </div>
  );
};

export default HeaderInfoBox;
