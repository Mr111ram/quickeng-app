<template>
  <q-page class="flex flex-center" style="flex-direction: column">
    <form class="form">
      <h4 class="text-center text-uppercase" style="margin: 0 0 25px;">
        Add new English word
      </h4>
      <q-input
        filled
        color="primary"
        type="text"
        class="form__input"
        v-model="word"
        label="Enter English word"
      />
      <q-input
        filled
        color="primary"
        type="text"
        class="form__input"
        v-model="translate"
        label="Enter the meaning of English word"
      />
      <q-select
        filled
        color="primary"
        label="Enter multiple contextual sentences"
        use-input
        use-chips
        multiple
        hide-dropdown-icon
        input-debounce="0"
        new-value-mode="add-unique"
        v-model="sentences"
        hint="Enter contextual sentences with this English word"
      />
      <q-input
        borderless
        class="form__input"
        @input="uploadImage($event[0])"
        label="Add an image describing the meaning of the word"
        stack-label
        type="file"
      />
      <div
        v-if="processing"
        class="processing"
      >
        <q-spinner
          style="margin: auto 0;"
          color="primary"
          size="3em"
        />
      </div>
      <q-btn
        v-else
        borderless
        class="full-width"
        color="primary"
        @click="addWord"
        label="Add word"
        :disable="!btnDisable"
      />
    </form>
  </q-page>
</template>

<script>
import { join } from 'path';
import fs from 'fs';
import { mapActions } from 'vuex';

export default {
  name: "AddWord",
  data(){
    return {
      processing: false,
      word: '',
      translate: '',
      sentences: [],
      image: null,
    }
  },
  computed: {
    validWord () {
      return (
        typeof this.word === 'string' &&
        !!this.word.trim() &&
        this.word.length > 0
      );
    },
    validTranslate () {
      return (
        typeof this.translate === 'string' &&
        !!this.translate.trim() &&
        this.translate.length > 0
      );
    },
    validSentences () {
      let status = false;
      this.sentences.map(el => {
        if (status = false) return status;
        status = !!el.trim();
      })
      return status;
    },
    btnDisable (){
      return (
        this.validWord &&
        this.validTranslate &&
        this.validSentences
      );
    }
  },
  methods: {
    ...mapActions('dictionary', ['addNewWord', 'imageSave', 'dataSync']),
    async addWord(){
      this.processing = true;
      const { word, translate, image, sentences } = this;
      const aword = { word, translate, sentences };

      this.word = this.translate = this.image = null;
      this.sentences = [];

      if (image) {
        this.imageSave(image);
        aword.image = this.$store.getters['dictionary/getImgPath'];
      }

      this.addNewWord(aword);
      this.dataSync(this.$storage);

      this.processing = false;
    },
    uploadImage(image){
      this.image = image;
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    margin: 25px 0;
    min-width: 400px;
    width: 33.33%;
    &__input {
      margin: 10px 0;
    }
  }
  .processing {
    width: 100%;
    display: grid;
    margin: 25px 0;
    justify-content: center;
  }
</style>
