<template>
  <header class="header">
    <div class="header__row">
      <input id="systemSearch" type="search" name="System search" class="header__search" />
      <div class="user">
        <img src="../assets/images/avatar.jpg" alt="User avatar" class="user__avatar" />
        <div class="user__info">
          <div class="user__name">Alexander C.</div>
          <div class="user__role">Администратор</div>
        </div>
      </div>
    </div>
    <Breadcrumb />
  </header>
</template>

<script>
export default {
  props: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 3rem 0;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  &__search {
    max-width: 35rem;
    margin-right: 1rem;
  }
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__avatar {
    max-width: 3rem;
    border-radius: 50%;
  }

  &__info {
    margin-left: 0.5rem;
  }

  &__name {
    font-weight: bold;
    white-space: nowrap;
  }

  &__role {
    font-size: 0.8rem;
    color: #939393;
  }
}
</style>
