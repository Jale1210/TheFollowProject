<template>
  <div class="Checkout" style="position: relative"> 

    <div class="checkout-container">
      <div class="checkout-header">
        <img src="../assets/checkout.svg" alt="checkout" />
        <span class="checkout-txt">{{loca.checkout}}</span>
      </div>

      <span class="order-txt">
        You are ordering 
        <span v-if ='this.amount'>{{ this.amount }} {{ this.serviceType }} for {{ this.user }}    </span>
        <span v-else>...</span>

      </span>

      <div>
        <input class="promo-code-container" placeholder="PROMO CODE" type="" />
      </div>

      <div class="price-container">
        <span style="display: block"> {{loca.price}} </span>

        <span class="price"> {{ this.price }}</span>
      </div>

      <div class="btn-container">
        <Button />
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";
import Button from "@/UI/Button.vue";

export default {
  name: "Checkout",
  components: { Button },

  data() {
    return {
      price: "0.00",
    };
  },
  computed: {
    ...mapState(["user", "amount", "serviceType", 'loca']),
  },
};
</script>



  <style  scoped lang="scss" >

 



.btn-container {
  display: block;
  padding-top: 13px;
  width: 400px;
  margin-left: 30px;
}
.checkout-container {
  width: 480px;
    position: relative;
    height: 450px;
    padding: 20px 0 40px 18px;
    background-repeat: no-repeat;
    background-image: url(../assets/Rectangle.png);
    top: -20px;
    left: 15px;
}

.price {
  display: block;
  color: #444;
  text-align: right;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.promo-code-container::placeholder {
  text-align: center;
  color: #cecece;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.6px;
}

.promo-code-container:focus {
  border: 1px dashed #4464b4;
}

.checkout-header {
  // width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  gap: 20px;
  display: flex;
  align-items: center;
}

.checkout-txt {
  color: #4464b4;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 1.6px;
}

.price-container {
  margin-left: 30px;
  display: block;
  border-top: 1px dashed #efefef;
  padding-top: 5px;
  padding-left: 30px;
  margin-top: 20px;
  width: 366px;
  color: #cecece;
  text-align: right;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.divider {
  width: 460px;
  background: #fff;
  height: 33.022px;
}
.divider-container {
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
}

.divider-before {
  z-index: 99999999;
  display: inline-block;
  background: #fafafa;
  top: 0;
  left: 0;
  width: 33.022px;
  left: -25px;
  height: 33.022px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 20px 0px rgba(105, 105, 105, 0.1);
}

.order-txt {
  display: block;
  padding-left: 30px;
  padding-top: 60px;
  color: #444;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.promo-code-container {
  color: #4464B4;
text-align: center;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 1.6px;



  text-align: center;
  margin-left: 30px;
  // margin: auto;
  display: block;
  outline: none;
  padding: 0 30px;
  margin-top: 81px;
  // padding: 0 30px ;
  width: 336px;
  height: 50px;
  border-radius: 20px;
  border: 1px dashed #cecece;
  background: #fafafa;
}

/*   mobile   */

@media (max-width: 900px) {
  .checkout-container {
    // left: 0;
    width: 350px;
    background-image: url(../assets/Rectangle-small.png);
  }

  .promo-code-container {
    margin: 50px 20px 0 20px;
    width: 218px;
  }

  .price-container {
    margin-left: 20px;
    padding-left: 0;
    width: 280px;
  }

  .order-txt {
    font-size: 16px;
    font-weight: 400;
    padding-top: 55px;
    width: 280px;
  }

  .btn-container {
    width: 280px;
    margin-left: 20px;
  }

 


}
// @media (max-width: 767px) {
//   .checkout-container {
//  width: 100%;
//  background-image: url(../assets/Rectangle-small.png);
//   }
// }

// @media (max-width: 300px) {
//   .checkout-container {
//     width: 100%;
//     background-image: url(../assets/Rectangle-small.png);
//   }
// }
</style>
  