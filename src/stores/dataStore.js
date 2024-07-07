import { defineStore } from "pinia";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        page: 1,
        loginObj: {},
        roomObj: {},
        oneContractObj: {},
        registerObj: {}
    }),
    getters: {
        getPage: (state) => state.page,
        getLoginObj: (state) => state.loginObj,
        getRoomObj: (state) => state.roomObj,
        getOneContractObj: (state) => state.oneContractObj,
        getRegisterObj: (state) => state.registerObj
    },
    actions: {
        setPage(params) {
            this.page = params;
        },
        setLoginObj(obj) {
            this.loginObj = obj;
        },
        setRoomObj(obj) {
            this.roomObj = obj;
        },
        setOneContractObj(obj) {
            this.oneContractObj = obj;
        },
        setRegisterObj(obj) {
            this.registerObj = obj;
        }
    }
});