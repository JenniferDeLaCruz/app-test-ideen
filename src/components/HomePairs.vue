<template>
  <div class="words">
    <v-row  class="mt-12 ml-sm-16 text-sm-left">
      <v-col cols="12" sm="6" 
        v-for="(w, i) in words" 
        :key="i"
        :title="w.title"
        :text="w.text"> 
        <h3 class="colorB--text"> {{ w.title }} </h3> 
        <h3 class="colorG--text "> {{ w.text }} </h3>
      </v-col>
      
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PairsHome',
  data: () => ({
    words: [
      {
        title: 'Nombre Completo',
        text: 'Juan Escutia',
      },
      {
        title: 'Matrícula',
        text: 'A01361234',
      },
      {
        title: 'Correo Institucional',
        text: 'A01361234@tec.mx',
      },
      {
        title: 'Carrera',
        text: 'ITC',
      },
      {
        title: 'Correo Personal',
        text: 'murioporlapatria@gmail.com',
      },
    ]
  }),
}
</script>
