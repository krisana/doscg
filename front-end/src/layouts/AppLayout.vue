<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from "./AppLayoutDefault";

export default {
  name: "AppLayout",
  data: () => ({
    layout: AppLayoutDefault,
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component?.default || AppLayoutDefault;
        } catch (e) {
          this.layout = AppLayoutDefault;
        }
      },
    },
  },
};
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
</style>