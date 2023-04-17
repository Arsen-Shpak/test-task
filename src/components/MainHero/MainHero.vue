<template>
  <div class="hero">
    <div class="hero__left">
      <h1 class="hero__name">Handbrake</h1>
      <h4 class="hero__surname">The open source video transcoder</h4>
      <p class="hero__description">
        HandBrake is a tool for converting video from nearly any format to a
        selection of modern, widely supported codecs
      </p>
      <PrimaryButton title="Next" @primaryButton="goToNextPage" />
    </div>
    <div class="hero__right">
      <img :src="Notebook" alt="Notebook" class="hero__img" />
    </div>
  </div>
</template>
<script>
import Notebook from "@/images/Notebook.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton.vue";

export default {
  components: { PrimaryButton },
  data() {
    return {
      Notebook: Notebook,
    };
  },
  methods: {
    goToNextPage() {
      this.$router.push({ name: "reasons" });
    },
  },
};
</script>
<style lang="scss" scoped>
.hero {
  display: flex;
  margin-bottom: 45px;
  &__rigth {
    position: relative;
  }

  &__name {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 65px;
    line-height: 77px;
    color: #25468a;
    margin-bottom: 5px;
  }

  &__surname {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #3b4a6b;
    margin-bottom: 22px;
  }

  &__description {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14.2222px;
    line-height: 17px;
    color: #3b4a6b;
    margin-bottom: 11px;
  }

  &__img {
    width: 547px;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
