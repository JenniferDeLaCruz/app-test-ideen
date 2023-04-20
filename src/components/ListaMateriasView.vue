
<template>
  <div class="listaMaterias">
    <v-app-bar
      app
      color="colorB"
      dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Tec de Monterrey Logo"
            class="shrink"
            contain
            src="../assets/logoTec.png"
            transition="scale-transition"
            width="16vw"
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
    <h1 class="colorB--text font-weight-bold mt-8 mx-2"> Materias Inscritas</h1> 
    <MateriasCards></MateriasCards>
  </div>
</template>
<script>

import { auth } from '@/plugins/firebaseConfig'
import { signOut } from 'firebase/auth'

// @ is an alias to /src
import MateriasCards from '@/components/MateriasCards.vue'

export default {
  name: 'MateriasView',
  components: {
    MateriasCards
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
