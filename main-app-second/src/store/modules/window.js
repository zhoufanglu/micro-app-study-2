import { defineStore } from 'pinia'

export const useWindowStore = defineStore({
  id: 'window',
  state: () => ({
    clientWidth: 0,
    clientHeight: 0
  }),
  actions: {
    setClientWidth(payload) {
      this.clientWidth = payload
    },
    setClientHeight(payload) {
      this.clientHeight = payload
    }
  },
  persist: true
})
