<template>
  <footer class="footer todo-footer" v-if='isShowFooter'>
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{leftCount}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-if='isShowClear' @click="clearComputed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  // mapGetters将vuex中的getters直接映射给组件作为计算属性，返回一个对象包含计算属性
  // computed: {
  //   isShowFooter () {
  //     return this.$store.getters.isShowFooter
  //   },
  //   leftCount () {
  //     return this.$store.getters.leftCount
  //   },
  //   isClear () {
  //     return this.$store.getters.isClear
  //   }
  // },
  computed: {
    ...mapGetters(['isShowFooter', 'leftCount']),
    ...mapGetters({
      'isShowClear': 'isClear'
    })
  },
  methods: {
    ...mapMutations(['clearComputed']),
    // 异步一秒后删除,组件分发(dipath)action
    clearComputed () {
      this.$store.dispatch('clearComputedAction')
    }
  }
}
</script>

<style>
</style>
