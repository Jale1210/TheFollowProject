<template>
  <div>
    <div class="dropdown">
      <div class="aselect" :data-value="value" :data-list="list">
        <div class="selector" @click="toggle()">
          <div class="social-flex">
            <div class="label" v-if="typeof value == 'object'">
              <img
                  :src="require('@/assets/social/' + value.icon)"
                  alt=""
                  class="icon"
              />{{ value.label }}
            </div>

            <div class="label" v-else>
              {{ value }}
            </div>

            <div :class="{ expanded: visible }">
              <img src="../assets/arrowDown.svg"/>
            </div>
          </div>
          <!--  class="arrow"  -->

          <transition name="slide-fade">
            <div style="   ;"

            >
              <div :class="{scaleAnimation: !visible, visible}" @click="visible = !visible">


                <!--            :class="{ hidden: !visible, visible }"     -->
                <ul v-if="visible">
                  <li
                      :class="{ current: item === value }"
                      v-for="(item, key) in options"
                      :key="key"
                      @click="selectValue(item)"
                  >
                    <img
                        :src="require('@/assets/social/' + item.icon)"
                        alt=""
                        class="icon"
                    />{{ item.label }}
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="aselect" :data-value="value2" :data-list="list2">
        <div class="selector" @click="toggleTwo()">
          <div class="social-flex">
            <div class="label" v-if="typeof value2 == 'object'">
              {{ value2.label }}
            </div>

            <div class="label" v-else>
              {{ value2 }}
            </div>

            <div :class="{ expanded: visible2 }">
              <img src="../assets/arrowDown.svg"/>
            </div>
          </div>


          <transition name="slide-fade">
            <div style=" ">
              <div :class="{scaleAnimation: !visible2, visible2}" @click="visible2 = !visible2">
                <!--       :class="{ hidden: !visible2, visible2 }"     -->
                <ul v-if="visible2">
                  <li
                      :class="{ current: item === value2 }"
                      v-for="(item, key) in optionsSecond"
                      :key="key"
                      @click="selectSecondVal(item)"
                  >
                    {{ item.label }}
                  </li>
                </ul>
              </div>

            </div>
          </transition>

        </div>
      </div>
      <!-- {{optionsThird}} -->
      <div class="aselect" :data-value="value3" :data-list="list3">
        <div class="selector" @click="toggleThird()">
          <div class="social-flex">
            <div class="label" v-if="typeof value3 == 'object'">
              {{ value3.label }}
            </div>

            <div class="label" v-else>
              {{ value3 }}
            </div>

            <div :class="{ expanded: visible3 }">
              <img src="../assets/arrowDown.svg"/>
            </div>
          </div>


          <transition name="slide-fade">
            <div >
              <div @click="visible3 = !visible3" :class="{scaleAnimation: !visible3, visible3}">
                <div v-if="visible3"
                     style="  border-left: 1px solid transparent;   width: 310px;  height: 335px; background: transparent;!important;">

                  <ul style="overflow-y: scroll; height: 330px;  width: 300px; border: 0" class="scrollbar"
                      id="style-1">
                    <li
                        :class="{ current: item === value3 }"
                        v-for="(item, key) in optionsThird"
                        :key="key"
                        @click="selectThirdVal(item)"
                    >
                      {{ item.label }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>


        </div>
      </div>
    </div>
    <div class="trouble-service-container">
      <span class="trouble-service-txt">{{ troubleService }}</span>
    </div>
  </div>
</template>

<script>
import apiService from "@/APIServices/APIService";
import {mapActions, mapState} from "vuex";

export default {
  name: "Dropdown",
  components: {},
  data() {
    return {
      troubleService: "",

      media: "",
      additionType: "",
      serviceType: "",

      value: "Instagram ",
      list: [
        "Instagram",
        "Facebook",
        "Twitter",
        "Telegram",
        "TikTok",
        "Youtube",
        "Pinterest",
        "Twitch",
        "Spotify",
        "Soundcloud",
        "Clubhouse",
        "Website",
      ],

      visible: false,
      options: [
        {label: "Instagram", icon: "Instagram.svg"},
        {label: "Facebook", icon: "Facebook.svg"},
        {label: "Twitter", icon: "Twitter.svg"},
        {label: "Telegram", icon: "Telegram.svg"},
        {label: "TikTok", icon: "TikTok.svg"},
        {label: "Youtube", icon: "Youtube.svg"},
        {label: "Pinterest", icon: "Pinterest.svg"},
        {label: "Twitch", icon: "Twitch.svg"},
        {label: "Spotify", icon: "Spotify.svg"},
        {label: "Soundcloud", icon: "Soundcloud.svg"},
        {label: "Clubhouse", icon: "Clubhouse.svg"},
        {label: "Website", icon: "Website.svg"},
      ],

      value2: "FOLLOWERS",
      list2: ["FOLLOWERS"],
      visible2: false,
      optionsSecond: [
        {label: "Followers"},
        {label: "Comments"},
        {label: "Likes"},
      ],

      value3: "-- Choose service",
      list3: [
        // "Max 1k (1 day delivery)",
        // "Max 5k (1 day delivery)",
        // "Max 15k (1 day delivery)",
      ],
      visible3: false,
      optionsThird: [
        // { label: "Max 1k (1 day delivery)" },
        // { label: "Max 5k (1 day delivery)" },
        // { label: "Max 15k (1 day delivery)" },
      ],
    };
  },
  computed: {
    ...mapState(["loca", "serviceId", "min", "max"]),
  },

  mounted() {
    for (let i = 100; i <= 1000000; i += 100) {
      this.optionsThird.push({
        label: i,
      });
    }
  },
  methods: {
    ...mapActions([
      "updateServiceId",
      "updateMin",
      "updateMax",
      "updateOrderBtn",
    ]),

    toggle() {
      if (!this.visible) {
        document.getElementsByClassName("social-flex")[0].style =
            "border-top: 1px solid #4464B4;  border-right: 1px solid #4464B4; border-left: 1px solid #4464B4; ";

        this.visible2 = false
        this.visible3 = false

        document.getElementsByClassName("social-flex")[1].style = "border: 0; ";
        document.getElementsByClassName("social-flex")[2].style = "border: 0; ";

      } else {
        document.getElementsByClassName("social-flex")[0].style = "border: 0; ";
      }

      this.visible = !this.visible;
    },
    toggleTwo() {
      if (!this.visible2) {
        document.getElementsByClassName("social-flex")[1].style =
            "border-top: 1px solid #4464B4;  border-right: 1px solid #4464B4; border-left: 1px solid #4464B4; ";


        this.visible = false
        this.visible3 = false

        document.getElementsByClassName("social-flex")[0].style = "border: 0; ";
        document.getElementsByClassName("social-flex")[2].style = "border: 0; ";


      } else {
        document.getElementsByClassName("social-flex")[1].style = "border: 0; ";
      }

      this.visible2 = !this.visible2;
    },
    toggleThird() {
      if (!this.visible3) {
        document.getElementsByClassName("social-flex")[2].style =
            "border-top: 1px solid #4464B4;  border-right: 1px solid #4464B4; border-left: 1px solid #4464B4; ";


        this.visible = false
        this.visible2 = false


        document.getElementsByClassName("social-flex")[0].style = "border: 0; ";
        document.getElementsByClassName("social-flex")[1].style = "border: 0; ";


      } else {
        document.getElementsByClassName("social-flex")[2].style = "border: 0; ";
      }

      this.visible3 = !this.visible3;
    },
    selectValue(option) {
      this.media = option;
      this.value = option;

      this.tryToSendRequest();
    },

    selectSecondVal(item) {
      this.additionType = item;
      this.value2 = item;

      this.tryToSendRequest(item);
    },
    selectThirdVal(item) {
      this.serviceType = item;
      this.value3 = item;

      this.tryToSendRequest();
    },

    tryToSendRequest(item) {
      if (
          this.media !== "" &&
          this.additionType !== "" &&
          this.serviceType !== ""
      ) {
        let data = {
          apiKey: "cf31cb381eae9003640551cfc063241a",
          action: "services",
        };

        apiService
            .postPanel(data)
            .then((res) => {
              if (res.status == 200) {
              }

              Object.keys(res).forEach((el) =>
                  res.data.forEach((e) => {
                    if (
                        e.name.includes(this.media.label) &&
                        this.additionType &&
                        this.serviceType
                    ) {
                      if (e.name.includes(this.additionType.label) == true) {
                        if (e.max.includes(this.serviceType.label) == true) {
                          this.updateServiceId(e.service);
                          this.updateMin(e.min);
                          this.updateMax(e.max);

                          this.updateOrderBtn(false);

                          console.log(
                              e,
                              e.min,
                              e.max,
                              e.service,
                              this.media.label,
                              this.additionType.label
                          );

                          document.getElementsByClassName(
                              "trouble-service-container"
                          )[0].innerHTML =
                              '<input type="text" class="userName"    />';

                          document.getElementsByClassName("userName")[0].style =
                              "border-radius: 20px; outline: none; border: none; width: 290px;margin-top: 20px;height: 60px;background: #EFEFEF;color: #444;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: normal; padding-left: 30px;";

                          document.getElementsByClassName(
                              "trouble-service-container"
                          )[0].innerHTML +=
                              "<span class='exampleContainer'><span class='example'>Example: </span> arianagrande</span>";

                          document.getElementsByClassName(
                              "exampleContainer"
                          )[0].style =
                              " display: block;padding-top: 10px;color: #444;font-family: Roboto;font-size: 14px;font-style: normal;font-weight: 400;line-height: normal;";

                          document.getElementsByClassName("example")[0].style =
                              "padding-top: 10px;color: #CECECE; font-family: Roboto; font-size: 14px; font-style: italic;font-weight: 400;line-height: normal;";

                          document.getElementsByClassName(
                              "trouble-service-container"
                          )[0].innerHTML +=
                              '<input type="text" class="amount"    />';

                          document.getElementsByClassName("amount")[0].style =
                              "border-radius: 20px; outline: none; border: none; width: 290px;margin-top: 20px;height: 60px;background: #EFEFEF;color: #444;font-family: Roboto;font-size: 18px;font-style: normal;font-weight: 400;line-height: normal; padding-left: 30px;";

                          document.getElementsByClassName(
                              "trouble-service-container"
                          )[0].innerHTML += `<span class="min">Min: </span><span class="minAmount"></span>`;

                          document.getElementsByClassName("min")[0].style =
                              "padding-top: 10px;color: #CECECE; font-family: Roboto; font-size: 14px;font-weight: 400;line-height: normal;";

                          document.getElementsByClassName(
                              "trouble-service-container"
                          )[0].innerHTML += `<span class="max">Max: </span><span class="maxAmount"></span>`;

                          document.getElementsByClassName(
                              "minAmount"
                          )[0].innerHTML = e.min;
                          document.getElementsByClassName(
                              "maxAmount"
                          )[0].innerHTML = e.max;

                          this.troubleService = "";
                          document.getElementsByClassName("social-flex")[2].style =
                              "border: 0";
                        }
                      }
                      if (this.serviceId == "") {
                        this.troubleService =
                            "This service is not active.Please, choose another";
                        document.getElementsByClassName("social-flex")[2].style =
                            "  border: 1px solid   #F00 ;border-radius: 20px ";
                        console.log("sorry");
                      } else {
                      }
                      console.log(this.serviceId);

                      // if (item) {
                      //   if(item.label == "FOLLOWERS")
                      //   item.label = ''
                      //   console.log(item.label);
                      // }
                      // console.log( e, e.service, this.media.label, e.name.includes(this.additionType.label),    this.additionType.label    );
                    }
                    // console.log(e.name,  this.media) ;
                  })
              );
              // console.log(res.service)
            })
            .catch((errors) => {
              console.log(errors);
            });
      }
    },
  },
};
</script>


<style scoped lang="scss">


.scaleAnimation {
  transition: all 0.3s ease;
}


.scrollbar {
  //margin-left: 30px;
  //float: right;
  height: 10px;

  //left: 10px;
  position: absolute;
  overflow-y: scroll;
  //margin-bottom: 25px;
}

/*
*  STYLE 1
*/

#style-1::-webkit-scrollbar-track {
  height: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  margin-right: 20px !important;
  border-radius: 20px;
  background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar {

  width: 15px;
  height: 10px;
  background-color: transparent;
}

#style-1::-webkit-scrollbar-thumb {
  margin-right: 20px;
  border-radius: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgb(68, 100, 180);
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


.trouble-service-container {
  border-top: 1px solid #efefef;
  width: 320px;
}

.trouble-service-txt {
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  color: #444;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}

::-webkit-scrollbar-button {
  background: red;
  width: 0;
  height: 0;
  border-left: 16px solid #8b7e79;
  border-top: 16px solid #8b7e79;
  border-bottom: 16px solid transparent;
  border-right: 16px solid transparent;
}

.social-flex {
  border-radius: 20px 20px 0 0;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aselect {
  width: 320px;
  margin: 20px 0;

  .selector {
    border-radius: 20px;
    background: #efefef;
    position: relative;
    // z-index: 1;
    .arrow {
      position: absolute;
      right: 25px;
      top: 40%;
      width: 0;
      height: 0;
    }

    .expanded {
      transform: rotateZ(180deg) translateY(2px);
    }

    .label {
      font-family: Roboto;
      font-size: 16px;
      color: #444;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      padding: 20px 20px 20px 30px;

    }
  }

  .icon {
    padding-right: 30px;
  }

  ul {
    border-bottom: 1px solid #4464b4;
    border-right: 1px solid #4464b4;
    border-left: 1px solid #4464b4;
    width: 318px;
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 -1px;
    font-size: 16px;
    position: absolute;
    z-index: 1;
    background: #efefef;
    border-radius: 0 0 20px 20px;
  }

  li {
    display: flex;
    align-items: center;
    height: 40px;
    color: #444;
    font-family: Roboto;
    font-size: 18px;
    padding: 0 20px 5px 20px;
    color: #666;

    &:hover {
      // color: white;
      background: #fff;
    }

    &:hover:last-child {
      border-radius: 0 0 20px 20px;
    }
  }

  li:last-child {
    padding-bottom: 15px;
  }

  .current {
    // background: #eaeaea;
  }

  //.hidden {
  //  display: none;
  //  visibility: hidden;
  //}

  .visible3 {  transition: all .2s ease-in-out;
    border-radius: 0 0 20px 20px;
    border-bottom: 1px solid #4464b4;
  }


  .visible,
  .visible2 {
    transition: all 0.3s ease;
  }


  .visible,
  .visible2,
  .visible3 {

    border-right: 1px solid #4464b4;
    border-left: 1px solid #4464b4;

    display: block;
    padding-top: 10px;
    margin-top: -5px;
    background: #efefef;
    visibility: visible;
  }
}

.faq-txt {
  color: #4464b4;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 37.5px */
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.description {
  display: block;
  padding: 8px 60px 20px 60px;
  color: #444;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.list-icon {
  padding-right: 35px;
}

.main-li-container {
  margin-bottom: 20px;
  width: 920px;
  min-height: 60px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px 0px rgba(105, 105, 105, 0.1);
}

select {
  border-radius: 20px;
  display: flex;
  align-items: center;
  min-height: 60px;
  border: none;
  width: 400px;
  padding: 20px 30px;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  color: #444;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden;
  box-shadow: none;
  border: 0 !important;
  background: url(../assets/arrowDown.svg) 92% / 15% no-repeat #efefef;
  background-size: auto;
  margin-bottom: 20px;
}

select > option {
  border-radius: 20px;
}

option > span {
  height: 20px;
  padding: 10px;
  font-size: 16px;
}

select::-ms-expand {
  display: none;
}

//   no one pays attention to this what can i do

@media (max-width: 900px) {
  .dropdown {
    width: 100%;
  }

  select {
    width: 320px;
    margin: 0 auto 20px auto;
  }
}
</style>
