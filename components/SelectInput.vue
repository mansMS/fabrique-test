<template>
  <div :tabindex="tabindex" class="select" :class="{open : isOpen}" @click="open" @blur="close">
    <div class="select__selected selected">
      {{ value ? value.name : 'Нет элементов' }}
      <span class="selected__arrow"></span>
    </div>
    <div
      v-if="options && options.length"
      class="select__itemList"
      :class="{'open__options' : isOpen}"
    >
      <div
        v-for="option of options"
        :key="option.key"
        class="select__item"
        @click="select({...option})"
      >{{ option.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    hasOptions() {
      return this.options && this.options.length > 0
    }
  },
  methods: {
    open() {
      if (this.hasOptions) {
        this.isOpen = !this.isOpen
      }
    },
    close() {
      this.isOpen = false
    },
    select(option) {
      this.$emit('input', option)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors.scss";

.select {
  position: relative;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid $grey;
  border-radius: 0.5rem;
  outline: none;

  &__selected {
    text-overflow: ellipsis;
    cursor: pointer;
    line-height: 1;
  }

  &__itemList {
    position: absolute;
    width: calc(100% + 2px);
    top: 100%;
    left: 0;
    margin-left: -1px;
    border: 1px solid #ccc;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: #fff;
    padding: 0.5rem 0;
    z-index: 1;
    display: none;
  }

  &__item {
    padding: 0.5rem 0.75rem;
    line-height: 1.125rem;
    word-wrap: break-word;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: $light-grey;
    }
  }
}

.selected {
  &__arrow {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-image: url("@/assets/images/select-arror.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.open {
  border-radius: 0.5rem 0.5rem 0 0;

  &__options {
    display: block;
  }
}
</style>
