export default {
    namespaced: true,
    state: () => ({
        sidebarCollapse: false,
    }),
    mutations: { 
        TOGGLE_SIDEBAR(state, collapse) {
            state.sidebarCollapse = collapse
        }
    },
    actions: {  
        toggleSidebar(context, collapse) {
            context.commit('TOGGLE_SIDEBAR', collapse)
        }
    },
}