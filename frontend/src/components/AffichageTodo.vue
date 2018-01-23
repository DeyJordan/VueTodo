<template>
    <article>
        <h1>Afficher Todo</h1>
        <div id="affichageBlock">
            <div id="listTodoBlock"><ListTodo></ListTodo></div>
            <div id="actionTodoBlock"><ActionsTodo></ActionsTodo></div>
        </div>
    </article>
</template>

<script>
import ListTodo from '@/components/ListTodo'
import ActionsTodo from '@/components/ActionsTodo'

export default {
  name: 'AffichageTodo',
  components: {
    ListTodo,
    ActionsTodo
  }
}
</script>
    
<style>
    #affichageBlock{
        display: flex;
        justify-content: space-between;
    }
    #listTodoBlock{
        width: 69%;
    }
    #actionTodoBlock{
        width: 29%;
    }
</style>