import React from "react";
import ReactDOM from "react-dom/client";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PROPERTY_CONFIG } from "../../configs/property.config";
import { API_DI_CONFIG } from "../../constants/api-id.constant";
import LoadingModal from "../components/loading-modal/LoadingModal";

// 当前正在请求的数量
let requestCount = 0;

const baseURL =
  process.env.NODE_ENV === "development"
    ? PROPERTY_CONFIG.DEV_SERVER_PATH
    : PROPERTY_CONFIG.PRO_SERVER_PATH;

const Axios = axios.create({
  baseURL, // 设置请求的base url
  timeout: 20000, // 设置超时时长
});

/**
 * 显示loading
 */
const showLoading = () => {
  if (requestCount === 0) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    const loading = ReactDOM.createRoot(dom);
    loading.render(<LoadingModal />);
  }

  requestCount++;
};

/**
 * 隐藏loading
 */
const hideLoading = () => {
  requestCount--;

  if (requestCount === 0) {
    document.body.removeChild(
      document.getElementById("loading") as HTMLElement
    );
  }
};

// 请求前拦截
Axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // requestCount为0，才创建loading, 避免重复创建
    if (config.headers.isShowLoading !== false) {
      showLoading();
    }

    return config;
  },
  (err) => {
    // 判断当前请求是否设置了不显示Loading
    hideLoading();

    return Promise.reject(err);
  }
);

// 返回后拦截
Axios.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    // 判断当前请求是否设置了不显示Loading
    if (res.config.headers.isHideLoading !== false) {
      setTimeout(() => {
        hideLoading();
      }, 500);
    }

    return res;
  },
  (err) => {
    hideLoading();

    return Promise.reject(err);
  }
);

/**
 * Description placeholder
 * @async
 * @param {string} apiIds
 * @param {*} param
 * @param {?boolean} [isShowLoading]
 * @param {?boolean} [isHideLoading]
 * @returns {Promise<AxiosResponse<any, any>>}
 */
export const getApi = async (
  apiIds: string,
  param: any,
  isShowLoading?: boolean,
  isHideLoading?: boolean
): Promise<AxiosResponse<any, any>> => {
  const request = {
    url: API_DI_CONFIG[apiIds].endpoint,
    method: API_DI_CONFIG[apiIds].method,
    data: param,
    headers: {
      isShowLoading,
      isHideLoading,
    },
  };

  // 发起请求为前端异步 操作 async/await
  const response = await Axios(request);

  return response;
};
