<template>
  <div>
    <!-- {{ disableOrderBtn }},  -->
    <button class="btn" :class="{ disable: disableOrderBtn }">ORDER NOW</button>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import apiService from "@/APIServices/APIService";

export default {
  name: "Button",

  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["loca", "authed", "page", "pin", "disableOrderBtn"]),
  },
};
</script>



  <style  scoped lang="scss" >
.disable {
  background: rgba(68, 100, 180, 0.3) !important;
}

.btn {
  cursor: pointer;
  border-radius: 20px;
  width: 100%;
  height: 60px;
  border: none;
  outline: none;

  background: var(--purple, #4464b4);
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .btn {
    font-size: 16px;
    letter-spacing: 1.6px;
    width: 280px;
    font-weight: 500;
    height: 50px;
  }
}
</style>
  