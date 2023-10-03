<template>
  <div class="orders" style="position: relative">
    <div>
      <img
        src="../assets/smoke.png"
        style="width: 597px; border-radius: 20px"
        class="smoke"
        alt="smoke"
      />

      <span class="showOnMobile smoke-text"  v-html="loca.smokeTitle"
        > </span
      >
    </div>
    <img src="../assets/smoke-shadow.png" class="smoke-shadow" alt="smoke" />

    <div class="orders-container">
      <img src="../assets/star.svg" alt="star" class="star" />

      <div class="orders-txt-container">
        <span class="total-orders">3 450</span>
        <span class="total-orders-txt">{{ loca.totalOrders }}</span>
      </div>
    </div>

    <div class="orders-shadow"></div>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Orders",
  props: {},
  computed: {
    ...mapState(["loca"]),
  },

  mounted() {},
  methods: {
    ...mapActions([
      "updateAuthed",
      "updateLoca",
      "updatePage",
      "updatePin",
      "updateCurrentLang",
    ]),
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
.orders-shadow {
  position: absolute;
  background: #d7d7d7;
  right: 0px;

  width: 227px;
  height: 130px;
  display: block;
  height: 90px;
  top: 50%;
  z-index: -1;
  filter: blur(25px);
}

.showOnMobile {
  display: none;
}

.bold {
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  text-transform: uppercase;
}

.smoke-text {
  position: absolute;
  top: 60px;
  width: 290px;
  left: 60px;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
}
.smoke-shadow {
  position: absolute;
  top: 0px;
  width: 537px;
  top: 30%;
  left: 3%;
  z-index: -1;
}
.orders {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
}

.orders-txt-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.total-orders-txt {
  text-align: center;
  color: #cecece;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.total-orders {
  text-align: center;
  color: #444;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.orders-container {
  position: relative;
  width: 273px;
  height: 130px;
  display: flex;
  align-content: center;
  border-radius: 20px;
  background: #fff;
}

.star {
  padding: 40px 45px 40px 33px;
  width: 54px;
  height: 50px;
}

// @media (min-width: 900px) {
//   .showOnMobile {
//     display: block;
//   }
// }

@media (max-width: 900px) {
  .showOnMobile {
    display: block;
  }

  .smoke {
    margin: auto;
    width: 320px !important;
    height: 120px !important;
    display: block;
  }
  .smoke-shadow {
    position: absolute;
    top: 20%;
    width: 274px;
    left: 15%;
    z-index: -1;
  }

  .orders {
    display: block;
  }

  .star {
    padding-left: 0;
  }
  .orders-container {
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(105, 105, 105, 0.1);
    margin-top: 45px;
    justify-content: center;
    border-radius: 0;
    width: 100%;
  }
}

// @media (max-width: 767px) {

//   .showOnMobile {
//     display: block;
//   }

//   .smoke {
//     margin: auto;
//     width: 320px !important;
//     height: 120px !important;
//     display: block;
//   }
//   .smoke-shadow {
//     position: absolute;
//     top: 20%;
//     width: 274px;
//     left: 15%;
//     z-index: -1;
//   }

//   .orders {
//     display: block;
//   }

//   .star {
//     padding-left: 0;
//   }
//   .orders-container {
//     background: #fff;
//     box-shadow: 0px 0px 20px 0px rgba(105, 105, 105, 0.1);
//     margin-top: 45px;
//     justify-content: center;
//     border-radius: 0;
//     width: 100%;
//   }

// }
</style>
  