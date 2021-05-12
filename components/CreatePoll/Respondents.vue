<template>
  <div class="stage">
    <div v-for="(param, index) in value" :key="param.key" class="stage__block">
      <div class="param">
        <div class="param__name">Условие {{ index + 1 }}</div>
        <div class="param__field">
          <SelectInput
            v-model="param.value"
            :options="params_list_filtered"
            @input="addEmptyValue(param)"
          />
        </div>
      </div>
      <template v-if="param.selected">
        <template v-if="param.value.size === 'myltiple'">
          <template v-for="(selected_value, sel_index) in param.selected">
            <CreatePollValueBlock
              :key="selected_value.key"
              :param-variables="param_variables"
              :value-key="param.value.key"
              :selected-value="selected_value"
              :value-name="param.value.value_name + (sel_index + 1)"
            />
          </template>
        </template>
        <CreatePollValueBlock
          v-else
          :param-variables="param_variables"
          :value-key="param.value.key"
          :selected-value="param.selected "
          :value-name="param.value.value_name"
        />
      </template>
      <div class="block-buttons">
        <button class="button button__remove" @click="removeParam(index)">Удалить условие</button>
        <button
          v-if="param.value.size === 'myltiple'"
          class="button button__add"
          @click="addValue(param)"
        >Добавить {{ param.value.value_name }}</button>
      </div>
    </div>
    <BlockAddButton
      v-if="used_params.length < params_list.length"
      @addParam="addParam('Выберите параметр')"
    >
      Нажмите, чтобы добавить новое условие выборки.
      <br />Все условия связываются между собой логическим 'И'
    </BlockAddButton>
    <div class="stage__footer">
      <button class="button button__done">Готово</button>
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
          key: 'age',
          name: 'Возраст респондента',
          value_name: 'Диапазон',
          size: 'myltiple'
        },
        {
          key: 'card_type',
          name: 'Тип карты лояльности',
          value_name: 'Тип',
          size: 'myltiple'
        },
        {
          key: 'card_status',
          name: 'Статус карты лояльности',
          value_name: 'Статус',
          size: 'single'
        }
      ],
      param_variables: {
        age: {
          type: 'range'
        },
        card_type: {
          type: 'select',
          list: [
            { key: 'gold', name: 'Gold' },
            { key: 'silver', name: 'Silver' }
          ]
        },
        card_status: {
          type: 'select',
          list: [
            { key: 'active', name: 'Активна' },
            { key: 'inactive', name: 'Неактивна' }
          ]
        }
      }
    }
  },
  methods: {
    addEmptyValue(param) {
      this.addValue(param, true)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
