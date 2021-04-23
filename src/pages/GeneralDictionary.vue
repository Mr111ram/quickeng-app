<template>
  <q-page class="flex bg-grey-1">
    <word-dictionary :dict="dict"></word-dictionary>
    <div
      class="q-pa-md q-gutter-sm"
      :style="{
        'display': (!!this.dict && this.dict.length > 0)
          ? 'none'
          : 'block'
      }"
    >
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
import { mapState } from 'vuex';
import WordDictionary from "../components/General/Dictionary.vue";

export default {
  name: 'GeneralDictionary',
  computed: {
    ...mapState('dictionary', ['dict'])
  },
  components: {
    WordDictionary
  },
}
</script>
