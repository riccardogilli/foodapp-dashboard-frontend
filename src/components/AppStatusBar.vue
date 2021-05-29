<template>
  <v-row>
    <v-col v-if="appStatus.status === 'ok'">
      <v-card color="success" dark :to="link">
        <v-card-title>OK</v-card-title>
        <v-card-text> It's all running smoothly </v-card-text>
      </v-card>
    </v-col>
    <v-col v-if="appStatus.status === 'ko'">
      <v-card color="error" dark :to="link">
        <v-card-title>KO</v-card-title>
        <v-card-text>
          There's something wrong with the application<br>
          {{appStatus.msg}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AppStatusBar",
  props: ["appStatus", "link"],
};
</script>

<style scoped></style>
