import { BASE_URL } from './env';
const API = {
  COMMON: { ...steamgame.CONFIG.COMMON_API }
};

/**
 * 根据环境不同加前缀
 */
export default (function addBaseURL(obj, prefix) {
  for (let [key, value] of Object.entries(obj)) {
    typeof value === 'string'
      ? (obj[key] = prefix + value)
      : addBaseURL(value, prefix);
  }
  return obj;
})(API, BASE_URL + '/api/v1/');
