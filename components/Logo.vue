<template>
  <section class="logo">
    <img src="../assets/images/logo.jpg" class="logo__img" alt="Logo" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.logo {
  text-align: center;
  padding: 1.5rem;
  border-right: 1px solid $light-grey;

  &__img {
    max-width: 3rem;
    border-radius: 50%;
  }
}
</style>
