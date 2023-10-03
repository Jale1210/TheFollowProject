<template>
  <div>
  <Orders />
  
    <div class="noResult">  

       <img src="../assets/cosmo.gif" alt="cosmo" style="width: 255px; height: 255px;" />

        <span class="noResult-txt">No results for <span class="bold">{{this.wrongOrderId}}</span> Order ID</span>
        <span class="contact-txt">If you think this is mistake, please contact us</span>
    
    </div>
  </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "vuex"; 
   import Orders from '../components/Orders'
 
  
  export default {
    name: 'noResult',
    components: {
      Orders
    },
    computed: {
    ...mapState(["loca", 'wrongOrderId']),
  },
  }
  </script>



  <style  scoped lang="scss" >

    .bold{
      color: #444;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal; 
    }

    .noResult{
      align-items: center;
        padding-bottom: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    .noResult-txt{
      padding-top: 20px;
      color: #444;
      text-align: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .contact-txt{
      padding-top: 30px;
      color: #CECECE;
text-align: center;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
 
  </style>
  