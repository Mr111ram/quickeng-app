// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.use({
    install (Vue) {
      Vue.prototype.$electron = require('electron');
    }
  })
}
