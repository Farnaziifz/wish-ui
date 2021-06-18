<template>
  <div id="app">
     <router-view class="padding" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      isGreen: false
    }
  },
  methods: {
    testFunc() {
      this.isGreen = !this.isGreen
    }
  }
}
</script>

<style>
</style>
