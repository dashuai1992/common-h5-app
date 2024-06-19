import { useMemberStore } from '@/stores'

const baseURL = ''

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    options.timeout = 10000

    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }

    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)

uni.addInterceptor('uploadFile', httpInterceptor)

type ResData<T> = {
  code: string
  msg: string
  data: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<ResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResData<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as ResData<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请检查网络',
        })
        reject(err)
      },
    })
  })
}
