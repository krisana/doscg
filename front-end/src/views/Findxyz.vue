<template>
  <div>
    <h1>This is an Find X,Y,Z page</h1>
    <p>X, Y, 5, 9, 15, 23, Z  - Please create a new function for finding X, Y, Z value</p>
    <div v-if="info && info.data">
      {{info}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Findxyz",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/doscg/findXyz")
      .then((response) => (this.info = response));
  },
};
</script>