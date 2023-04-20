<template>
  <div class="home">
    <v-app-bar
      app
      color="colorB"
      dark>
      <div class="d-flex align-center">
        <router-link to="/home">
          <v-img
            alt="Tec de Monterrey Logo"
            class="shrink"
            contain
            src="../assets/logoTec.png"
            transition="scale-transition"
            width="18vw"
          />
        </router-link>
        
      </div>

      <v-spacer></v-spacer>
      <div class="d-sm-none">
        <v-btn
          x-small
          text
          to="/home">
          Inicio
        </v-btn>
        <v-btn
          x-small
          text
          to="/lista-de-materias">
          Lista de materias
        </v-btn>
      </div>
      <div class="d-none d-sm-block">
        <v-btn
          text
          to="/home">
          Inicio
        </v-btn>
        <v-btn
          text
          to="/lista-de-materias">
          Lista de materias
        </v-btn>
        <v-btn type="signOut" to="/" icon class="fillClass">  <img src = "@/assets/exit.png"/> </v-btn>
      </div>
    </v-app-bar>

    <h1 class="colorB--text font-weight-bold mt-8">INFORMACIÓN DEL ALUMNO</h1> 
    <v-img
          alt="Juan Escutia"
          class="shrink rounded-circle mx-auto mt-8"
          contain
          src="../assets/juan-escutia2.jpeg"
          transition="scale-transition"
          width="200"
        />
        <HomePairs></HomePairs>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePairs from '@/components/HomePairs.vue'

export default {
  name: 'HomeView',
  components: {
    HomePairs
  },
  methods: {
    signOut(){
      signOut(auth)
      .then(()=>{
        router.push({ path: '/' })
      })
    }
  }
}
</script>
