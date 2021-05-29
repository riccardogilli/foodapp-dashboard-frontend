<template>
  <v-container>
    <h1>Recipes</h1>
    <v-data-table
      :headers="headers"
      :items="recipes"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Recipes",
  computed: {
    ...mapState(["recipes"]),
  },
  data: () => ({
    headers: [
      {
        text: "Name",
        value: "name",
      },
      {
        text: "Ingredients",
      },
      {
        text: "Steps to reproduce",
      },
      {
        text: "Actions",
      },
    ],
  }),
  methods: {
    ...mapActions(["fetchRecipes"]),
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => vm.fetchRecipes());
  },
};
</script>

<style scoped></style>
