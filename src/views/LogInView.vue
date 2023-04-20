<template>
  <div class="listaMaterias">
    <v-app-bar
      app
      color="colorB"
      dark
      d-flex>
      <div class="d-flex align-center">
        <router-link to="/">
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
      <div class="d-sm-none d-flex">
        <v-btn
          x-small
          text
          to="/">
          Iniciar sesión
        </v-btn>
        <v-btn
          x-small
          text
          to="/sign-up">
          Registrarse
        </v-btn>
      </div>
      <div class="d-none d-sm-block">
        <v-btn
          text
          to="/">
          Iniciar sesión
        </v-btn>
        <v-btn
          text
          to="/sign-up">
          Registrarse
        </v-btn>
      </div>
    </v-app-bar> 

    <h1 class="colorB--text font-weight-bold my-4 mx-2"> INICIAR SESIÓN </h1> 
    <v-form @submit.prevent="login">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" class="mx-auto">

            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              class="mb-0"
              label="Correo Institucional"
              outlined
              dense
            ></v-text-field>
            
            <v-text-field
              outlined
              dense
              v-model="password"
              label="Contraseña"
              type="password"
              :rules="[required, min6]"
              >
            </v-text-field>
            <v-btn
              block
              dense
              type="login"
              class="text-none background--text mt-8"
              color="colorB"
              variant="flat">
              Iniciar sesión
            </v-btn>
            <v-alert
              v-if="showSelect"
              type="error"
              variant="outlined"
              class="mt-10">
              Usuario o contraseña incorrectos
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #384FFE;
}

.v-checkbox--outlined >>> fieldset{
  border-color: #384FFE;
}
</style>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../plugins/firebaseConfig'
import router from '@/router'

  export default {
    data () {
      return {
        dialog: false,
        email: '',
        words: '',
        password: '',
        showSelect: false,
        alert: true,
        rules: {
          required: value => !!value || 'Obligatorio',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo no válido'
          },
          words: value => {
            const pattern =  /^[a-zA-Z\s]+$/
            return pattern.test(value) || 'Sólo letras'
          },
        },
      }
    },
    
  methods: {
    required: function(value) {
      if (value) {
        return true;
      } else {
        return 'Obligatorio';
      }
    },
    min6: function(value) {
      if (value.length >= 6) {
        return true;
      } else {
        return 'Mínimo 6 caracteres';
      }
    },

    login() {
      signInWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {
        this.$emit('loggedIn')
        router.push({ path: '/home' })
      })
      .catch((error) => {
        console.log(error.message)
        this.showSelect=true
      })
    },
  },

  }
</script>