<template>
  <div id="app">
    <MyHeader></MyHeader>
    <section>
      <router-view/>
    </section>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/permanent/Header'
import MyFooter from '@/components/permanent/Footer'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
section{
  margin: 1%;
  padding-bottom: 50px;
  min-height: 300px;
}
h1, h3, h5{
  color: #41b883;
}
h2, h4, h6{
  color: #2c3e50;
}
h1, h2{
  font-size: 2em;
  text-align: center;
}
h3, h4{
  font-size: 1.5em;
}
h5, h6{
  font-size: 1em;
}
p{
  text-align: justify;
  text-indent:2em;
  word-wrap: break-word;
}
.center{
  text-align: center;
}
.btn{
  border: 3px solid #41b883;
  background: #35495e;
  color: #41b883;
  padding: .375rem .75rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  border-radius: .25rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.15s;
}
.btn:hover{
  border: 3px solid #35495e;
  background: #41b883;
  color: #35495e;
  transition: 0.15s;
}
*:link{
  text-decoration: none;
}
.imgFont{
  height: 1em;
  width: auto;
}
</style>
