<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer />

      <!--<v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-btn>
        </template>
        <span>Utenti registrati</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-food-apple-outline</v-icon>
          </v-btn>
        </template>
        <span>Ricette</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-desktop-mac</v-icon>
          </v-btn>
        </template>
        <span>Stato dell'applicazione</span>
      </v-tooltip>!-->
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    title: "Food game Dashboard",
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        route: "/",
      },
      {
        title: "Utenti",
        icon: "mdi-account-multiple-outline",
        route: "users",
      },
      {
        title: "Ricette",
        icon: "mdi-food-apple-outline",
        route: "recipes",
      },
      {
        title: "Stato dell'applicazione",
        icon: "mdi-desktop-mac",
        route: "appstatus",
      },
    ],
  }),
};
</script>
