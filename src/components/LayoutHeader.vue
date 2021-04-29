<template>
  <q-header elevated>
    <q-bar class="q-electron-drag">
      <q-btn dense flat round icon="menu" @click="$emit('switch-drawer')" class="q-electron-drag--exception"/>

      <div>{{ title }}</div>

      <q-space />

      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat icon="crop_square" @click="maximize" />
      <q-btn dense flat icon="close" @click="close" />
    </q-bar>
    <slot></slot>
  </q-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data(){
    return {
      title: 'quickeng'
    }
  },
  methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    close () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>
<style>

</style>
