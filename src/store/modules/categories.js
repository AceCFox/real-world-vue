export const namespaced = true;

export const state = {
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
}


export const mutations = {
    PUSH(state, category){
        state.categories.push(category)
    },
    DELETE(state, categoryToRemove){
        let newCategories = []
        for (let cat of state.categories){
            if(cat != categoryToRemove){
                newCategories.push(cat)
            }
        }
        state.categories=newCategories;
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