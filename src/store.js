import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bill: { 'id': 1, 'code': 'xxx', 'bizdate': 1549805359000, 'jhlx': 'ZC', 'remark': 'gggg', 'clmxs': [{ 'id': 1, 'clxyjhid': 1, 'clzdid': null, 'dw': null, 'bwmcid': null, 'bwmc': null, 'bwmcfulldesc': null, 'jhl': 100.00000, 'jhrq': 1549805399000, 'zlyq': null, 'pp': null, 'ghdd': 'ddd', 'remark': null }, { 'id': 2, 'clxyjhid': 1, 'clzdid': null, 'dw': null, 'bwmcid': null, 'bwmc': null, 'bwmcfulldesc': null, 'jhl': 200.00000, 'jhrq': 1549805452000, 'zlyq': null, 'pp': null, 'ghdd': null, 'remark': null }] }
  },
  mutations: {

  },
  actions: {
    getBillById: function (context, id) {
      var promise = axios.get('http://localhost:8080/clxyjh/1', {})
      return promise
    }
  }
})
