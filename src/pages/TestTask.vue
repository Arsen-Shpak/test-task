<template>
  <div class="testTask" v-touch:swipe="swipeHandler">
    <div class="testTask__header">
      <img :src="TestTask" alt="TestTask" class="testTask__img" />
    </div>
    <div class="testTask__main">
      <section class="testTask__main-section column">
        <PrimaryButton
          title="Go to main page"
          class="column__button"
          @primaryButton="goToMain"
        />
        <h2 class="column__title">Open Source Licence</h2>
        <p class="column__text">
          Most of HandBrake's source code is covered by the GNU General Public
          License, version 2. A copy of which is included with every release in
          the COPYING file. Portions are covered under BSD 3 Clause
        </p>
      </section>
      <section class="testTask__main-section column">
        <PrimaryButton
          title="Say thanks!"
          class="column__button"
          @primaryButton="showPopup"
        />
        <h2 class="column__title">Credits</h2>
        <p class="column__text">
          HandBrake uses a lot of (L)GPL or BSD licensed libraries:A list of
          these is available here.
          <br />
          <br />
          Thank their authors!
        </p>
      </section>
    </div>
    <footer class="testTask__footer">
      <div class="testTask__footer-section">
        <p class="testTask__footer-text">
          Copyright 2020 ©
          <span class="testTask__footer-team">The HandBrake Team</span>
          | Privacy Policy
        </p>
        <p class="testTask__footer-text">Found a bug? Talk to us</p>
      </div>
    </footer>
    <TestTaskPopup v-if="popup" @hidePopup="hidePopup" />
  </div>
</template>
<script>
import TestTask from "@/images/TestTask.png";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton.vue";
import TestTaskPopup from "@/components/TestTaskPopup/TestTaskPopup.vue";
export default {
  components: {
    PrimaryButton,
    TestTaskPopup,
  },
  data() {
    return {
      TestTask: TestTask,
      popup: false,
    };
  },
  methods: {
    goToMain() {
      this.$router.push({ name: "main" });
    },
    showPopup() {
      this.popup = true;
    },
    hidePopup() {
      this.popup = false;
    },
    swipeHandler(direction) {
      if (direction === "left") {
        this.$router.push({ name: "graph" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.testTask {
  background: #e9f5ff;
  height: 100vh;
  overflow: hidden;
  &__header {
    margin-bottom: 31px;
    border-bottom: 5px solid #1391ce;
  }
  &__img {
    max-width: 1024px;
    width: 100%;
    height: 439px;
    object-fit: contain;
    object-position: center;
  }
  &__main {
    display: flex;
    justify-content: center;
    gap: 118px;
    align-items: center;
    margin-bottom: 34px;
  }
  &__footer {
    background-color: #1391ce;
    padding: 22px 80px 41px;

    &-section {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-top: 23px;
      border-top: 1px solid #e3e3e3;
    }
    &-text {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 15px;
      letter-spacing: 0.01em;
      color: #302e2f;
    }
    &-team {
      color: #ffffff;
    }
  }
}
.column {
  width: 342px;
  &__title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #1391ce;
    margin-bottom: 11px;
  }
  &__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #4f4f4f;
  }
  &__button {
    margin-bottom: 11px;
  }
}
</style>
