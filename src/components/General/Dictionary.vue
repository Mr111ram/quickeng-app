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
            <q-avatar
              text-color="dark"
              size="52px"
            >
              <img
                v-if="item.image"
                :src="item.image"
                class="bg-white"
                style="object-fit: cover;"
              />
              <div v-else>
                {{ item.word[0].toUpperCase() }}
              </div>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-grey-10 text-h5">{{ item.word | camelCase }}</q-item-label>
            <q-item-label class="text-grey-9 text-body1" lines="1">{{ item.translate }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                class="gt-xs text-red-4"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="deleteDictItemByIndex(i)"
              />
              <q-btn v-show="false" class="gt-xs" size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "GeneralDictionary",
  props: [ 'dict' ],
  filters: {
    camelCase (text) {
      return text.split(' ').map(word =>
        word[0] && word[0].toUpperCase() + word.slice(1)
      ).join(' ').trim();
    }
  },
  methods: {
    ...mapActions('dictionary', ['deleteDictItemByIndex']),
  }
}
</script>

<style>
.list_item {
  height: 64px;
}
</style>
