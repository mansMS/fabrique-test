<template>
  <section class="sidebar">
    <nav class="nav">
      <NuxtLink
        v-for="item in nav_items"
        :key="item.key"
        :to="`/${item.key}`"
        class="nav__item nav-item"
      >
        <div class="nav-item__icon" :class="item.key"></div>
        <div class="nav-item__name">{{ item.name }}</div>
      </NuxtLink>
    </nav>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      nav_items: [
        { key: 'polls', name: 'Опросы' },
        { key: 'users', name: 'Пользователи' },
        { key: 'blacklists', name: 'Черные списки' },
        { key: 'callcentre', name: 'Колл-центр' }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.sidebar {
  padding: 0 0.75rem;
  border-right: 1px solid #ededed;
}

.nav {
  &__item {
    margin-bottom: 0.5rem;
  }
}

.nav-item {
  display: block;
  max-width: 9rem;
  padding: 0.6rem 0.2rem;
  text-align: center;
  color: black;
  border-radius: 0.5rem;
  background: none;
  text-decoration: none;

  $icons: "polls", "users", "blacklists", "callcentre";

  &__icon {
    padding-bottom: 45%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @each $icon in $icons {
      &.#{$icon} {
        background-image: url("@/assets/images/#{$icon}-icon.svg");
      }
    }
  }

  &__name {
    text-decoration: none;
  }

  &:hover:not(.nuxt-link-active) {
    color: $light-green;
    border: 1px solid $light-green;
    box-shadow: 1px 1px 2px $light-green;

    @each $icon in $icons {
      .#{$icon} {
        background-image: url("@/assets/images/#{$icon}-icon_hover.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &.nuxt-link-active {
    background-color: $light-grey;
    .nav-item__name {
      font-weight: bold;
    }
  }
}
</style>
