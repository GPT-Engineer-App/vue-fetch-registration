import { defineStore } from "pinia";

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    registerObj: {}, // Store registration information
  }),
  getters: {
    getRegisterObj: (state) => state.registerObj,
  },
  actions: {
    setRegisterObj(obj) {
      this.registerObj = obj;
    },
  },
});