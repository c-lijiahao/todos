<template>
  <div id="app">
    <section class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </section>
  </div>
</template>
<script>
// 注册局部组件（这些组件只在vue组件里面用（引入，注册））
import todoHeader from './components/todo-header'
import todoMain from './components/todo-main'
import todoFooter from './components/todo-footer'
export default {
  components: {
    // ' todo-header':todoHeader
    todoHeader,
    todoMain,
    todoFooter
  }
}
</script>

<style lang="scss">
</style>
