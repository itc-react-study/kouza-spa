import React, { useContext } from "react";
import { MainContext } from "../../../store/store";


/**
 * TransactionsList
 *
 * @returns {JSX.Element}
 */
const TransactionsList = (): JSX.Element => {
  const { setIsMainLoading } = useContext(MainContext);

  const handleClick = () => {
    // 显示loading
    setIsMainLoading(true);

    setTimeout(() => {
      // 隐藏loading
      setIsMainLoading(false);
    }, 5000);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default TransactionsList;
