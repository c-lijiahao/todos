import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  list: [
    { id: 1, name: '吃饭', flag: false },
    { id: 2, name: '睡觉', flag: true },
    { id: 3, name: '打豆豆', flag: false }
  ]
}
const getters = {
  isShowFooter (state) {
    return state.list.length > 0
  },
  leftCount () {
    return state.list.filter(item => !item.flag).length
  },
  isClear () {
    return state.list.some(item => item.flag)
  }
}
const mutations = {
  delTodo (state, id) {
    state.list = state.list.filter(item => item.id !== id)
  },
  todoAdd (state, name) {
    state.list.push({
      id: +new Date(),
      name,
      flag: false
    })
  },
  todoState (state, id) {
    const todo = state.list.find(item => item.id === id)
    todo.flag = !todo.flag
  },
  editEnter (state, payload) {
    console.log(payload.name)
    const edit = state.list.find(item => item.id === payload.id)
    edit.name = payload.name
  },
  clearComputed (state) {
    state.list = state.list.filter(item => !item.flag)
  }
}
const actions = {
  // 所有actions函数的第一个参数上下文
  clearComputedAction (context) {
    setTimeout(() => {
      context.commit('clearComputed')
    }, 1000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
})
