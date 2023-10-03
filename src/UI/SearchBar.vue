 <template>
  <div class="search-bar-container active">
    <img
      src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
      alt="magnifier"
      class="magnifier"
    />
    <input type="text" class="input orderId" id="orderID" @keyup="tryToCall" />
    <img
      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
      alt="mic-icon"
      class="mic-icon"
    />
  </div>
</template>
 
 
<script>
import { mapActions, mapState } from "vuex";
import apiService from "@/APIServices/APIService";

export default {
  name: "SearchBar",

  data() {
    return {};
  },

  computed: {
    ...mapState(["loca", "authed", "page", "pin", "orderId"]),
  },
  created() {},
  mounted() {
    const searchBarContainerEl = document.querySelector(
      ".search-bar-container"
    );

    const magnifierEl = document.querySelector(".magnifier");

    magnifierEl.addEventListener("click", () => {
      searchBarContainerEl.classList.toggle("active");
    });

    let orderId = document.querySelector(".orderId");

    let language = localStorage.getItem("language");
    console.log(language);
    orderId.placeholder = this.loca.search;
  },
  methods: {
    ...mapActions([
      "updateLoca",
      "updateOrderId",
      "updatePage",
      "updateCurrentLang",
      "updateWrongId"
    ]),

    tryToCall(val) {
      // let data = {
      //   apiKey: "cf31cb381eae9003640551cfc063241a",
      //   action: "services",
      // };
      // let a = [];
      // apiService
      //   .postPanel(data)
      //   .then((res) => {
      //     Object.keys(res).forEach((el) =>
      //       res.data.forEach((e) => {
      //         if (e.service.includes(val.target.value)) {
      //           a.push(e.service);

      //           console.log(
      //             e.service,
      //             e.service.includes(val.target.value),
      //             a.length
      //           );

      //           // console.log(e.service, e.service.includes(val.target.value));  
      //         }

      //         if (!a.length) {
      //           this.updateWrongId(val.target.value)
      //           this.updatePage({ name: "NoResult", params: data });
      //         } else {
      //           this.updatePage({ name: "Home", params: data });
      //         }

      //         // console.log(e, e.service);
      //       })
      //     );
       
      //   })
      //   .catch((errors) => {
      //     console.log(errors);
      //   }); 
    },
  },
};
</script>

 
  <style scoped lang="scss">
.social-menu ul {
  position: absolute;
  top: 90%;
  left: 50%;
  padding: 0;
  margin: 0;
  transform: translate(-50%, -50%);
  display: flex;
}

.orderId::placeholder {
  color: #cecece;
  font-family: Roboto;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%; /* 24px */
}

.social-menu ul li {
  list-style: none;
  margin: 0 15px;
}

.social-menu ul li .fab {
  font-size: 30px;
  line-height: 60px;
  transition: 0.3s;
  color: #000;
}

.social-menu ul li .fab:hover {
  color: #fff;
}

.social-menu ul li a {
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  transition: 0.6s;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
}

.social-menu ul li a:hover {
  transform: translate(0, -10%);
}

.social-menu ul li:nth-child(1) a:hover {
  background-color: rgba(0, 0, 0, 0.829);
}

.social-menu ul li:nth-child(2) a:hover {
  background-color: #e4405f;
}

.social-menu ul li:nth-child(3) a:hover {
  background-color: #0077b5;
}

.social-menu ul li:nth-child(4) a:hover {
  background-color: #000;
}

.search-bar-container {
  display: flex;
  align-items: center;
  background-color: #efefef;
  padding: 5px;
  width: 300px;
  height: 45px;
  border-radius: 45px;

  margin: 10px;
  position: relative;
  transition: width 1.5s;
}

.magnifier {
  width: 25px;
  cursor: pointer;
  position: absolute;
  left: 20px;
}

.mic-icon {
  width: 30px;
  position: absolute;
  right: 10px;
  transition: width 0.4s;
  transition-delay: 1s;
}

.input {
  background-color: transparent;
  border: none;
  margin: 10px 50px;
  width: 100%;
  outline: none;
  color: #333;
  transition: width 1s;
  transition-delay: 0.5s;
}

.active.search-bar-container {
  width: 50px;
}

.active .input {
  width: 0;
}

.active .mic-icon {
  width: 0;
}
</style>
 



 