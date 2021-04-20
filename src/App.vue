<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import VueElectronJSONStorage from 'vue-electron-json-storage';

export default {
  VueElectronJSONStorage,
  name: 'App',
}
</script>

<style lang="scss" scoped>
</style>
