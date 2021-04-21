<template>
  <div style="width: 100%;">
    <div style="width: 100%;">
      <q-intersection
        v-for="[i, item] in dict.entries()"
        :key="i"
        class="list_item"
        transition="scale"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="primary" text-color="white" class="shadow-3">
              <img v-if="item.image" :src="item.image" class="bg-white" style="object-fit: cover">
              <div v-else>{{ item.word[0].toUpperCase() }}</div>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h5">{{ item.word | camelCase }}</q-item-label>
            <q-item-label lines="1">{{ item.translate }}</q-item-label>
          </q-item-section>

          <q-item-section side></q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralDictionary",
  props: [ 'dict' ],
  filters: {
    camelCase (text) {
      return text.split(' ').map(word =>
        word[0] && word[0].toUpperCase() + word.slice(1)
      ).join(' ').trim();
    }
  }
}
</script>

<style>
.list_item {
  height: 64px;
}
</style>
