<template>
  <q-layout view="hHh Lpr lff">
    <layout-header
      @switch-drawer="switchDrawer"
    >
      <q-tabs align="justify" inline-label v-model="activeTab">
        <q-route-tab
          name="add"
          icon="add"
          label="Add word"
          to="/add"
        />
        <q-route-tab
          name="general"
          icon="list"
          label="General"
          to="/"
        />
        <q-route-tab
          name="memory"
          icon="apps"
          label="Memory cards"
          to="/card"
        />
        <q-route-tab
          name="word"
          icon="help_outline"
          label="How are word"
          to="/how"
        />
      </q-tabs>
    </layout-header>
    <q-drawer
      show-if-above
      v-model="drawerStatus"
      side="left"
      content-class="bg-grey-3"
      behavior="desktop"
      bordered
    >
      <layout-drawer></layout-drawer>
    </q-drawer>
    <q-page-container class="q-page-container">
      <q-scroll-area class="scroll-area">
        <router-view />
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script>
import LayoutHeader from 'components/LayoutHeader.vue';
import LayoutDrawer from 'components/LayoutDrawer.vue';

export default {
  name: 'MainLayout',
  components: {
    LayoutHeader,
    LayoutDrawer
  },
  data () {
    return {
      drawerStatus: true,
      memoryDrawerStatus: true,
      activeTab: null,
    }
  },
  methods: {
    switchDrawer(){
      if (this.activeTab !== 'general') {
        this.drawerStatus = false;
      } else {
        this.drawerStatus = !this.drawerStatus;
        this.memoryDrawerStatus = this.drawerStatus;
      }
    }
  },
  /* TODO: DEBUG METHOD */
  updated: console.clear,
  /* TODO: DELETE HIM! */
  watch: {
    activeTab() {
      if (this.activeTab !== 'general') {
        this.drawerStatus = false;
      } else {
        this.drawerStatus = this.memoryDrawerStatus;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .q-page-container {
   max-width: 100vw;
   min-width: 100vw;
   max-height: 100vh;
   min-height: 100vh;
   overflow-x: hidden;
   display: flex;
   .scroll-area {
     flex-grow: 1;
   }
 }
</style>
