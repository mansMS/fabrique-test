<template>
  <button class="nav-btn">
    <div class="nav-btn__icon" :class="icon"></div>
    <div class="nav-btn__name">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: 'none'
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.nav-btn {
  width: 100%;
  max-width: 9rem;
  padding: 0.5rem;
  color: $light-green;
  border: 1px solid $light-green;
  border-radius: 0.5rem;
  background: none;

  &__icon {
    padding-bottom: 50%;

    $icons: "polls", "users", "blacklists", "callcentre";
    @each $icon in $icons {
      &.#{$icon} {
        background-image: url("@/assets/images/#{$icon}-icon.svg");
      }
    }
  }
}
</style>
