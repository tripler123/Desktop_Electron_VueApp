<template>
  <div class="home">
    <h3>Task Manager</h3>
    <button @click="openTaskForm">Add new Task</button>
    <hr>
    <h3>task</h3>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{task}}</li>
    </ul>
  </div>
</template>

<script>

import { ipcRenderer} from 'electron'

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
    this.$store.commit('addTask', this.task)
  },
  openTaskForm(){
    ipcRenderer.send('openTaskForm')
  }
},
}
</script>
