<template>
  <v-container>
    <h1>Dashboard</h1>
    <v-row>
      <v-col>
        <v-card color="success" dark link to="appstatus">
          <v-card-title>OK</v-card-title>
          <v-card-text>
            Tutti i servizi funzionano correttamente
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="error" dark link to="appstatus">
          <v-card-title>KO</v-card-title>
          <v-card-text>
            C'è qualche problema nell'applicazione
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card link to="users">
          <v-card-title>10</v-card-title>
          <v-card-text>Utenti registrati</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card link to="recipes">
          <v-card-title>5</v-card-title>
          <v-card-text>Ricette memorizzate</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
