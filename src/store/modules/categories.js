export const state = {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
}


export const mutations = {
    PUSH(state, category){
        state.categories.push(category)
    },
    DELETE(state, categoryToRemove){
        state.categories = state.categories.filter(
            category => category != categoryToRemove
        )
    }
}

export const actions = {
    add({ commit }, category){
        commit('PUSH', category)
    },
    remove({commit}, category) {
        commit('DELETE', category)
    }

}