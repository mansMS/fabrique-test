<template>
  <div class="stage">
    <div v-for="(param, index) in value" :key="param.key" class="stage__block">
      <div class="param">
        <div class="param__name">Логика {{ index + 1 }}</div>
        <div class="param__field">
          <input v-model="param.value" type="text" class="header__search" />
        </div>
      </div>
      <div class="block-buttons">
        <button class="button button__remove" @click="removeParam(index)">Удалить логику</button>
      </div>
    </div>
    <BlockAddButton @addParam="addParam()">Нажмите, чтобы добавить новую логику</BlockAddButton>
    <div class="stage__footer">
      <button class="button button__next" @click="$emit('next')">Далее</button>
    </div>
  </div>
</template>

<script>
import mixins from './mixins.js'

export default {
  mixins: [mixins],
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      params_type: 'string'
    }
  }
}
</script>
