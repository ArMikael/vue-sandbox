<script lang="ts">
import BoardGame from "@/components/BoardGame.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ItemsList',
  components: {BoardGame},
  data(): { boardGamesList: Array<string>} {
    return {
      boardGamesList: ['Item 1' , 'Item 2', 'Item 3'],
    };
  },
  methods: {
    itemClick(event: Event) {
      console.log(event);
    },
  },
  provide() {
    return {
      boardGamesAmount: this.boardGamesList.length,
    };
  },
});
</script>

<template>
  <div class="green">
    Items List
  </div>

  <ul class="list">
    <li class="list__item" v-for="item of boardGamesList" :key="item">
      <BoardGame> </BoardGame>
      <a @click="itemClick">{{ item }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .green {
    color: green;
  }
</style>