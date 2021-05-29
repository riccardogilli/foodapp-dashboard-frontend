<template>
  <v-card :color="color" dark>
    <v-card-title>{{ service.name }}</v-card-title>
    <v-card-title>
      {{ service.activePods }} / {{ service.desiredPods }} active pods
      <v-btn
        v-if="service.scalable"
        icon
        small
        class="ml-3"
        @click.stop="openEdit(service)"
      >
        <v-icon> mdi-pencil-circle </v-icon>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "ServiceCard",
  props: ["service", "openEdit"],
  computed: {
    color: function () {
      return this.service.status === "ok" ? "success" : "error";
    },
  },
};
</script>

<style scoped></style>
