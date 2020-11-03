<template>
  <div>
    <v-row class="indigo darken-3">
      <v-col cols="12" sm="12" class="ma-0 pa-0">
        <v-parallax
          max-height="70vh"
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <v-btn x-large href="#start" class="indigo darken-3"> Start </v-btn>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row
      style="height: 100vh"
      class="indigo darken-3 px-10"
      align="center"
      justify="center"
      id="start"
    >
      <v-col cols="12" sm="5">
        <label for="">Titulo</label>
        <v-text-field single-line></v-text-field>
        <label for="">Noticia</label>
        <v-textarea single-line name="input-7-1" auto-grow></v-textarea>
      </v-col>
      <v-col cols="12" sm="5">
        <center>
          <template v-if="loading">
            <v-progress-circular
              :size="100"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </template>
          <template v-else>
            <v-btn
              width="100px"
              height="100px"
              outlined
              fab
              @click="siguientePaso()"
            >
              <div class="borde animacion-vibracion" />
              <h1>go</h1>
            </v-btn>
          </template>
        </center>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.borde {
  border: solid 1.5px gray;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: absolute;
}
.animacion-vibracion {
  animation: vibracion infinite;
  animation-delay: 12;
  animation-duration: 3s;
}
@keyframes vibracion {
  from {
    /* top: 0px; */
  }
  to {
    /* top: 200px; */
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    twitter: "",
    veracidad: "",
    loading: false,
  }),
  computed: {
    ...mapState(["datos"]),
  },
  methods: {
    ...mapActions(["obtenerDatos"]),
    ...mapMutations(["enviarTwitter"]),
    async siguientePaso() {
      this.loading = true;
    },
  },
};
</script>