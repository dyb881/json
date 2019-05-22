# json

json 处理工具，js 对象和 json 字符串间转换时加上 try/catch 和 默认值

## 使用方法

例:

```
import { jsonParse, jsonStringify } from '@dyb881/auto-rem';

// jsonParse 同 JSON.parse 用法，仅仅在第二个参数插入 默认值 defaults，之后的参数则同等

JSON.parse('{"a":1}', ...args);
jsonParse('{"a":1}', {}, ...args);

// 同上

JSON.stringify({a:1}, ...args);
jsonStringify({a:1}, '{}', ...args);
```
