<template>
  <div id="app" :style="dStyles">
    <Clock></Clock>
  </div>
</template>

<script>
import Clock from "./components/Clock";

export default {
  name: "App",
  components: {
    Clock
  },
  data() {
    return {
      dStyles: [],
      dStyleObject: {
        color: "#2c3e50",
        backgroundColor: "white"
      },
      dDarkStyleObject: {
        color: "white !important",
        backgroundColor: "#2c3e50"
      }
    };
  },
  created() {
    this.dStyles.push(this.dDarkStyleObject);
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
</style>
