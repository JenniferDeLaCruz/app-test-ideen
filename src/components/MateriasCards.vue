<template>
  
  <div class="cards my-1 mx-4 ma-sm-12">
    
    <v-flex class="mx-auto">
      <v-card class="mt-4 mx-auto"
        max-width="700"
        v-for="(m, i) in materias" 
        :key="i"
        :materia="m.materia"
        :profesor="m.profesor"
        :salon="m.salon"
        :dias="m.dias"
        :horario="m.horario">

        <v-card-title class="colorB--text text-left font-weight-bold text-subtitle-1"> {{ m.materia }}</v-card-title>
        <v-card-subtitle class="colorG--text font-weight-bold text-subtitle-1 text-left pb-0"> {{ m.profesor }} </v-card-subtitle>
        
        <v-card-actions>
          
          <v-spacer></v-spacer>

          <v-dialog :close-on-content-click="dialog = false" v-model="dialog" max-width="600" height="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" 
                color="background" 
                class="colorB--text font-weight-bold text-body-2 text-capitalize pt-0 mt-2" 
                text
                @click="dialog = true">
                Ver Detalles
              </v-btn>
            </template>

            <v-card class="pt-sm-4 px-sm-8 pb-sm-4">
              <div class="d-sm-none">
                <v-card-title class="colorB--text font-weight-black text-body-1 justify-center pt-8 pb-6"> {{ m.materia }}</v-card-title>
                <v-card-text class="colorG--text font-weight-bold text-caption text-left pb-0"> Profesor: {{ m.profesor }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-caption text-left pt-0 pb-0"> Salón: {{ m.salon }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-caption text-left pt-0 pb-0"> Días: {{ m.dias }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-caption text-left pt-0 pb-5"> Horario: {{ m.horario }} </v-card-text>
              </div>
              <div class="d-none d-sm-block">
                <v-card-title class="colorB--text font-weight-bold text-h5 justify-center pb-6"> {{ m.materia }}</v-card-title>
                <v-card-text class="colorG--text font-weight-bold text-h6 text-left pb-0"> Profesor: {{ m.profesor }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-h6 text-left pb-0"> Salón: {{ m.salon }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-h6 text-left pb-0"> Días: {{ m.dias }} </v-card-text>
                <v-card-text class="colorG--text font-weight-bold text-h6 text-left"> Horario: {{ m.horario }} </v-card-text>
              </div>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  color="background" 
                  block
                  class="colorB--text text-body-1 font-weight-black pd-0" 
                  text
                  @click="dialog = false"> Cerrar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>

</template>

<script>
export default {
  name: 'Cards',
  data: () => ({
    dialog: false,
    materias: [
      {
        materia: 'Título de la materia',
        profesor: 'Cristiano Ronaldo',
        salon: 'La Congeladora',
        dias: 'Lunes, Miércoles & Viernes',
        horario: '7:00 - 9:00'
      },
      {
        materia: 'Título de la materia',
        profesor: 'Profesor: Cristiano Ronaldo',
        salon: 'La Congeladora',
        dias: 'Lunes, Miércoles & Viernes',
        horario: '7:00 - 9:00'
      },
      {
        materia: 'Título de la materia',
        profesor: 'Profesor: Cristiano Ronaldo',
        salon: 'La Congeladora',
        dias: 'Lunes, Miércoles & Viernes',
        horario: '7:00 - 9:00'
      },
      {
        materia: 'Título de la materia',
        profesor: 'Profesor: Cristiano Ronaldo',
        salon: 'La Congeladora',
        dias: 'Lunes, Miércoles & Viernes',
        horario: '7:00 - 9:00'
      },
      {
        materia: 'Título de la materia',
        profesor: 'Profesor: Cristiano Ronaldo',
        salon: 'La Congeladora',
        dias: 'Lunes, Miércoles & Viernes',
        horario: '7:00 - 9:00'
      },
    ]
  }),
}
</script>
