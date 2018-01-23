<template>
    <article>
        <h1>Nouvelle Tâche</h1>
        <div id="frmNewTodo">
            <input type="hidden" name="id" v-model="id"/>
            <input type="text" name="name" placeholder="Nom de votre Todo." v-model="name"/>
            <textarea name="desc" placeholder="Description détaillée de votre tâche..." v-model="desc"></textarea>
            <button v-on:click="addTodo" class="btn">Ajouter</button>
        </div>
    </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AjouterTodo',
  data () {
    return {
      id: null,
      name: '',
      desc: ''
    }
  },
  created () {
    this.remplir()
  },
  methods: {
    remplir: function () {
      if (this.$route.params.name != null) {
        this.id = this.$route.params.id
        this.name = this.$route.params.name
        this.desc = this.$route.params.texte
      }
    },
    addTodo: function () {
      if (this.name !== '') {
        var params = new URLSearchParams()
        params.append('name', this.name)
        params.append('desc', this.desc)
        if (this.id != null) {
          axios
          .post('http://localhost:3000/edit/' + this.id, params, {withCredentials: true})
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
          console.log('edit todo')
        } else {
          axios
          .post('http://localhost:3000/add', params, {withCredentials: true})
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        }
        this.name = ''
        this.desc = ''
      }
    }
  }
}
</script>
    
<style>
#frmNewTodo {
  background: #41b883;
  border-radius: 3px;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  margin-left: 50%;
  transform: translateX(-50%);
}

#frmNewTodo input[type="text"],
#frmNewTodo textarea {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  padding: 5px;
  color: #2c3e50;
}
#frmNewTodo input[type="text"] {
  font-size: 1.5em;
}
#frmNewTodo textarea {
  font-size: 1.2em;
  height: 200px;
}
</style>