<template>
  <v-container>
    <h1>Application status</h1>
    <app-status-bar :app-status="appStatus"></app-status-bar>
    <v-row>
      <v-col cols="3" :key="item.slug" v-for="item in appStatus.services">
        <service-card :service="item" :open-edit="openEdit"></service-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">{{ service.name }}</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="Number of pods"
                  required
                  v-model="service.desiredPods"
                  hint="Note that the change won't be immediate."
                  persistent-hint
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="blue darken-1" @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AppStatusBar from "../components/AppStatusBar";
import { mapActions, mapState } from "vuex";
import ServiceCard from "../components/ServiceCard";
export default {
  name: "AppStatus",
  components: { ServiceCard, AppStatusBar },
  data: () => ({
    dialog: false,
    service: {},
    timer: null
  }),
  computed: {
    ...mapState(["appStatus"]),
  },
  methods: {
    ...mapActions(["fetchAppStatus", "updateApp"]),
    openEdit: function (service) {
      this.dialog = true;
      this.service = service;
    },
    save: function () {
      this.updateApp(this.service);
      this.dialog = false;
    },
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => vm.fetchAppStatus());
  },
  created: function() {
    this.timer = setInterval(() => {
      this.fetchAppStatus();
    }, 2000);
  },
  destroyed: function() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped></style>
