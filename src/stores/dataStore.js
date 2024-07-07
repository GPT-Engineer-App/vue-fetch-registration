import { defineStore } from "pinia";

export const useDataStore = defineStore('dataStore', {
    state: () => ({  // 存放全域變數的地方
        page: 1,  // 讀取當頁頁碼
        loginObj: {},  // 存放房東登入資訊
        roomObj: {},
        oneContractObj: {}, //存放單一筆房間契約的資訊
        registerObj: {} //存放註冊資訊
    }),
    getters: {  // 返回變數或數據
        getPage: (state) => state.page,
        getLoginObj: (state) => state.loginObj,
        getRoomObj: (state) => state.roomObj,
        getOneContractObj: (state) => state.oneContractObj,
        getRegisterObj: (state) => state.registerObj
    },
    actions: {   // 處理數據
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