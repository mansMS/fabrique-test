export default {
  data() {
    return {
      empty_values: {
        string: () => '',
        select: name => ({ key: 'empty', name: name || 'Выберите значение' }),
        range: () => ({ from: '', to: '' })
      }
    }
  },
  computed: {
    used_params() {
      return this.value.map(param => param.value.key)
    },
    params_list_filtered() {
      return this.params_list.filter(
        param => !this.used_params.includes(param.key)
      )
    }
  },
  methods: {
    addParam(name) {
      this.$emit('input', [
        ...this.value,
        this.getEmptyValue({ name, type: this.params_type })
      ])
    },
    getEmptyValue({ name, type }) {
      return {
        value: this.empty_values[type](name),
        key: Math.random()
      }
    },
    removeParam(index) {
      this.$emit('input', [
        ...this.value.slice(0, index),
        ...this.value.slice(index + 1)
      ])
    },
    addValue(param, empty) {
      const emptyValue = this.getEmptyValue({
        type: this.param_variables[param.value.key].type
      })
      const selected =
        param.value.size === 'myltiple'
          ? [...((!empty && param.selected) || []), emptyValue]
          : emptyValue
      this.$set(param, 'selected', selected)
    }
  }
}
