<template>
    <div class="notFound"> 
  
       <img src="../assets/sadCat.svg" alt="sadCat" class="sadCat" />

       <div class="error-container">
            <span class="err404">404</span>
            <span class="errorTxt">Page not found</span>
       </div>
    
    </div>
  </template>
  
  <script>
   
 
  
  export default {
    name: 'NotFound',
    components: {
   
    }
  }
  </script>



  <style  scoped lang="scss" >
    .notFound{
        padding-top: 120px;
        padding-bottom: 70px;
        display: flex;
        justify-content: center;
    }

    .err404{
        color: #CECECE;
        text-align: center;
        font-family: Roboto;
        font-size: 130px;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
    }
    .error-container{
        padding-left:87.77px;
    }
    .errorTxt{
        display: block;
        color: #CECECE;
        text-align: center;
        font-family: Roboto;
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 37.5px */
        text-transform: uppercase;
    }


    @media (max-width: 900px) {
  .notFound {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  
    width: 320px;;
    margin: 0 auto;
    
  }

  .sadCat{
    position: relative;
    right: 20px;
    width: 250px
  }
  .err404{
    font-size:64px;
  }

  .errorTxt{
    font-size: 20px;
  }

  .error-container{
    position: relative;
    left: 30px;
   bottom: 15px;
    text-align: center;
    padding-left: 0;
  }
}

  </style>
  