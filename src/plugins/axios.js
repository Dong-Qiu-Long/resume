// import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://api.duyiedu.com';
axios.defaults.params = { appkey: 'qiulong_1593678868561' };

axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  console.log(1);
  return response.data;
});
export default axios;
