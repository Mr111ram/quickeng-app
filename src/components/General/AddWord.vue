<template>
  <div style="height: 280px; max-height: 80vh">
    <q-btn
      v-morph:btn:mygroup:300.resize="morphGroupModel"
      class="fixed-bottom-right q-ma-lg"
      fab
      color="primary"
      size="lg"
      icon="add"
      @click="nextMorph"
    />

    <q-card
      v-morph:word:mygroup:500.resize="morphGroupModel"
      class="fixed-bottom-right q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-right-radius: 2em"
    >
      <q-card-section class="text-h6">
        New English Word
      </q-card-section>

      <q-card-section class="text-subtitle1">
        <q-input
          filled
          color="primary"
          type="text"
          class="form__input"
          label="Enter English word"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Next" @click="nextMorph" />
      </q-card-actions>
    </q-card>

    <q-card
      v-morph:translate:mygroup:500.tween="morphGroupModel"
      class="fixed-bottom-right q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-right-radius: 2em"
    >
      <q-card-section class="text-h6">
        Finalize registration
      </q-card-section>

      <q-card-section class="q-py-xl text-center text-subtitle2">
        Thank you for registering.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" @click="nextMorph" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
const nextMorphStep = {
  btn: 'word',
  word: 'translate',
  translate: 'btn'
}

export default {
  name: "AddWord",
  data () {
    return {
      morphGroupModel: 'btn'
    }
  },

  methods: {
    nextMorph () {
      this.morphGroupModel = nextMorphStep[this.morphGroupModel]
    }
  }
}
</script>

<style scoped>

</style>
