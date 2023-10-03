<template>
  <div class="FAQ">
    <span class="faq-txt">FAQ</span>

    <ul>
      <li
        v-for="(key, index) in ul"
        style="display: block"
        class="main-li-container"
        v-on:click="key.clicked = !key.clicked"
      >
        <input type="checkbox" :id="index" />
        <label for="index" class="first">
          {{ key.message }}
          <span class="list-icon" v-if="!key.clicked">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M10.1739 1.17391C10.1739 0.525579 9.64833 0 9 0C8.35167 0 7.82609 0.525579 7.82609 1.17391V7.82609H1.17391C0.525579 7.82609 0 8.35166 0 9C0 9.64833 0.525579 10.1739 1.17391 10.1739H7.82609V16.8261C7.82609 17.4744 8.35167 18 9 18C9.64833 18 10.1739 17.4744 10.1739 16.8261V10.1739H16.8261C17.4744 10.1739 18 9.64833 18 9C18 8.35167 17.4744 7.82609 16.8261 7.82609H10.1739V1.17391Z"
                fill="#4464B4"
              />
            </svg>
          </span>

          <span class="list-icon" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
            >
              <path
                d="M10.1739 0.82605L9 0.82613H8.5H7.5H1.17391C0.525579 0.82613 0 1.35171 0 2.00004C0 2.64838 0.525579 3.17395 1.17391 3.17395H7.82609H9L10.1739 3.17396H16.8261C17.4744 3.17396 18 2.64838 18 2.00004C18 1.35171 17.4744 0.826131 16.8261 0.826131L10.1739 0.82605Z"
                fill="#4464B4"
              />
            </svg>
          </span>
        </label>

        <span class="description" v-if="key.clicked">
          {{ key.desc }}

          <span style="display: block" v-if="key.desc2">
            {{ key.desc2 }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
export default {
  name: "FAQ",
  components: {},
  data() {
    return {
      ul: [
        {
          message: 'Are Followers, Likes, Comments from real accounts?',
          desc: "i dont know",
          clicked: false,
        },
        {
          message: "Can social networks block my account?",
          desc: "i dont know",
          clicked: false,
        },
        {
          message: "How long it takes to execute my order?",
          desc: "Orders usually deliver in 1-3 days, but often in 1 hour. It depends on server loadness",
          desc2: "Save Order ID to track the status of your order ",
          clicked: false,
        },
        {
          message: "How i know that my order delivered?",
          desc: "i dont know",
          clicked: false,
        },
      ],
    };
  },
  computed: {

...mapState(['loca' ]),
},
methods: {
    ...mapActions([  'updateLoca', 'updateCurrentLang']),
   
    // changeIcon(){
    //   this.clicked = !this.clicked
    // }
  },
};
</script>

<style scoped lang="scss">
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

.first {
  display: flex;
  align-items: center;
  min-height: 60px;
  color: #4464b4;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
}

/* Functionality */
input[type="checkbox"] {
  display: none;
}

label {
  // ensure lable is "clickable" instead of the hidden input
  display: block;
}

input[type="checkbox"] ~ ul {
  height: 0;
  transform: scaleY(0);
}

input[type="checkbox"]:checked ~ ul {
  height: 100%;
  transform-origin: top;
  transition: transform 0.2s ease-out;
  transform: scaleY(1);
}

/* fanciness */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

label {
  justify-content: space-between;
  cursor: pointer;
  padding: 0 0 0 35px;
  border-bottom: none;
}

ul ul li {
  padding: 10px;
}

.FAQ{
width: 100%
}


@media (max-width: 390px) {

  .FAQ{
    margin: auto;
    width: 328px;
  }

  .main-li-container {
    width: 100%;
  }
}
</style>
