<template>
  <section class="main todo-main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{completed:item.flag,editing:item.id===nowId}"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.flag" @change="todoState(item.id)">
          <label @dblclick="todoEdit(item.id)">{{item.name}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input class="edit" :value="item.name" @keyup.enter="editEnter(item.id,$event)">
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  // v-model在严格模式下，vuex中的数据让vuex自己去操作
  // 计算属性，简写找vuex数据的过程
  data () {
    return {
      nowId: -1
    }
  },
  computed: {
    // list () {
    //   return this.$store.state.list
    // }
    // mapState可以将vuex中的state映射组件的计算属性
    ...mapState(['list'])
  },
  methods: {
    // mapMutations将vuex中的mutation映射成组件中的方法（不常用,局限性，整个方法只进行了mutation的提交才可以使用）
    // delTodo (id) {
    //   this.$store.commit('delTodo', id)
    // },

    // todoState (id) {
    //   // 只传id状态取反即可
    //   this.$store.commit('todoState', id)
    // },
    ...mapMutations(['delTodo', 'todoState']),
    todoEdit (id) {
      this.nowId = id
    },
    editEnter (id, e) {
      // 事件源，谁触发
      console.log(e.target.value)
      this.$store.commit('editEnter', {
        id,
        name: e.target.value
      })
      this.nowId = -1
    }
  }
}
</script>

<style>
</style>
