<template>
    <article>
        <h1>Details Todo</h1>
        <h3>{{$route.params.name}}</h3>
        <p>{{$route.params.texte}}</p>
        <div class="center marginTop">
            <router-link to="/Afficher"><a class="btn">Retour à la liste</a></router-link>
        </div>
    </article>
</template>

<script>

export default {
  name: 'DetailsTodo'
}
</script>

<style>
article .marginTop{
    margin-top: 100px;
}
</style>