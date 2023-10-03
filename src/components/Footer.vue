<template>
  <div class="footer">
    <div style="display: flex">
      <div style="width: 266px">
        <p class="followTxt">
          Follow.az
          <span class="copyright">© 2020-2023 | info@follow.az</span>
        </p>

        <div class="social">
          <img src="../assets/insta.svg" alt="insta" class="insta" />
          <img src="../assets/facebook.svg" alt="facebook" class="facebook" />
          <img src="../assets/wp.svg" alt="wp" class="wp" />
        </div>
      </div>

      <div class="cards">
        <img src="../assets/cards.svg" alt="cards" />
      </div>
    </div>

    <div class="ideasFoundation">
      <span class="padding5">Made with</span>
      <img src="../assets/heart.svg" alt="❤" class="padding5" />
      <span class="padding5">by</span>
      <img src="../assets/ideasFoundation.svg" alt="ideas foundation" />
    </div>
  </div>
</template>

  <script>
export default {
  name: "Footer",
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
.footer {
  padding-bottom: 35px;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.followTxt {
  color: #4464b4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.copyright {
  color: #cecece;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.social {
  display: block;
}

.insta {
  padding-right: 15px;
}

.facebook {
  padding-right: 15px;
}

.ideasFoundation {
  display: flex;
  align-items: center;
  color: #cecece;
  text-align: right;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.cards {
  display: flex;
  padding-left: 15px;
}
.padding5 {
  padding-right: 5px;
}

@media (max-width: 900px) {
  .footer {
    margin: 0 auto;
    width: 320px;
    display: block;
  }

  .copyright {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .cards {
    padding-top: 17px;
    width: 64.771px;
height: 13.425px;
  }

.ideasFoundation{
    padding-top: 20px;
    justify-content: center;
    text-align: center;
}


}
</style>
