<template>
  <h2>Form Component</h2>
  <form>
    <input type="text" placeholder="Place enter text">

    <v-autocomplete
        clearable
        label="Autocomplete"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        multiple
    ></v-autocomplete>
  </form>
</template>