import Vue from 'vue'
import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'

const path = process.env.COOKIE_PATH

export default function(context) {
  let {$axios, store, app, redirect} = context

  $axios.onRequest(config => {
    // let url = 'http://yapi.demo.qunar.com/mock/11865' + config.url
    // let url = 'http://127.0.0.1:10086/mock/11' + config.url
    let url = 'http://10.50.28.1:10086/mock/11' + config.url
    // jwt 验证
    if (store.state.token) {
      // 这里注释掉了
      // config.headers.common['Authorization'] = `Bearer ${store.state.token}`
    }

    url += url.indexOf('?') > -1 ? '&' : '?'
    url += `tenantId=${store.state.tenantId}&userId=${
      store.state.userId
    }&_=${new Date().getTime()}`

    config.url = url

    return config
  })

  $axios.onError(error => {
    if (process.client) {
      // axios 数据结构
      let resp = error.response
      let data = resp.data

      Vue.$notify.error({
        title: resp.status,
        message: data.payload || data.msg
      })

      if (resp.status == 401) {
        cookieKeys.forEach(key => {
          cookie.remove(key, {path})
        })
        redirect('/login')
      }
    }
    // TODO asyncData 的错误 需要日志监控
    else console.log('error', error)
  })
}
