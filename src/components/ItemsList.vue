<script lang="ts">
  export default {
    name: 'ItemsList',
    data() {
      return {
        list: ['Item 1' , 'Item 2', 'Item 3'],
      }
    },
    methods: {
      itemClick: (event: Event) => {
        console.log(event)
      }
    }
  }
</script>

<template>
  <div class="green">
    Items List
  </div>

  <ul class="list">
    <li class="list__item" v-for="item of list">
      <a @click="itemClick">{{ item }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .green {
    color: green;
  }
</style>