<template>
  <div>
    <AppLayoutTopbar />
    <div id="main">
      <div class="container">
        <slot />
      </div>
    </div>
    <AppLayoutFooter />
  </div>
</template>

<script>
import AppLayoutTopbar from "@/layouts/AppLayoutTopbar";
import AppLayoutFooter from "@/layouts/AppLayoutFooter";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutTopbar,
    AppLayoutFooter,
  },
};
</script>

<style scoped>
#main {
  padding-top: 100px;
  padding-bottom: 125px;
}
</style>