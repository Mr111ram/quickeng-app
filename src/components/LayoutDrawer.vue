<template>
  <q-scroll-area class="fit">
    <q-list padding>
      <q-item-label header> Manipulate </q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section side>
          <q-icon name="delete_outline" color="red-4" style="font-size: 2em;" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-red-4" style="font-size: 1.2em;">Deleted mode</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section side>
          <q-icon name="delete_outline" color="dark" style="font-size: 2em;" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-dark" style="font-size: 1.2em;">Deleted mode</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header> Filters </q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section side>
          <q-icon name="delete_outline" color="dark" style="font-size: 2em;" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-dark" style="font-size: 1.2em;">Deleted mode</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section side>
          <q-icon name="delete_outline" color="dark" style="font-size: 2em;" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-dark" style="font-size: 1.2em;">Deleted mode</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section side>
          <q-icon name="delete_outline" color="dark" style="font-size: 2em;" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-dark" style="font-size: 1.2em;">Deleted mode</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: "LayoutDrawer"
}
</script>

<style scoped>

</style>
