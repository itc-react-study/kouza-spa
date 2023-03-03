import axios from 'axios';
import { PROPERTY_CONFIG } from '../../assets/configs/PROPERTY_CONFIG';
import { API_DI_CONFIG } from '../../assets/constants/api-id.constant';

export const getApi = async (apiIds: string, param: any) => {
  const baseURL =
    process.env.CONFIG === 'dev'
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
