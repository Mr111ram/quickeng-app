import Storage from 'electron-json-storage';
import { homedir } from 'os';
import { join } from 'path';

export default async ({ app, router, store, Vue }) => {
  // Code here has access to the Object param above, connecting
  // with other parts of your app;

  // Code here can be async (use async/await or directly return a Promise);

  // Code here gets executed by Quasar CLI at the correct time in app's lifecycle:
  //  - we have a Router instantiated,
  //  - we have the optional Vuex store instantiated,
  //  - we have the root app's component ["app" prop in Object param] Object with
  //      which Quasar will instantiate the Vue app
  //      ("new Vue(app)" -- do NOT call this by yourself),
  //  - ...
  const appdir = join(homedir(), 'QuickEng');

  Vue.use({
    install (Vue) {
      Storage.setDataPath(appdir);
      Vue.prototype.$storage = Storage;
      Vue.prototype.$storage.$appdir = appdir;
    }
  });
}
