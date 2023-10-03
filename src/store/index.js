import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loca: {},
    currentLang: "az",
    authed: false,
    customerName: "",
    form: [],
    surveyId: "",
    pin: "",
    loading: false,
    page: { name: "", params: [] },

    status: "",
    promoCode: "",
    orderId: "",

    serviceType: "",
    amount: 0,
    user: "",

    serviceId: "",

    wrongOrderId: "",

    min: "",
    max: "",



    disableOrderBtn: true
  },
  mutations: mutations,
  actions: actions,
  getters: {},
  modules: {},
});
