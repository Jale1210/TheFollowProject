<template>
  <div class="home"> 

     <Orders />
     <div class="flex">
      <Dropdown />
      <Checkout />

     </div>
    
    <FAQ />
  </div>
</template>

<script>
 
 
import Orders from '../components/Orders.vue'
import FAQ from '../components/FAQ.vue'
import Dropdown from '@/UI/Dropdown.vue'
import Checkout from '@/components/Checkout.vue'

export default {
  name: 'Home',
  components: { 
    Orders,
    FAQ,
    Dropdown,
    Checkout
  }
}
</script>


<style scoped lang="scss" >
.flex{
  display: flex;
  justify-content: space-between;
  // align-items: center;
}





// @media (min-width: 900px) {
//   .flex{
//     display: block;
//   }
// }

/*   mobile   */
@media (max-width: 900px) {
  .flex{
  display: block;
  }
}



</style>