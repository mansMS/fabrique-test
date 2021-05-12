<template>
  <div v-if="breadcrumb.length" class="breadcrumb">
    <NuxtLink to="/">
      <img src="@/assets/images/home.svg" class="breadcrumb__home" alt="Home" />
    </NuxtLink>
    <template v-for="(item, index) in breadcrumb">
      <span :key="item + '_arrow'" class="breadcrumb__arrow"></span>
      <NuxtLink
        v-if="index < breadcrumb.length - 1"
        :key="item"
        :to="getPath(index)"
        class="breadcrumb__item"
      >{{ breadcrumbs[item] }}</NuxtLink>
      <span v-else :key="item" class="breadcrumb__item">{{ breadcrumbs[item] }}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      breadcrumbs: {
        polls: 'Опросы',
        create: 'Добавить опрос',
        users: 'Пользователи',
        blacklists: 'Черные списки',
        callcentre: 'Колл-центр'
      }
    }
  },
  computed: {
    breadcrumb() {
      return this.$route.path.split('/').filter(Boolean)
    }
  },
  methods: {
    getPath(index) {
      return `/${this.breadcrumb.slice(0, index + 1).join('/')}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.breadcrumb {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  line-height: 1rem;

  &__home {
    height: 1rem;
  }

  &__arrow {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-left: 0.3rem;
    background: url("@/assets/images/arrow.svg") no-repeat center right;
  }

  &__item {
    margin-left: 0.3rem;
    color: black;
    text-decoration: none;
  }
}
</style>
