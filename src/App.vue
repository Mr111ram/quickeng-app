<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  async created() {
    await this.$store.dispatch('dictionary/initAppConfigs', this.$storage);
    await this.$store.dispatch('dictionary/loadDict', this.$storage);
  }
}
</script>

<style lang="scss" scoped>
</style>
