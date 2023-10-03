<template>
    <div class="Purchase"> 
      <div class="purchase-container">
        <div class="flex">
            <img src="../assets/purchase-icon.svg" alt=""  class="purchase-icon"/>
            <span class="purchase-txt">Purchase</span>  
        </div>
      
        <div class="forms">
          <div style="display: flex; flex-direction: column">
            <label class="form-group__label">Card number</label>
            <input maxlength="23" type="tel" placeholder="1234 1234 1234 1234" class="form-card" id="pan_visible" tabindex="0" autocomplete="off"></input>
          </div>
        
          <div style="display: flex; justify-content: space-between;" >    
            <div style="display: flex; flex-direction: column">     
            
                <label class="form-group__label">Expiry date</label>
                                                  
              <div style="display: flex;position:relative">
                <div  class="form-card" style="width: 30px; border-radius: 20px 0 0 20px; padding: 15px 0 15px 30px" >
                  <input type="tel" id="month"  placeholder="MM" maxlength="2"
                          onkeyup="monthKeyup(month)"
                          style="background: transparent;padding-right: 0; width: 45px; border: none!important; box-shadow: none!important;">
                </div>

                <div>
                  <span style="position: absolute; top: 30px; left: 70px; color: #B2B2B2">/</span>
                </div> 

                <div> 
                  <div  class="form-card" style="width: 60px; border-radius: 0  20px 20px 0; "  >
                  <input id="year" placeholder="YY"
                          maxlength="4" type="tel" onkeyup="yearKeyup(year)"
                          style="background: transparent;border: none!important; width: 100px; box-shadow: none!important;"></div>

                </div>
              </div>
            </div>    
              
            <div style="display: flex; flex-direction: column; width: 180px">
                <label class="form-group__label">CVV</label>
                <input class="form-card" id="iCVC" pattern="[0-9]*"
                      inputmode="numeric" placeholder="123"    style="border-top: 1px solid transparent; ">
            </div>                                      
          </div>                                   
        </div>
       <Button />
      </div>

      <div>
        <img src="../assets/icons.svg" class="icons" />
        <!-- icons -->
      </div>
    </div>
  </template>
  
  <script>

  import Button  from '@/UI/Button.vue';

  export default {
    name: "Purchase",
    components: {Button},
  };
  </script>



  <style  scoped lang="scss" >
.Purchase {
  width: 460px;
  padding-top: 50px;
  padding-bottom: 45px;
  margin: auto;
}

.form-group__label {
  color: #444;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-card {
  border-radius: 20px;
  background: #efefef;
  border: none;
  outline: none;
  padding: 15px 30px;
  margin: 15px 0;
}
.flex {
  display: flex;
  align-items: center;
}
.purchase-icon {
  padding-right: 20px;
}
.purchase-txt {
  color: #4464b4;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  letter-spacing: 1.6px;
}
.purchase-container {
  padding: 20px 30px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(105, 105, 105, 0.1);
}

.forms {
  padding-top: 27px;
  padding-bottom: 66px;
}
.icons{
  margin: 45px auto;
  display: block
}
</style>
  