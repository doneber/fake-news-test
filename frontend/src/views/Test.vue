<template>
  <v-container>
    <v-row v-if="!datos">
      <v-col cols="12" sm="12">
        <h1 class="display-2">@{{ id_twitter.toLowerCase() }}</h1>
      </v-col>
      <v-col>
        <p>Analizing..</p>
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-else>
      <v-col cols="12" md="12">
        <v-card max-width="400" class="mx-auto" elevation="0">
          <v-card-text class="headline font-weight-bold">
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>{{
                  datos["profile_data"]["name"]
                }}</v-list-item-title>
                <v-list-item-title>
                  <v-icon left> mdi-twitter </v-icon>
                  <span>@{{ id_twitter.toLowerCase() }}</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :alt="datos['profile_data']['name']"
                  :src="datos['profile_data']['profile_image_url']"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" md="12">
        <v-card max-width="400" class="mx-auto">
          <v-card-title>Categorias</v-card-title>
          <v-card-text>
            <p
              v-for="(c, index) in datos['response_data']['categories'][0][
                'label'
              ]
                .split('/')
                .filter((e) => e)"
              :key="index + 10"
            >
              {{ c }}
            </p>
          </v-card-text>
        </v-card>
      </v-col> -->
      <!-- <v-col cols="12" md="12">
        <v-card max-width="400" class="mx-auto">
          <v-card-title>Palabras clave</v-card-title>
          <v-card-text>
            <ul>
              <p
                v-for="(kw, index) in datos['response_data']['keywords']"
                :key="index"
              >
                {{ kw["text"] }}
              </p>
            </ul>
          </v-card-text>
        </v-card>
      </v-col> -->
      <v-col cols="12" md="8">
        <div id="chart">
          <apexchart
            style="width: 100%"
            type="radar"
            :options="chartOptionsMode"
            :series="series"
          ></apexchart>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="0">
          <v-card-title> <center>Tweets analizados</center> </v-card-title>
          <v-card-text>
            <v-list subheader three-line style="height: 500px; overflow: auto">
              <template v-for="(tweet, index) in datos['tweets_list']">
                <v-list-item :key="index + '-tweet'">
                  <v-list-item-content>
                    <!-- <v-list-item-title> Tweet N° {{ index + 1 }} </v-list-item-title> -->
                    <v-list-item-subtitle>{{ tweet }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :key="index + '-divider-tweet'" />
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="12">
        <v-card elevation="0">
          <v-card-title> <center>Vocabulario</center> </v-card-title>
          <v-card-text>
            <v-list subheader three-line style="height: 500px; overflow: auto">
              <template v-for="(word, index) in datos['vocabulary']">
                <v-list-item :key="index + '-word'">
                  <v-list-item-content>
                    <!-- <v-list-item-title> word N° {{ index + 1 }} </v-list-item-title> -->
                    <v-list-item-subtitle>{{ word }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :key="index + '-divider-voc'" />
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import VueApexCharts from "vue-apexcharts";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [
      {
        name: "Grado",
        data: [70, 50, 30, 80, 40],
      },
    ],
  }),
  computed: {
    ...mapState(["datos", "id_twitter"]),
    chartOptionsMode() {
      if (this.$vuetify.theme.dark)
        return {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            radar: {
              polygons: {
                strokeColor: "#e8e8e8",
                fill: {
                  colors: ["black"],
                },
                // strokeWidth: 1
              },
            },
          },
          title: {
            text: "Personalidad",
            align: "center",
          },
          xaxis: {
            categories: [
              "sociabilidad",
              "responsabilidad",
              "apertura",
              "amabilidad",
              "neuroticismo",
            ],
          },
        };
      else
        return {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            radar: {
              polygons: {
                strokeColor: "#e8e8e8",
                fill: {
                  colors: ["white"],
                },
                // strokeWidth: 1
              },
            },
          },
          title: {
            text: "Personalidad",
            align: "center",
          },
          xaxis: {
            categories: [
              "sociabilidad",
              "responsabilidad",
              "apertura",
              "amabilidad",
              "neuroticismo",
            ],
          },
        };
    },
  },
};
</script>