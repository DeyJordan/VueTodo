<template>
  <router-link :to="{name:'AffichageTodoByPage', params: {numPage: this.numPage}}" v-on:click.native="reload">
    <div class="btnPagination">
        <a>{{numPage}}</a>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BtnPagination',
  props: [
    'numPage'
  ],
  methods: {
    reload: function () {
      this.$emit('page::clic')
    }
  }
}
</script>

<style>
  .btnPagination{
    display: inline-block;
    background: #41b883;
    color:#35495e;
    border: 5px solid #35495e;
    border-radius: 5px;
    padding: 2px 5px 2px 5px;
    margin: 1%;
  }
</style>