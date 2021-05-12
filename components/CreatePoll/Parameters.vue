<template>
  <div class="stage">
    <div v-for="(param, index) in value" :key="param.key" class="stage__block">
      <div class="param">
        <div class="param__name">Параметр {{ index + 1 }}</div>
        <div class="param__field">
          <SelectInput
            v-model="param.value"
            :options="params_list_filtered"
            @input="addValue(param)"
          />
        </div>
      </div>
      <div v-if="param.selected" class="value">
        <div class="value__name">Значение</div>
        <div class="value__field">
          <SelectInput
            v-model="param.selected.value"
            :options="param_variables[param.value.key].list"
          />
        </div>
      </div>
      <div class="block-buttons">
        <button class="button button__remove" @click="removeParam(index)">Удалить параметр</button>
      </div>
    </div>
    <BlockAddButton
      v-if="used_params.length < params_list.length"
      @addParam="addParam('Выберите параметр')"
    >Нажмите, чтобы добавить новый параметр</BlockAddButton>
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
      params_type: 'select',
      params_list: [
        {
          key: 'time',
          name: 'Время',
          size: 'single'
        },
        {
          key: 'questions_count',
          name: 'Количество вопросов',
          size: 'single'
        }
      ],
      param_variables: {
        questions_count: {
          type: 'select',
          list: [
            { key: 'less10', name: 'Меньше 10' },
            { key: 'more10', name: 'Боьше 10' }
          ]
        },
        time: {
          type: 'select',
          list: [
            { key: 'halfHour', name: 'Пол часа' },
            { key: 'hour', name: 'Один час' }
          ]
        }
      }
    }
  }
}
</script>
