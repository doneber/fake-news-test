import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id_twitter: '',
    id_twitterFake: 'MrNobody',
    datos: null,
    datosFake: {
      "profile_data": {
        "name": "Eber", 
        "profile_image_url": "http://pbs.twimg.com/profile_images/1311000694434996225/3dx84Qqp_normal.jpg"
      }, 
      "response_data": {
        "categories": [
          {
            "label": "/technology and computing/programming languages", 
            "score": 0.991131
          }
        ], 
        "keywords": [
          {
            "count": 1, 
            "relevance": 0.666151, 
            "sentiment": {
              "label": "neutral", 
              "score": 0
            }, 
            "text": "RT @MichDiaz_"
          }, 
          {
            "count": 1, 
            "relevance": 0.655194, 
            "sentiment": {
              "label": "neutral", 
              "score": 0
            }, 
            "text": "@DotCSV Justo"
          }, 
          {
            "count": 1, 
            "relevance": 0.622059, 
            "sentiment": {
              "label": "neutral", 
              "score": 0
            }, 
            "text": "RT @eduardo_gpg"
          }
        ], 
        "language": "es", 
        "usage": {
          "features": 2, 
          "text_characters": 3442, 
          "text_units": 1
        }
      }, 
      "tweets_list": [
        "is true :'D\n#javascript https://t.co/MBgJGa7NVh", 
        "\u00bfQu\u00e9 es un EMBEDDING?\nJoya de video\n\n#PLN #AI #MachineLearning \n\nhttps://t.co/ViSbsZEKdy", 
        "RT @Technolatinas_: Gracias a nuestros amigos de @Skillcrush  por las becas para #TechnoLatinas \ud83d\udc9c\n\nRecuerden llenar el formulario para gana\u2026", 
        "RT @freddier: Aumentamos 10X la capacidad de servers para #PlatziConf\n\nDebimos haberlo hecho 20X.\n\nComprando servers... arrancamos en una h\u2026", 
        "RT @github: Tenemos el placer de anunciar nuestra primera conferencia en espa\u00f1ol, portug\u00faes e ingl\u00e9s el 24 y 25 de septiembre \u00a1Participa! h\u2026", 
        "Aprendiendo programaci\u00f3n funcional xD\n#js #programmer #programminghumor https://t.co/vV9Dd3NhGX", 
        "RT @christinedemar: Only in Canada \ud83c\udde8\ud83c\udde6 https://t.co/D2PrDSFxbM", 
        "@mariwrios Awesome!\nYou are my hero &lt;3", 
        "@AliciaAradilla Fabuloso!\nY el acompa\u00f1amiento del piano tambi\u00e9n con el arte, como se llama?", 
        "Get free access to Gregg Pollack's Vue 3 Composition API course, where you can learn the most powerful new feature of Vue 3. https://t.co/ZEDCoXmeZR via @vuemastery", 
        "For functional programing too\n#javascript #programming https://t.co/GQpAJYTrrk", 
        "+ slice\n\nSource: dev_fined\n#javascript https://t.co/8EsTiOErcJ", 
        "Pero mir\u00e1!\n#news https://t.co/GqbhNzFH4M", 
        "Para empezar, debemos diferenciar las diferentes tecnolog\u00edas para el desarrollo y desarrollo web\n#backend #FrontEnd #Database https://t.co/0ljqsc1GKz", 
        "@luucamay_ I'll hack all you with css \ud83d\ude0e", 
        "RT @MichDiaz_: Ya est\u00e1 lista la segunda parte del resumen y an\u00e1lisis que hice sobre el reporte del @BKCHarvard acerca de principios en #Int\u2026", 
        "RT @marines0210: Biblioteca: es una colecci\u00f3n de archivos, este lo agregas a tu c\u00f3digo.\nFramework: es un conjunto de biblioteca que tiene u\u2026", 
        "Es muy importante entender la diferencia, sobre todo en POO\n#programming https://t.co/SsIBTe8fcG", 
        "\u00bfQue es nodejs?\n#NodeJS #javascript #development https://t.co/i0WnXmru33", 
        "RT @eduardo_gpg: Les comparto una peque\u00f1a \"info\" de todos los curso de la especialidad de Python en @codigofacilito  y el orden que recomen\u2026", 
        "RT @eduardo_gpg: Amigos, desde el 12 de Junio y hasta el 14 de Junio x3 todo el contenido en @codigofacilito estar\u00e1 disponible de forma gra\u2026", 
        "@luixaviles Cookies... \nxD https://t.co/qZ4coW6E78", 
        "Las cosas como son. Python tiene una sintaxis demasiado sencilla como para llamarse c\u00f3digo :'D\n#Python #programming https://t.co/ZqANzn51Ut", 
        "#javascript https://t.co/FJI2IDp8yy", 
        "3 a\u00f1os resumidos. FULL STACK DEVELOPER\n#developer #programming https://t.co/wfraSU4Lzn", 
        "Esto si que explica como funcionan #programaci\u00f3nFuncional  #Javascript https://t.co/ExNDaYaPWz", 
        "Amor de madre\n#love #LoveMother https://t.co/cyTiCQGa2u", 
        "@DotCSV \"Incluso podria estar con este cachivache que no s\u00e9 para que sirve...\"\n\ud83d\ude05\ud83e\udd23\ud83d\udc4d", 
        "@Maza_Design It's so beautiful &lt;3 \u2764\ufe0f", 
        "@CdeCiencia Como sabes esos datos? \ud83d\ude31\ud83d\ude03", 
        "Omg https://t.co/jTv0tECLTB", 
        "@EDteamLat Y ojo que no usamos punto y coma ;", 
        "@DotCSV Justo lo que todos pensamos xD", 
        "@MiraTechno Me from Edge Chromium... :( https://t.co/OiaeAwSarN", 
        "@DotCSV Igual salen buen\u00edsimos videos. Maestro!", 
        "@MiraTechno Maybe https://t.co/0PZSNau4hc or https://t.co/VQh3KntDnc", 
        "@DotCSV \u00bfHay video?", 
        "https://t.co/DoDjqUKWjP\nFREE until april 30", 
        "Han pasado tantos a\u00f1os... https://t.co/Kqe9KzA6bB", 
        "I've completed the Real World Vue.js course on @VueMastery, the ultimate resource for #VueJS developers. #JavaScript https://t.co/14wwnUPV54", 
        "I'm sharpening my Vue skills on Vue Mastery's free weekend.  Don't miss out on these free Vue.js courses. https://t.co/9xfegbPCfc via @vuemastery"
      ]
    }
  },
  mutations: {
    llenarDatos(state, losDatosObtenidos) {
      // console.log('Recibiendo de  actions');
      state.datos = losDatosObtenidos
    },
    enviarTwitter(state, twitter) {
      state.datos = ""
      state.id_twitter = twitter;
    },
  },
  actions: {
    obtenerDatos: async function ({ commit, state }) {
      // setTimeout(function () { console.log('setTimeOut') }, 3000);
      const urlDominio = 'https://sleepy-cliffs-34919.herokuapp.com/'
      // const urlDominio = 'http://127.0.0.1:5001'
      let losDatos = null
      await Axios.get(urlDominio + `/api/` + this.state.id_twitter).then(res => { losDatos = res.data })
      commit('llenarDatos', losDatos)
    }
  },
  modules: {
  }
})
