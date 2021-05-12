<template>
  <div class="page">
    <Logo />
    <Header />
    <Sidebar />
    <main class="page__container">
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  max-width: 75rem;
  display: grid;
  grid-template-columns: minmax(auto, 10rem) auto;
  grid-template-rows: minmax(8rem, auto) auto;
  margin: auto;

  &__container {
    padding: 0 3rem 3rem;
  }
}
</style>
