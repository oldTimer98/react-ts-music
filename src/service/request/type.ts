import type {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'
// 拦截器对象
interface RequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  // 响应拦截
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}
// 自定义传入的参数
export interface CreateRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors<T>
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
}
// 取消接口参数
export interface CancelRequestSource {
  [index: string]: () => void
}
