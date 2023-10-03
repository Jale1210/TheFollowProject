import en from "../localization/en";
import az from "../localization/az";
import ru from "../localization/ru";

export default {
  setLoca(state, payload) {
    if (payload == "en") state.loca = en;
    else if (payload == "az") state.loca = az;
    else state.loca = ru;
  },
  setAuthed(state, payload) {
    state.authed = payload;
  },
  setCurrentLang(state, payload) {
    state.currentLang = payload;
  },
  setPage(state, payload) {
    state.page = payload;
  },

  setOrderId(state, payload) {
    console.log(state.orderId, payload);
    console.log(document.getElementById("orderID").value);
  },

  setWrongId(state, payload) {
    state.wrongOrderId = payload;
  },

  setServiceId(state, payload) {
    state.serviceId = payload;

    console.log(state.serviceId);
  },

  setMin(state, payload) {
    state.min = payload;
  },
  setMax(state, payload) {
    state.max = payload;
  },

  setOrderBtn(state, payload) {
    state.disableOrderBtn = payload;
  },
};
