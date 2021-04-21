<template>
  <q-page class="flex bg-grey-1">
    <word-dictionary :dict="words"></word-dictionary>
    <div class="q-pa-md q-gutter-sm" :style="{ display: banner ? 'none' : 'block' }">
      <q-banner class="bg-secondary text-white">
        Your dictionary is still empty.
        Click on the button, or go to the corresponding tab to add the
        English word to the dictionary.
        <template v-slot:action>
          <q-btn flat color="white" label="Add Word" to="/add" />
        </template>
      </q-banner>
    </div>
  </q-page>
</template>

<script>
import WordDictionary from "../components/General/Dictionary.vue";

export default {
  name: 'GeneralDictionary',
  data(){
    return {
      words: [],
      banner: true,
    }
  },
  mounted() {
    this.$storage.has('awords', (error, hasKey) => {
      if (hasKey) {
        this.$storage.get('awords', (error, { dict }) => {
          this.words = dict;
          this.banner = true;
        });
      } else {
        this.banner = false;
      }
    });
  },
  components: {
    WordDictionary
  }
}
</script>
