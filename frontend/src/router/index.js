import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import AffichageTodo from '@/components/AffichageTodo'
import AjouterTodo from '@/components/AjouterTodo'
import DetailsTodo from '@/components/DetailsTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: AffichageTodo
    },
    {
      path: '/Accueil',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Afficher',
      name: 'AffichageTodo',
      component: AffichageTodo
    },
    {
      path: '/Afficher/:numPage',
      name: 'AffichageTodoByPage',
      component: AffichageTodo
    },
    {
      path: '/Ajouter',
      name: 'AjouterTodo',
      component: AjouterTodo
    },
    {
      path: '/Edit/:id/:name/:texte',
      name: 'EditTodo',
      component: AjouterTodo
    },
    {
      path: '/AfficherDetails/:name/:texte',
      name: 'AfficherDetails',
      component: DetailsTodo
    }
  ]
})
