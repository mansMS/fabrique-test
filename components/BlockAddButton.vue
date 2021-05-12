<template>
  <div class="block-add-wrapper">
    <button class="block-add" @click="$emit('addParam')">
      <div class="block-add__plus">+</div>
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.block-add-wrapper {
  padding: 2rem;
}

.block-add {
  width: 100%;
  padding: 1rem;
  border: none;
  background: none;
  box-shadow: 0 0 3px $grey;
  border-radius: 0.25rem;
  color: $green;
  cursor: pointer;

  &__plus {
    font-size: 2rem;
    font-weight: 300;
  }
}
</style>
