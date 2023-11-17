<template>
  <div>
    <div class="app-head">
      <RouterLink to="/" exact-active-class="link-active">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="link-active"
        >About</RouterLink
      >
    </div>
    <router-view />
    <footer>
      <a href="https://github.com/manuchekhr32/vue-starter"
        >Hit a star GitHub repo</a
      >
    </footer>
  </div>
</template>
