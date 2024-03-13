import { useDark, useToggle } from '@vueuse/core'

const state = () => ({
    isDark: useDark()
})

const mutations = {
    toggleDark(state: any) {
        useToggle(state.isDark)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}