<template>
  <div id="app" class="dark h-screen w-screen">
    <Clock></Clock>
  </div>
</template>

<script>
import Clock from "./components/Clock";

export default {
  name: "App",
  components: {
    Clock
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dark {
  color: white !important;
  background-color: #2c3e50;
}
</style>
