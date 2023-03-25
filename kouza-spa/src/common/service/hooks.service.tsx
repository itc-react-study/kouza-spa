import { useContext, useEffect } from "react";
import { MainContext } from "../../store/store";

/**
 * Description placeholder
 */
export const useSetAreaErrorMessageEffect = () => {
  const { setAreaErrorMessage } = useContext(MainContext);

  useEffect(() => {
    // 执行你的副作用逻辑

    // 组件卸载时清除副作用
    return () => {
      // 执行你的清理逻辑
      setAreaErrorMessage("");
    };
  }, []);
};
