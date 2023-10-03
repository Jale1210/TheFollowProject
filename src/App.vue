<template>
  <div id="app">
    <!-- <div class="container" >
      <router-view/>
  </div> -->
    <!-- <Loader v-if="loading"/> -->
    <div class="main container">
      <!--    v-else       -->
      <div>
        <Header />
        <keep-alive>
          <component v-bind:is="page.name">
            <!--   -->
            <!-- <Home /> -->

            <!-- <notFound/> -->
          </component>
        </keep-alive>
      </div>
      <Footer />
    </div>
  </div>
</template>


<script>
// API key dc13b06f294f453234a3f4094789367e

import NoResult from "./components/NoResult";
import SearchBar from "@/UI/SearchBar";
import notFound from "@/views/NotFound";
import Loader from "@/components/Loader";
import Home from "@/views/Home";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Orders from "@/components/Orders";
import { mapActions, mapState } from "vuex";
import FAQ from "@/components/FAQ";
import Purchase from "./views/Purchase.vue";
import Checkout from "./components/Checkout.vue";
import apiService from "@/APIServices/APIService";

export default {
  components: {
    Header,
    Home,
    Footer,
    notFound,
    Loader,
    Footer,
    Orders,
    SearchBar,
    FAQ,
    NoResult,
    Purchase,
    Checkout,
  },
  data() {
    return {
      orderId: "",
    };
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });

    let domain = new URL(window.location.href);
    console.log(domain);

    let data = {
      apiKey: "cf31cb381eae9003640551cfc063241a",
      action: "services" 
    }

    apiService
      .postPanel(data)
      .then((res) => {
        if (res.status == 200) {
          this.updatePage({ name: "Home", params: data });
        }
        console.log(res.status == 200);
        Object.keys(res).forEach((el) =>
          res.data.forEach((e) => {
            // console.log(e, e.service);
          })
        );
        // console.log(res.service)
      })
      .catch((errors) => {
        console.log(errors);
        this.updatePage({ name: "notFound", params: [] });
        if (!errors.response.data) {
          this.updatePage({ name: "notFound", params: [] });
        } else if (errors.response.status == 404) {
          this.updatePage({ name: "notFound", params: [] });
        } else if (errors.response.data.errors[0].code == 400) {
          this.updatePage({ name: "notFound", params: [] });
        }
      });
  },
  computed: {
    ...mapState(["loading", "page", "loca", "userDetails", "authed"]),
  },
  methods: {
    ...mapActions([
      "updateLoading",
      "updateSurveyId",
      "updatePage",
      "updatePin",
      "updateUserDetails",
    ]),
  },
};
</script>



<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
#app {
  font-family: "Roboto" sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh !important;
}

body {
  background: #fafafa;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 920px;
  margin: auto;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  flex-direction: column;
}

/*   mobile   */

@media (max-width: 900px) {
  .container {
    width: 100% !important;
  }
}

// @media (max-width: 767px) {
//   .container{
//     width: 100%!important;
//   }
// }
// @media (max-width: 300px) {
//   .container{
//     width: 100%!important;
//   }
// }
</style>
