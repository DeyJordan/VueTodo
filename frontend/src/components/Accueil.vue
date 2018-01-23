<template>
    <article>
        <h1>Accueil</h1>
        <h3>Bienvenu !</h3>
        <p>Le projet VueToto a été réalisé dans un cadre scolaire. Il a pour but de mettre en pratique les bonnes pratiques de développement pour Vue.Js et Node.JS.</p>
        <p>Le projet se présente sous la forme d'une application de gestions de tâches (appeller Todo(s)). Il a été construit à partir des cours donnés par Pierre Cavalet et Baptiste Leulliette dans le cadre d'une licence professionnelle API-DAE.</p>
        <div class="center">
            <router-link to="/Afficher"><a class="btn">Prêt à commencer ?</a></router-link>
        </div>
    </article>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>