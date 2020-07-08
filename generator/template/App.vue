<template>
  <div id="app">
    <transition name="main" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  height: 100%;
}
</style>