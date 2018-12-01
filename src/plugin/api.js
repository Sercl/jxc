import api from '../api/index'

const ApiPlugin = {
  install(Vue, pluginOptions = {}) {
    Vue.prototype.$api = api
  }
}

export default ApiPlugin