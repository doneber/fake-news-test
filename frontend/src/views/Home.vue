<template>
  <div>
    <center>
      <p>Escribe tu twitter</p>
      <v-text-field
        prepend-icon="@"
        label="twitter"
        single-line
        style="width: 240px"
        v-model="twitter"
      ></v-text-field>
      <p class="text--disabled ">Por ej: @rialjorge , @vilmanunez o @alvarouribevel</p>
    </center>
    <br>
    <v-btn
      width="200"
      height="200"
      outlined
      fab
      x-large
      style="border: solid"
      @click="siguientePaso()"
    >
      <div class="borde animacion-vibracion" />
      <h1>go</h1>
    </v-btn>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<style>
.borde {
  border: solid 1.5px gray;
  border-radius: 50%;
  height: 200px;
  width: 200px;
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
  }),
  computed: {
    ...mapState(["datos"]),
  },
  methods: {
    ...mapActions(["obtenerDatos"]),
    ...mapMutations(["enviarTwitter"]),
    siguientePaso() {
      if (this.twitter !== "") {
        this.enviarTwitter(this.twitter);
        this.obtenerDatos();
        this.$router.push(`/test/${this.twitter}`);
      }
    },
  },
};
</script>