<template>
    <div class="todoRow">
        <h6>{{nom}}</h6>
        <p>{{resume}}</p>
        <div class="todoActions">
          <router-link :to="{name:'AfficherDetails', params: {name: this.nom, texte: this.texte}}"><img class="imgFont" src='/src/assets/image/view.png'/></router-link>
          <a v-on:click="delTodo"><img class="imgFont" src='/src/assets/image/supr.png'/></a>
          <router-link :to="{name:'EditTodo', params: {id: this.id, name: this.nom, texte: this.texte}}"><img class="imgFont" src='/src/assets/image/edit.png'/></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Todo',
  props: [
    'id',
    'nom',
    'texte'
  ],
  computed: {
    resume () {
      var resume = ''
      if (typeof (this.texte) !== 'undefined') {
        resume = this.texte
        if (resume.length > 250) {
          resume = resume.substr(0, 250) + '...'
        }
      }
      return resume
    }
  },
  methods: {
    delTodo: function () {
      let confirmation = confirm('Êtes vous sur de vouloir suprimer le todo : ' + this.nom + ' ?')
      if (confirmation) {
        axios.get('http://localhost:3000/del/' + this.id, {withCredentials: true})
        .then((response) => {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        })
        this.$emit('del::clic')
      }
    }
  }
}
</script>

<style>
    .todoRow{
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        background: #41b883;
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .todoRow p{
        margin-left: 5%;
        margin-right: 5%;
    }
    .todoRow .todoActions{
      min-width: 2.3em;
      cursor: pointer;
    }
</style>