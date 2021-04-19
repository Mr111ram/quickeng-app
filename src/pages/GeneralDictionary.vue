<template>
  <q-page class="flex">
    <word-dictionary :dict="words"></word-dictionary>
  </q-page>
</template>

<script>
import WordDictionary from "../components/General/Dictionary.vue";
import data from "../tempdata.js";

export default {
  name: 'GeneralDictionary',
  data(){
    return {
      words: data.words
    }
  },
  components: {
    WordDictionary
  }
}
</script>
