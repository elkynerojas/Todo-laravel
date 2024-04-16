

<template>
    <v-row class="d-flex justify-center">
        <v-col cols="2">
            <v-btn @click="dialog = true">
                Nueva
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="8" >
            <v-card class="my-2" v-for="task in tasks" :key="task.id" :title="task.name" :text="task.description" variant="outlined">
                <v-card-actions>

                    <v-btn outlined v-if="!task.done">Hecho</v-btn>
                    <v-btn v-else="!task.done">Aún no termino</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      width="1200"
    >
      <v-card
        prepend-icon="mdi-update"
        title="Nueva Tarea"
      >
        <v-textarea v-model="newTask.description">

        </v-textarea>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Agregar"
            @click="addNewTask()"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { VFab } from 'vuetify/labs/VFab'
import { Head } from '@inertiajs/vue3';


export default {

    data: () => ({
      tasks: [],
      dialog:false,
      newTask: {}
    }),
    components: {
        VFab
    },
    created() {
        this.getTasks()
    },
    methods: {
        async getTasks() {
            await axios.get('/api/tasks')
            .then(response => {
                this.tasks = response.data.tasks
            })
            .catch(errors => {
                console.log(errors)
            })
        },
        async addNewTask() {
            this.newTask.name = 'Nueva Tarea'
            await axios.post('/api/tasks',this.newTask)
            .then(response => {
                this.newTask = {}
                this.getTasks()
                this.dialog = false
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
  }
</script>
