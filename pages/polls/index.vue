<template>
  <article class="polls">
    <div class="polls__head">
      <h2 class="polls__title">Список опросов</h2>
      <div class="polls__add">
        <NuxtLink to="polls/create">
          <button class="button button__add">Добавить</button>
        </NuxtLink>
      </div>
    </div>
    <div class="poll__content">[Список опросов]</div>
  </article>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.polls {
  &__head {
    display: flex;
    justify-content: space-between;
  }

  &__title {
  }
}
</style>
