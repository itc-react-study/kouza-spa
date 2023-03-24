import React from "react";
import "./HeaderInfoBox.css";

/**
 * ヘッダー情報
 * @returns {JSX.Element}
 */
const HeaderInfoBox = (): JSX.Element => {
  return (
    <div className="header-info-box">
      <div>
        <li>
          <span className="fw">受付日</span>
          <span>20210608</span>
        </li>
        <li>
          <span className="fw">受付番号</span>
          <span>1608000091</span>
        </li>
        <li>
          <span className="fw">支店号機名1</span>
          <span>新宿001</span>
        </li>
        <li>
          <span className="fw">経過時間</span>
          <span>50分</span>
        </li>
        <li>
          <span className="fw">ステータス</span>
          <span>山田：新宿</span>
        </li>
      </div>

      <div>
        <li>
          <span className="fw">点検1</span>
          <span>小林：新宿</span>
        </li>
        <li>
          <span className="fw">ｵﾍﾟﾚｰｼｮﾝ</span>
          <span>小林：新宿</span>
        </li>
        <li>
          <span className="fw">再鑑</span>
          <span>再鑑A：新宿</span>
        </li>

        <li>
          <span className="fw">管理者確認1</span>
          <span>管理者：新宿</span>
        </li>
      </div>
    </div>
  );
};

export default HeaderInfoBox;
