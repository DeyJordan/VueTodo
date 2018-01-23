<template>
    <div>
        <h3>Liste des tâches</h3>
        <Todo v-for="(todo, key) in lesTodosAffiches" :id="todo.id" :nom="todo.name" :texte="todo.description" :key="key" @del::clic="delTodo"></Todo>
        <div id=pagination>
          <BtnPagination v-for="num in nbPage" :numPage="num" v-bind:key="num" @page::clic="load" ></BtnPagination>
        </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo'
import BtnPagination from '@/components/BtnPagination'
import axios from 'axios'

export default {
  name: 'ListTodo',
  components: {
    Todo,
    BtnPagination
  },
  data () {
    return {
      lesTodos: [],
      lesTodosAffiches: [],
      numPage: this.getNumPage(),
      nbTodoByPage: 5
    }
  },
  computed: {
    nbPage () {
      let nbTodos = this.lesTodos.length
      let nbPage = nbTodos / this.nbTodoByPage
      if ((nbPage - Math.trunc(nbPage)) !== 0) {
        nbPage += 1
      }
      return Math.trunc(nbPage)
    }
  },
  created () {
    this.load()
  },
  methods: {
    load: function () {
      this.getAllTodos()
      this.getNumPage()
      this.getTodosAffiches()
    },
    delTodo: function () {
      this.getAllTodos()
      this.getTodosAffiches()
    },
    getAllTodos: function () {
      axios.get('http://localhost:3000/toDoList', {withCredentials: true})
      .then((response) => {
        this.lesTodos = response.data.todolist
      })
      .catch(function (error) {
        console.error(error)
      })
    },
    getNumPage: function () {
      if (this.$route.params.numPage != null) {
        this.numPage = this.$route.params.numPage
      } else {
        this.numPage = 1
      }
    },
    getTodosAffiches: function () {
      axios.get('http://localhost:3000/toDoList/' + ((this.numPage - 1) * this.nbTodoByPage) + '/' + this.nbTodoByPage, {withCredentials: true})
      .then((response) => {
        this.lesTodosAffiches = response.data.todolist
      })
      .catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style>
#pagination{
  text-align: center;
  vertical-align: middle;
  border-top: 3px solid #35495e;
  border-bottom: 3px solid #35495e;
  margin: 5%;
}
</style>