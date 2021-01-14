<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">DOSCG</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" to="/"
            >Home <span class="sr-only">(current)</span></router-link
          >
          <router-link class="nav-link" to="/cv">CV</router-link>
          <router-link class="nav-link" to="/find-bc">Find B, C</router-link>
          <router-link class="nav-link" to="/find-xyz">Find X, Y, Z</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppLayoutTopbar",
};
</script>