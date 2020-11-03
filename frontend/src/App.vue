<template>
  <v-app>
    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer=!drawer" class=""></v-app-bar-nav-icon>
      <v-toolbar-title>TwitTest</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="hidden-xs-only">
        <span class="mr-2">Test</span>
      </v-btn>
      <v-btn text to="/about" class="hidden-xs-only">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn icon @click="darkMode()"> <v-icon>mdi-brightness-4</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> TwitTest </v-list-item-title>
          <v-list-item-subtitle> Analiza tu twitter </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon> mdi-home </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon> mdi-information-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="overflow-y-auto" max-height="600">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="1"></v-col>
          <v-col cols="12" md="10">
            <!-- Here is the views -->
            <router-view class="text-center" />
          </v-col>
          <v-col cols="12" md="1"></v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  created() {
    const now = new Date().getHours();
    if (now > 8 && now < 19) this.$vuetify.theme.dark = false;
    else this.$vuetify.theme.dark = true;
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
