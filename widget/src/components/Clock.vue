<template>
  <div>
    <p :style="dStyleObject">{{ dText }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  props: {
    pType: String
  },
  data() {
    return {
      dText: "",
      dStyleObject: {
        fontSize: "13em"
      }
    };
  },
  mounted() {
    setInterval(() => {
      this.dText = moment().format("HH:mm:ss");
    }, 1000);
  }
};
</script>

<style scoped>
.time {
  font-size: 12em;
}
</style>
