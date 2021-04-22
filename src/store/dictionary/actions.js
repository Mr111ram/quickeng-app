// this.$storage.has('awords', (error, hasKey) => {
//   if (hasKey) {
//     this.$storage.get('awords', (error, { dict }) => {
//       this.words = dict;
//       this.banner = true;
//     });
//   } else {
//     this.banner = false;
//   }
// });

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
  $storage.then(({ dict }) => {
    context.commit('setDict', dict);
  }).catch(() => {/* Catch */});
}
