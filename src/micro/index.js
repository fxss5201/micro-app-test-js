// 一个进度条插件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Loading } from 'element-ui'
// 当前版本 qiankun 对 insertBefore 处理有问题，这里先使用修改后的本地包
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start
} from 'qiankun'

// 子应用注册信息
import apps from './apps'
const options = { lock: true, text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)' }
let loadingInstance

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    // 加载子应用前，加载进度条
    NProgress.start()
    loadingInstance = Loading.service(options)
    console.log('before load', app.name)
    return Promise.resolve()
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    // 加载子应用前，进度条加载完成
    NProgress.done()
    loadingInstance.close()
    console.log('after mount', app.name)
    return Promise.resolve()
  }
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(() => {
  loadingInstance.close()
  console.error('子应用加载失败，请检查应用是否可运行')
  // 加载失败时提示
  // if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
  //   message.error("子应用加载失败，请检查应用是否可运行");
  // }
})

// 导出 qiankun 的启动函数
export default start
