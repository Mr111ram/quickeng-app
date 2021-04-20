import Storage from 'electron-json-storage';
import { homedir } from 'os';
import { join } from 'path';

export default async ({ app, router, store, Vue }) => {
  const appdir = join(homedir(), 'QuickEng');

  Vue.use({
    install (Vue) {
      Storage.setDataPath(appdir);
      Vue.prototype.$storage = Storage;
      Vue.prototype.$storage.$appdir = appdir;
    }
  });
}
