<template>
  <header class="header todo-header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter="todoAdd"
      v-model="todoName"
    >
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    todoAdd () {
      if (this.todoName === '') return
      this.$store.commit('todoAdd', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style>
</style>
