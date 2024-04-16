<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-row>
          <v-col cols="8">
            <h1 class="text-h5" color="primary">
              Listado de Tareas
            </h1>
          </v-col>
          <v-col cols="2">
            <div class="text-center">
              <v-btn
                color="primary"
                @click="openCreateForm()"
                prepend-icon="mdi-plus"
              >
                <template v-slot:prepend>
                  <v-icon color="success"></v-icon>
                </template>

                Nueva Tarea
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <Dropdown align="right" width="48">
              <template #trigger>
                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
                    {{ $page.props.auth.user.name }}

                    <svg
                      class="ms-2 -me-0.5 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </template>

              <template #content>
                <DropdownLink :href="route('logout')" method="post" as="button">
                  Salir
                </DropdownLink>
              </template>
            </Dropdown>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card
          class="my-2"
          v-for="task in tasks"
          :key="task.id"
          :title="task.name"
          :text="task.description"
          variant="outlined"
        >
          <v-card-actions>
            <v-btn
              v-if="!task.done"
              color="primary"
              variant="elevated"
              icon="mdi-check"
              size="x-small"
              @click="updateTask(true, task)"
            >
            </v-btn>
            <v-btn
              v-else
              color="primary"
              variant="elevated"
              icon="mdi-alpha-x"
              size="x-small"
              @click="updateTask(true, task)"
            ></v-btn>
            <v-btn
              color="primary"
              variant="elevated"
              icon="mdi-pencil"
              size="x-small"
              @click="openEditForm(task)"
            ></v-btn>
            <v-btn
              color="primary"
              variant="elevated"
              icon="mdi-delete"
              size="x-small"
              @click="deleteTask(task)"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog" width="1200">
    <v-card
      v-show="showCreateForm"
      prepend-icon="mdi-update"
      :title="titleDialog"
      class="px-3"
    >
      <v-text-field
        hide-details="auto"
        label="Título"
        color="primary"
        class="my-3 mx-3"
        v-model="newTask.name"
      ></v-text-field>
      <v-textarea
        label="Descripción"
        color="primary"
        class="my-3 mx-3"
        v-model="newTask.description"
      >
      </v-textarea>
      <template v-slot:actions>
        <v-row class="d-flex justify-center">
          <v-col cols="4" class="d-flex justify-center">
            <v-btn
              class="ms-auto"
              text="Cancelar"
              variant="elevated"
              color="primary"
              @click="dialog = false"
            ></v-btn>
            <v-btn
              class="ms-auto"
              variant="elevated"
              color="primary"
              text="Agregar"
              @click="addNewTask()"
            ></v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card>
    <v-card
      v-show="showEditForm"
      prepend-icon="mdi-update"
      class="px-3"
      :title="titleDialog"
    >
      <v-text-field
        hide-details="auto"
        label="Título"
        class="my-3 mx-3"
        v-model="selectedTask.name"
      ></v-text-field>
      <v-textarea
        label="Descripción"
        class="my-3 mx-3"
        v-model="selectedTask.description"
      >
      </v-textarea>
      <template v-slot:actions>
        <v-row class="d-flex justify-center">
          <v-col cols="4" class="d-flex justify-center">
            <v-btn
              class="ms-auto"
              text="Cancelar"
              color="primary"
              variant="elevated"
              @click="dialog = false"
            ></v-btn>
            <v-btn
              class="ms-auto"
              text="Guardar"
              color="primary"
              variant="elevated"
              @click="updateTask(false, selectedTask)"
            ></v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { VFab } from "vuetify/labs/VFab";
import { Head } from "@inertiajs/vue3";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { Link } from "@inertiajs/vue3";
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
export default {
  data: () => ({
    tasks: [],
    dialog: false,
    showCreateForm: false,
    showEditForm: false,
    titleDialog: "",
    newTask: {},
    selectedTask: {},
  }),
  components: {
    VFab,
    Link,
    Dropdown,
    DropdownLink
  },
  created() {
    this.getTasks();
  },
  methods: {
    openCreateForm() {
      this.showCreateForm = true;
      this.showEditForm = false;
      this.dialog = true;
      this.titleDialog = "Crear una nueva tarea";
    },
    openEditForm(task) {
      this.selectedTask = task;
      this.showEditForm = true;
      this.showCreateForm = false;
      this.dialog = true;
      this.titleDialog = "Editar una tarea";
    },
    async getTasks() {
      await axios
        .get("/api/tasks")
        .then((response) => {
          this.tasks = response.data.tasks;
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    async addNewTask() {
      await axios
        .post("/api/tasks", this.newTask)
        .then((response) => {
          this.newTask = {};
          this.getTasks();
          this.dialog = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateTask(changeStatus, task) {
      this.selectedTask = task;
      this.selectedTask.done = changeStatus ? !task.done : task.done;
      await axios
        .put(`/api/tasks/${task.id}`, this.selectedTask)
        .then((response) => {
          this.dialog = false;
          this.showEditForm = false;
          this.selectedTask = {};
          this.getTasks();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteTask(task) {
      await axios
        .delete(`/api/tasks/${task.id}`)
        .then((response) => {
          this.getTasks();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
