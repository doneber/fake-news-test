<template>
  <v-app>
    <v-app-bar elevation="1"  style="max-height:70px" class="indigo darken-3">
      <v-app-bar-nav-icon @click="drawer=!drawer" class=""></v-app-bar-nav-icon>
      <v-toolbar-title>Fake-new</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="hidden-xs-only">
        <span class="mr-2">Test</span>
      </v-btn>
      <v-btn text to="/about" class="hidden-xs-only">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="indigo darken-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Fake-new </v-list-item-title>
          <v-list-item-subtitle> Check the new </v-list-item-subtitle>
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
    <v-content>
      <router-view />
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
