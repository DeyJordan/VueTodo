<template>
    <menu>
        <img id="logoMenu" src="/src/assets/logo.png">
        <nav>
            <router-link to="/Accueil">Accueil</router-link>
            <router-link to="/Ajouter">Ajouter Todo</router-link>
            <router-link to="/Afficher">Voir les tâches</router-link>
        </nav>
    </menu>
</template>

<script>
    export default {
      name: 'MyMenu'
    }
</script>

<style>
    menu{
        background: #35495e;
        text-align: left;
        padding: 5px;
    }
    menu #logoMenu{
        height: 40px;
        line-height: 50px;
        vertical-align: middle;
        margin-left: 3%;
        margin-right: 3%;
    }
    menu nav{
        display: inline-block;
        width: 75%;
    }
    menu nav a{
        color: #fafafa;
        font-weight: bold;
        margin-left: 2%;
        margin-right: 2%;
        line-height: 50px;
    }
</style>