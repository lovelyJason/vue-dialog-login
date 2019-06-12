<template>
  <div>
    <vue-dialog :flagObj="flagObj" :type="type"></vue-dialog>
    <button @click="open">open dialog</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flagObj: {
          flag: false
      },
      type:'5'
    };
  },
  methods: {
    open: function() {
      this.flagObj.flag = !this.flagObj.flag;
    }
  }
};
</script>

<style>
</style>
