export function setDict (state, dictionary) {
  state.dict = dictionary;
}

export function addDict (state, word) {
  state.dict.push(word);
}

export function removeByIndex (state, index) {
  state.dict.splice(
    state.dict.findIndex(
      (_, i) => i === index
    ), 1
  );
}

export function setAppDir(state, dir) {
  state.dataDir = dir;
}

export function setImgPath(state, path) {
  state.imgPath = path;
}
