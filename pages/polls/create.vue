<template>
  <section class="create">
    <nav class="nav">
      <li
        v-for="item in nav_items"
        :key="item"
        class="nav__item"
        :class="{active: item === active_nav}"
        @click="active_nav = item"
      >{{ stages[item].name }}</li>
    </nav>
    <div class="create__content">
      <h3 class="create__title">Добавить опрос</h3>
      <component :is="stages[active_nav].component" v-model="poll[active_nav]" @next="next()" />
    </div>
  </section>
</template>

<script>
import Params from '~/components/CreatePoll/Parameters'
import Questions from '~/components/CreatePoll/Questions'
import Logics from '~/components/CreatePoll/Logics'
import Conditions from '~/components/CreatePoll/Conditions'
import Respondents from '~/components/CreatePoll/Respondents'

export default {
  components: { Params, Questions, Logics, Conditions, Respondents },
  props: {},
  data() {
    return {
      nav_items: ['params', 'questions', 'logics', 'conditions', 'respondents'],
      stages: {
        params: { name: 'Параметры', component: Params },
        questions: { name: 'Вопросы', component: Questions },
        logics: { name: 'Логика', component: Logics },
        conditions: { name: 'Условия', component: Conditions },
        respondents: { name: 'Респонденты', component: Respondents }
      },
      active_nav: 'params',
      poll: {
        params: [],
        questions: [],
        logics: [],
        conditions: [],
        respondents: []
      }
    }
  },
  computed: {},
  methods: {
    next() {
      const activeIndex = this.nav_items.findIndex(
        items => items === this.active_nav
      )
      this.active_nav = this.nav_items[activeIndex + 1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.create {
  &__content {
    padding: 2rem 0;
    box-shadow: 0 5px 10px $grey;
  }

  &__title {
    padding: 0 2rem;
  }
}

.nav {
  display: flex;
  justify-content: space-around;
  box-shadow: 0 3px 3px -2px $light-green;
  &__item {
    padding: 0.75rem 1.25rem;
    list-style: none;
    cursor: pointer;

    &.active {
      border-bottom: 2px solid $green;
    }
  }
}
</style>
