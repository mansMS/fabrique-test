export const state = () => ({
  polls: [],
  users: [],
  blacklists: [],
  callcentre: []
})

export const mutations = {
  setPoll(state, catalog) {
    state.catalog = catalog
  }
}

// export const actions = {
//   async nuxtServerInit({ commit }, { $axios, params }) {
//     try {
//       const { data: catalog } = await $axios.get('api/product-category')
//       commit('setCatalog', catalog)
//       const { data: products } = await $axios.get('api/product', {
//         params: {
//           category: params.id
//         }
//       })
//       commit('setProducts', { [params.id]: products })
//       commit('setActiveCatalog', params.id)
//     } catch {
//       commit('setProducts', { [params.id]: [] })
//     }
//   }
// }
