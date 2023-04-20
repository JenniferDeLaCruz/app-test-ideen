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

    <h1 class="colorB--text font-weight-bold my-4 mx-2">CREA UNA CUENTA</h1> 
    <v-form @submit.prevent="signUp">
      <v-container>
        <v-row>
          
          <v-col cols="12" sm="6" class="mx-auto">
            
            <v-alert
              v-if="showSuccess"
              type="success"
              variant="outlined"
              class="my-8">
              Usuario creado con éxito
            </v-alert>

            <v-alert
              v-if="showError"
              type="error"
              variant="outlined"
              class="my-8">
              El usuario no pudo ser creado
            </v-alert>

            <v-text-field
              v-model="words"
              :rules="[rules.required, rules.words]"
              class="mb-0"
              label="Nombre Completo"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="matricula"
              :rules="[rules.required, rules.matricula]"
              class="mb-0"
              label="Matrícula"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              class="mb-0"
              label="Correo Institucional"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="emailPersonal"
              :rules="[rules.required, rules.emailPersonal]"
              class="mb-0"
              label="Correo Personal"
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
              <template v-slot:append>
                <v-icon
                  v-if="successPass"
                  color="green"
                  >{{ passRule }}</v-icon
                  >
                <v-icon
                  v-if="!successPass"
                  color="red"
                  >{{ passRule }}</v-icon
                  >
              </template>
            </v-text-field>
            <v-text-field
              outlined
              dense
              v-model="password1"
              label="Confirmar Contraseña"
              type="password"
              :rules="[required, min6, matchingPasswords ]"
              >
              <template v-slot:append>
                <v-icon
                  v-if="successPass1"
                  color="green"
                  >{{ passRule1 }}</v-icon
                >
                <v-icon
                  v-if="!successPass1"
                  color="red"
                  >{{ passRule1 }}</v-icon
                >
              </template>
            </v-text-field>

            <v-checkbox
              v-model="enabled"
              label="Acepto los términos y condiciones"
              class="shrink mx-auto"
            ></v-checkbox>
            <v-btn
              block
              :disabled="!enabled"
              dense
              type="SignUp"
              class="text-none background--text mt-8"
              color="colorB"
              variant="flat">
              Registrarse
            </v-btn>

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
import { AuthCredential, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../plugins/firebaseConfig'
import db from '@/plugins/firebaseConfig'
import { FirebaseApp } from '@firebase/app'
import { getFirestore, getDocs, setDoc, collection, addDoc } from 'firebase/firestore'
  export default {
    data () {
      return {
        dialog: false,
        email: '',
        emailPersonal: '',
        words: '',
        numbers: '',
        matricula: '',
        password: '',
        password1: '',
        successPass: false,
        alert: true,
        successPass1: false,
        enabled: false,
        showError: false,
        showSuccess: false,
        rules: {
          required: value => !!value || 'Obligatorio',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo no válido'
          },
          emailPersonal: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo no válido'
          },
          words: value => {
            const pattern =  /^[a-zA-Z\s]+$/
            return pattern.test(value) || 'Sólo letras'
          },
          numbers: value => {
            const pattern = /^[0-9]+$/
            return pattern.test(value) || 'Sólo números'
          },
          matricula: value => {
            const pattern = /^A0\d\d\d\d\d\d\d$/
            return pattern.test(value) || 'Formato A09999999'
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
    matchingPasswords: function() {
      if (this.password === this.password1) {
        return true;
      } else {
        return 'Las contraseñas no coinciden';
      }
    },

    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((credential) => {
        console.log(credential.user)
        db.collection('users').add({
            uidAuth: credential.user.uid,
            nombreCompleto: this.words,
            matricula: this.matricula,
            correoPersonal: this.emailPersonal 
        })
      })
      .catch((error) => {
        console.log(error.message)
        this.showError=true
      })
    },


    createUserInfo() {
      
    },

    created(){
      this.createUserInfo()
    }


  },

  computed: {
    passRule: function() {
      if (this.password === '') {
        // field is empty
        this.successPass = false;
        return '';
      } else if (this.min6(this.password) === true) {
        // password ok
        this.successPass = true;
        return 'mdi-check';
      } else {
        // password wrong
        this.successPass = false;
        return 'mdi-close';
      }
    },
    passRule1: function() {
      if (this.password1 === '') {
        // field is empty
        this.successPass1 = false;
        return '';
      } else if (this.min6(this.password1) === true && this.matchingPasswords() === true) {
        // password ok
        this.successPass1 = true;
        return 'mdi-check';
      } else {
        // password wrong
        this.successPass1 = false;
        return 'mdi-close';
      }
    },
  }
  }
</script>