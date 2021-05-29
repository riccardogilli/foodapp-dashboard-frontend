<template>
  <v-container>
    <h1>Dashboard</h1>
    <app-status-bar :app-status="appStatus" link="appstatus"></app-status-bar>
    <v-row>
      <v-col>
        <v-card link to="recipes">
          <v-card-title>5</v-card-title>
          <v-card-text>Recipes</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AppStatusBar from "../components/AppStatusBar";

export default {
  name: "Home",
  components: { AppStatusBar },
  computed: {
    ...mapState(["appStatus"]),
  },
  data: () => ({
    timer: null
  }),
  methods: {
    ...mapActions(["fetchAppStatus"]),
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => vm.fetchAppStatus());
  },
  created: function() {
    this.timer = setInterval(() => {
      this.fetchAppStatus();
    }, 5000);
  },
  destroyed: function() {
    clearInterval(this.timer);
  }
};
</script>

<style></style>
