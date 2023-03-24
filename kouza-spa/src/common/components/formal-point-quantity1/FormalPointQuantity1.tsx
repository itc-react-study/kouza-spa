import React from "react";

/**
 * FormalPointQuantity1
 * @returns {JSX.Element}
 */
const FormalPointQuantity1 = (): JSX.Element => {
  return (
    <div className="customer-box">
      <div className="title">顧客情報</div>
      <div className="content-box">
        <div>
          <div className="flag-style title-box">
            <span>
              <div className="inline-block">おなまえ</div>
            </span>
            <span className="middle-span-width"></span>
            <span>点検者</span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">漢 字</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">カ ナ</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">英 字</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"> </span>
          </div>
        </div>

        <hr />

        <div>
          <div className="flag-style title-box">
            <span>
              <div className="inline-block">おところ</div>
            </span>
            <span></span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">郵便番号</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
          <div className="flag-style textarea-flex">
            <span></span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
          <div className="flag-style textarea-flex">
            <span>
              <div className="inline-block">漢 字</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
          <div className="flag-style textarea-flex">
            <span>
              <div className="inline-block">カ ナ</div>
            </span>
            <span className="middle-span-width"></span>
            <span className="inspect-btn"></span>
          </div>
        </div>

        <hr />

        <div>
          <div className="flag-style">
            <span>
              <div className="inline-block">生年月日</div>
            </span>
            <span className="middle-span-width flex-style-items-center">
              <div className="inline-block">/</div>

              <div className="inline-block">/</div>
            </span>
            <span className="inspect-btn"></span>
          </div>
        </div>

        <hr />

        <div>
          <div className="flag-style title-box">
            <span>
              <div className="inline-block">電話番号</div>
            </span>
            <span></span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">自 宅</div>
            </span>
            <span className="width-100"></span>
          </div>
          <div className="flag-style">
            <span>
              <div className="inline-block">携 帯</div>
            </span>
            <span className="width-100"></span>
          </div>
        </div>

        <div>
          <div className="flag-style sex-style">
            <span>
              <div className="inline-block">性 別</div>
            </span>
            <span></span>
            <span>
              <div className="inline-block">人格区分</div>
            </span>
            <span></span>
          </div>
          <div className="flag-style">
            <span className="long-span">
              <div className="inline-block">Eメールアドレス</div>
            </span>
            <span className="middle-span-width width-60"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormalPointQuantity1;
