/**
 * 接口域名的管理
 */

// 接口统一使用dynamicUrl变量
const dynamicUrl = `${import.meta.env.VITE_APP_BASE_API}/test` // 接口ip

const base = {
  dynamicUrl // 接口请求地址
}

export default base
