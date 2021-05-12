<template>
  <div class="range">
    от
    <input v-model.number="range.from" type="number" class="range__from" />
    до
    <input v-model.number="range.to" type="number" class="range__to" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      range: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.range {
  width: 100%;
  display: flex;
  align-items: center;

  &__from,
  &__to {
    max-width: 100px;
    margin: 0 15px 0 5px;
  }
}
</style>
