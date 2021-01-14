<template>
  <div>
    <h1>This is an Find B, C page</h1>
    <p>If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value</p>
    <div v-if="info && info.data">
      <h3>B = {{info.data.B}}</h3>
      <h3>C = {{info.data.C}}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FindBc",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/doscg/findBC")
      .then((response) => (this.info = response));
  },
};
</script>