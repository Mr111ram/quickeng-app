import { join, extname } from "path";
import fs from "fs";

export function loadDict (context, storage) {
  const $storage = new Promise((resolve, reject) => {
    storage.has('awords', (err, hasKey) => {
      if (err) console.error(err);
      if (hasKey) {
        storage.get('awords', (error, data) => {
          if (error) console.error(error);
          resolve(data);
        });
      } else reject(context);
    });
  });
  $storage.then((dict) => {
    context.commit('setDict', dict);
  }).catch(() => {/* Catch */});
}

export function initAppConfigs(context, storage){
  context.commit('setAppDir', storage.$appdir);
}

export function addNewWord (context, aword){
  context.commit('addDict', aword);
}

export function imageSave (context, { name, path, filename=Date.now() }) {
  const folder = context.getters.getDataImageDir;
  const ext = extname(name);
  const endPath = join(folder, filename+ext);
  const save = () => {
    /* Folder test, if not folder, make folder */
    fs.stat(folder, (err) => {
      if (!err) /* Okay copy file */ {
        fs.createReadStream(path)
          .pipe(fs.createWriteStream(endPath));
      } else if (err.code === 'ENOENT') /* Not folder, make and start function saveImage */ {
        fs.mkdirSync(folder);
        save();
      }
    });
  }
  save();
  context.commit('setImgPath', endPath);
}

export function dataSync (context, storage) {
  storage.set('awords', context.getters.getDict, (error) => {
    if (error) console.error(error);
  });
}

export function deleteDictItemByIndex(context, index) {
  // TODO: Add delete modal confirm
  // TODO: Delete word in local storage
  context.commit('removeByIndex', index);
}
