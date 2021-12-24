<template>
  <div id="app">
    <particles/>
    <router-view />
  </div>
</template>

<script>
import particles from "./components/particles";

export default {
  name: "App",
  components: {
    particles
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  top: 0px;
  right: 0px;
  width: 100%;
  position: absolute;
  background-color: yellow;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
  