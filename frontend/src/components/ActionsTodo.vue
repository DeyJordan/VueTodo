<template>
    <div id="actionsTodo">
        <h4>Actions</h4>
        <router-link to="/Ajouter"><a class="btn">Ajouter</a></router-link>
    </div>
</template>

<script>
export default {
  name: 'ActionsTodo'
}
</script>

<style>
    #actionsTodo{
        background: #35495e;
        box-sizing: border-box;
        padding: 10px;
        padding-top: 1px;
        padding-bottom: 20px;
        border-radius: 3px;
    }
    #actionsTodo h4{
        color: #fafafa;
    }
</style>