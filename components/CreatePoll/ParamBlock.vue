<template>
  <div class="param">
    <div class="param__name">{{ fieldName }}</div>
    <div class="param__field">
      <SelectInput
        v-if="paramsType === 'select'"
        v-model="field"
        :options="valueList"
        @input="addEmptyValue(param)"
      />
      <input v-else v-model="field.value" type="text" class="header__search" />
    </div>
  </div>
</template>

<script>
import mixins from './mixins.js'

export default {
  mixins: [mixins],
  props: {
    param: {
      type: Object,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    },
    valueList: {
      type: Array,
      required: true
    },
    paramsType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      field: this.value
    }
  }
}
</script>
