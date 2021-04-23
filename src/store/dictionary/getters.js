import { join } from 'path';

export function getDataDir (state) {
  return state.dataDir;
}

export function getDataImageDir (state) {
  return join (
    state.dataDir,
    state.pathsModify.images
  );
}

export function getDict (state) {
  return state.dict;
}

export function getImgPath (state) {
  return state.imgPath;
}
