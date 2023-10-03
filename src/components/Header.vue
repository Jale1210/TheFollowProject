<template>
  <div>
    <div class="header">
      <img src="../assets/follow.svg" alt="follow" class="follow-img" />

      <div style="display: flex; align-items: center">
        <SearchBar class="show-on-desktop" />

        <Transition name="scale-lang">
          <div
            class="flags-container"
            :class="{ scaleAnimation: isDropped }"
            @click="isDropped = !isDropped"
          >
            <ul class="list">
              <li class="flag">
                <img
                  class="flag.slug"
                  :src="require('@/assets/flags/' + language[selected].icon)"
                  alt=""
                />
              </li>
            </ul>

            <Transition name="slide-fade">
              <ul class="list all" v-if="isDropped">
                <li
                  class="flag"
                  v-for="(flag, index) in language"
                  :key="index"
                  v-if="index !== selected"
                  @click="selectLang(index)"
                >
                  <img
                    class="flag.slug slug"
                    :src="require('@/assets/flags/' + flag.icon)"
                    alt=""
                  />
                </li>
              </ul>
            </Transition>
          </div>
        </Transition>
      </div>
    </div>


    <div class="seach-bar-container show-on-mobile">
      <input class="searchInput" :placeholder='loca.search' />
      <div class="search-icon">
        <img src="../assets/search-white-icon.svg" />
      </div>
    </div>

    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SearchBar from "@/UI/SearchBar";
  import apiService from "@/APIServices/APIService";

export default {
  name: "Header",
  components: {
    SearchBar,
  },
  data() {
    return {
      isDropped: false,
      selected: 0,
      lang: null,
      language: [
        {
          slug: "az",
          name: "AZ",
          icon: "AZ.svg",
        },
        {
          slug: "en",
          name: "EN",
          icon: "GB.svg",
        },
        {
          slug: "ru",
          name: "RU",
          icon: "RU.svg",
        },
      ],
    };
  },

  computed: {
    ...mapState(["loca"]),
  },
  created() {
    this.setLanguage();
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
    setLanguage() {
      let language = localStorage.getItem("language");
      if (language != "az" && language != "en" && language != "ru") {
        language = null;
      }

      language = language ? language : "az";
      const index = this.language.findIndex((item) => item.slug === language);
      this.selected = index;
      this.updateLoca(language);
    },

    selectLang(index) {
      this.selected = index;
      localStorage.setItem("language", this.language[index].slug);
      this.updateCurrentLang(this.language[index].slug);
      this.updateLoca(this.language[index].slug);
       console.log('changing the lang')
       location.reload()
    },
  },
};
</script>

 
<style scoped lang="scss">
.show-on-desktop {
  display: flex;
}

.show-on-mobile {
  display: none;
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 50px 50px 0px;
  background: var(--purple, #4464b4);
  margin-top: 45px;
  width: 58px;
  height: 45px;
}

.seach-bar-container {
  align-items: center;
  // display: flex;
  width: 100%;
  justify-content: center;
}

.searchInput {
  padding: 0 0 0 25px;
  width: 250px;
  height: 45px;
  display: flex;
  margin-top: 45px;
  outline: none;
  border: none;
  border-radius: 50px 0 0 50px;
  background: #efefef;
  color: #444;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}

.searchInput::placeholder {
  color: #cecece;
  font-family: Roboto;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}

.header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scaleAnimation {
  height: 110px;
  // padding-top:73px;
  transition: all 0.3s ease;
}

.flag {
  background: #efefef;
  border-radius: 50%;
  padding: 14px;
  // padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.AZ {
  margin: 0 auto;
  display: block;
}

.GB,
.RU {
  margin: 0 auto;
  display: block;
}

.flags-container {
  cursor: pointer;
  position: relative;
  z-index: 999;
  transition: all 0.3s ease;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #efefef;
}

.list {
  margin: 0 0 0 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/*   mobile   */
@media (max-width: 900px) {
  .show-on-mobile {
    display: flex;
  }
  .show-on-desktop {
    display: none;
  }
  .header {
    width: 320px;
    // display: block;
    margin: auto;
    // padding-bottom: 30px;
    // padding: 31px 33px 30px 27px;
  }
  .follow-img {
    width: 166px;
    height: 33px;
  }
}

// @media (min-width: 900px) {
// }

// @media (max-width: 767px) {
//   .header {
//     width: 320px;
//     // display: block;
//     margin: auto;
//     padding-bottom: 30px;
//     // padding: 31px 33px 30px 27px;
//   }
//   .follow-img {
//     width: 166px;
//     height: 33px;
//   }
// }
</style>
