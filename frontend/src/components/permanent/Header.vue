<template>
    <header>
        <img id="logo" src="/src/assets/logo.png">
        <div id="banniere">
            <h1>VueTodo</h1>
            <h6>La gestion de ses Todos</h6>
        </div>
        <MyMenu></MyMenu>
    </header>
</template>

<script>
import MyMenu from '@/components/permanent/Menu'

export default {
  name: 'MyHeader',
  components: {
    MyMenu
  }
}
</script>

<style>
    header{
        text-align: center;
    }
    header #logo{
        display: inline-block;
        vertical-align: middle;
        width: 10%;
    }
    header #banniere{
        display: inline-block;
        vertical-align: middle;
    }
    header #banniere h1{
        font-size: 3em;
        margin-bottom: 0px;
    }
    header #banniere h6{
        margin-top: 0px;
    }
</style>