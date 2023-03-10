import axios from 'axios';
import { PROPERTY_CONFIG } from '../../configs/property.config';
import { API_DI_CONFIG } from '../../constants/api-id.constant';

export const getApi = async (apiIds: string, param: any) => {
  const baseURL =
    process.env.NODE_ENV === 'development'
      ? PROPERTY_CONFIG.DEV_SERVER_PATH
      : PROPERTY_CONFIG.PRO_SERVER_PATH;

  const request = {
    baseURL: baseURL,
    url: API_DI_CONFIG[apiIds].endpoint,
    method: API_DI_CONFIG[apiIds].method,
    data: param,
  };

  // 发起请求为前端异步 操作 async/await
  const response = await axios(request);

  return response;
};
