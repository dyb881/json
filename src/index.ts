/**
 * json字符串 转 js对象
 */
export const jsonParse = (text: string, defaults?: any, ...args: any[]) => {
  if (!defaults) defaults = {};
  try {
    return JSON.parse(text, ...args) || defaults;
  } catch (e) {
    return defaults;
  }
};

/**
 * js对象 转 json字符串
 */
export const jsonStringify = (data: any, defaults = '{}', ...args: any[]) => {
  try {
    return JSON.stringify(data, ...args) || defaults;
  } catch (e) {
    return defaults;
  }
};
