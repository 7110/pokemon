export const state = () => ({
  keyword: ''
})

export const mutations = {
  update (state, { value }) {
    state.keyword = value
  }
}
