<template>
  <v-container>
    <h1>Users</h1>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="15"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn icon @click="blockUser(item.id)" x-small>
          <v-icon> mdi-block-helper </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Users",
  computed: {
    ...mapState(["users"]),
  },
  data: () => ({
    headers: [
      {
        text: "Nickname",
        value: "nickname",
      },
      {
        text: "Actions",
        sortable: false,
        value: "actions",
      },
    ],
  }),
  methods: {
    ...mapActions(["fetchUsers"]),
    blockUser: (nickname) => {
      console.log(nickname);
    },
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => vm.fetchUsers());
  },
};
</script>

<style scoped></style>
