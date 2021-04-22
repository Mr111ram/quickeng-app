export function setDict (state, dictionary) {
  state.dict = dictionary;
}

export function addDict (state, word) {
  state.dict.push(word);
}
