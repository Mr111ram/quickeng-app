<template>
  <div style="width: 100%;">
    <div style="width: 100%;">
      <q-intersection
        v-for="item in dict"
        :key="`${Math.random().toString()}${Math.random().toString()}-${item.value}`"
        class="list_item"
        transition="scale"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ item.value[0].toUpperCase() }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h5">{{ item.value }}</q-item-label>
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
}
</script>

<style>
.list_item {
  height: 64px;
}
</style>
