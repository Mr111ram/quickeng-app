<template>
  <div style="padding: 50px;">
    <h3>{{ value }}</h3>
    <input type="text" v-model="value" @change="save">
    <button @click="getValue">alert</button>
  </div>
</template>

<script>
export default {
  name: "AddWord",
  data(){
    return {
      value: null,
    }
  },
  methods: {
    save() {
      this.$storage.set('value', { data: this.value }, (e) => e && console.error(e));
    },
    getValue() {
      this.$storage.getAll('value', (error, data) => {
        if (error) console.error(error.message);
        else console.log(data);
      })
    }
  }
}
</script>

<style scoped>

</style>
