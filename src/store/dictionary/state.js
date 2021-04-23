import {join} from "path";

export default function () {
  return {
    /* Home dir */
    dataDir: null,

    /* Path modify, from configs */
    pathsModify: {
      images: '.images',
    },

    dict: [],
    showBanner: true,
    imgPath: null,
  }
}
