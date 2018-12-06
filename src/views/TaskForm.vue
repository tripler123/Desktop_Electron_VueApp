<template>
  <div class="home">
    <form @submit.prevent="addTask">
      <input v-model="task" type="text" placeholder="add task name">
      <button type='submit'>Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
  return {
    task: null
  }
},
computed:{
  tasks(){
    return this.$store.state.tasks;
  }
},
methods: {
  addTask() {
    this.$store.dispatch('addTask', this.task)
    this.task = null;
  }
},
mounted(){
  this.$store.dispatch('getTasks')
}
}
</script>
