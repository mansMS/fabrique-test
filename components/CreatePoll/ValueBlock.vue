<template>
  <div class="value">
    <div class="value__name">{{ valueName }}</div>
    <div class="value__field">
      <SelectInput
        v-if="paramVariables[valueKey].type === 'select'"
        v-model="selected.value"
        :options="paramVariables[valueKey].list"
      />
      <RangeInput v-if="paramVariables[valueKey].type === 'range'" v-model="selected.value" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramVariables: {
      type: Object,
      required: true
    },
    valueKey: {
      type: String,
      required: true
    },
    selectedValue: {
      type: Object,
      required: true
    },
    valueName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: this.selectedValue
    }
  }
}
</script>
