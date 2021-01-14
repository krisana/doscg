<template>
  <footer class="bd-footer p-3 p-md-5 mt-5 text-center text-muted bg-light">
    <div class="container">
      <ul class="bd-footer-links">
        <li><a href="https://github.com/krisana">GitHub</a></li>
        <li><a href="https://twitter.com/getbootstrap">Twitter</a></li>
        <li>
          <a href="https://getbootstrap.com/docs/4.5/examples/">Examples</a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/4.5/about/overview/">About</a>
        </li>
      </ul>
      <p class="mb-0">
        Designed and built with all the love in the world by the
        <a href="https://getbootstrap.com/docs/4.5/about/team/"
          >Bootstrap team</a
        >
        with the help of
        <a href="https://github.com/twbs/blog/graphs/contributors"
          >our contributors</a
        >.
      </p>
      <p class="mb-0">
        Currently v4.5.3. The Bootstrap Blog is
        <a href="https://github.com/twbs/blog">open source</a> under the MIT
        license.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppLayoutFooter",
};
</script>

<style scoped>
.bd-footer-links {
  padding-left: 0;
  margin-bottom: 1rem;
}
.bd-footer-links li {
    display: inline-block;
}
.bd-footer-links li+li {
    margin-left: 1rem;
}
.bd-footer a {
    font-weight: 600;
    color: #495057;
}
</style>