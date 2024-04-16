

<template>
    <v-row class="d-flex justify-center">
        <v-col cols="2">
            <v-btn @click="openCreateForm()">
                Nueva
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="8" >
            <v-card class="my-2" v-for="task in tasks" :key="task.id" :title="task.name" :text="task.description" variant="outlined">
                <v-card-actions>
                    <v-btn v-if="!task.done" color="primary" variant="elevated" icon="mdi-check" size="x-small" @click="updateTask(true,task)"></v-btn>
                    <v-btn v-else color="primary" variant="elevated" icon="mdi-alpha-x" size="x-small" @click="updateTask(true,task)"></v-btn>
                    <v-btn  color="primary" variant="elevated" icon="mdi-pencil" size="x-small" @click="openEditForm(task)"></v-btn>
                    <v-btn color="primary" variant="elevated" icon="mdi-delete" size="x-small"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      width="1200"
    >
      <v-card
        v-show="showCreateForm"
        prepend-icon="mdi-update"
        :title="titleDialog"
      >
        <v-text-field
            hide-details="auto"
            label="Título"
            v-model="newTask.name"
        ></v-text-field>
        <v-textarea
            label="Descripción"
            v-model="newTask.description">

        </v-textarea>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Agregar"
            @click="addNewTask()"
          ></v-btn>
        </template>
      </v-card>
      <v-card
        v-show="showEditForm"
        prepend-icon="mdi-update"
        :title="titleDialog"
      >
        <v-text-field
            hide-details="auto"
            label="Título"
            v-model="selectedTask.name"
        ></v-text-field>
        <v-textarea
            label="Descripción"
            v-model="selectedTask.description">

        </v-textarea>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Guardar"
            @click="updateTask(false, selectedTask)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { VFab } from 'vuetify/labs/VFab'
import { Head } from '@inertiajs/vue3';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {

    data: () => ({
      tasks: [],
      dialog:false,
      showCreateForm: false,
      showEditForm: false,
      titleDialog: '',
      newTask: {},
      selectedTask: {}
    }),
    components: {
        VFab
    },
    created() {
        this.getTasks()
    },
    methods: {
        openCreateForm() {
            this.showCreateForm = true
            this.showEditForm = false
            this.dialog = true
            this.titleDialog = 'Crear una nueva tarea'
        },
        openEditForm(task) {
            this.selectedTask = task
            this.showEditForm = true
            this.showCreateForm = false
            this.dialog = true
            this.titleDialog = 'Editar una tarea'
        },
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
            await axios.post('/api/tasks',this.newTask)
            .then(response => {
                this.newTask = {}
                this.getTasks()
                this.dialog = false
            })
            .catch(error => {
                console.log(error)
            })
        },
        async updateTask(changeStatus, task) {
            this.selectedTask = task

            this.selectedTask.done = changeStatus ? !task.done : task.done

            await axios.put(`/api/tasks/${task.id}`,this.selectedTask)
            .then(response => {
                this.dialog = false
                this.showEditForm = false
                this.selectedTask = {}
                this.getTasks()
            })
        }
    }
  }
</script>
