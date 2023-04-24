<template>
  <div class="reasons">
    <div class="reasons__header">
      <PrimaryButton
        title="Back"
        class="reasons__button"
        @primaryButton="goBack"
      />
      <h2 class="reasons__title">Just a few reason you will love HandBrake</h2>
      <PrimaryButton
        title="Next"
        class="reasons__button"
        @primaryButton="goNext"
      />
    </div>
    <div class="reasons__content">
      <div class="reasons__content-block main">
        <div class="main__gallery">
          <img :src="Main1" alt="Main1" class="main__gallery-img" />
        </div>
        <div class="main__description">
          <h4 class="main__description-name">Optimised for easy use</h4>
          <h2 class="main__description-title">Built-in Device Presets</h2>
          <p class="main__description-text">
            Get started with HandBrake in seconds by choosing a profile
            optimised for your device, or choose a universal profile for
            standard or high quality conversions. Simple, easy, fast. For those
            that want more choice, tweak many basic and advanced options to
            improve your encodes.
          </p>
        </div>
      </div>
      <div class="reasons__content-block main">
        <div class="main__description">
          <h4 class="main__description-name">Modern video formats</h4>
          <h2 class="main__description-title">Supported Input Sources</h2>
          <p class="main__description-text">
            Handbrake can process most common multimedia files and any DVD or
            BluRay sources that do not contain any kind of copy protection..
          </p>
          <h2 class="main__description-listTitle">Outputs</h2>
          <ul class="main__description-list list">
            <span class="list__item">
              <img :src="Correct" alt="Correct" class="list__img" />
              <li class="list__text">File Containers: .MP4(.M4V) and .MKV</li>
            </span>
            <span class="list__item">
              <img :src="Correct" alt="Correct" class="list__img" />
              <li class="list__text">
                Video Encoders: H.265 (x265 and QuickSync), H.264(x264 and
                QuickSync), H.265 MPEG-4 and MPEG-2, VP8, VP9 and Theora
              </li>
            </span>
            <span class="list__item">
              <img :src="Correct" alt="Correct" class="list__img" />
              <li class="list__text">
                Audio Encoders: AAC / HE-AAC, MP3, Flac, AC3, or Vorbis
              </li>
            </span>
            <span class="list__item">
              <img :src="Correct" alt="Correct" class="list__img" />
              <li class="list__text">
                Audio Pass-thru: AC-3, E-AC3, DTS, DTS-HD, TrueHD, AAC and MP3
                tracks
              </li>
            </span>
          </ul>
        </div>
        <div class="main__gallery">
          <img :src="Main2" alt="Main1" class="main__left-img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton.vue";
import Main1 from "@/images/Main1.svg";
import Main2 from "@/images/Main2.svg";
import Correct from "@/images/Correct.svg";
import { gsap } from "gsap";

export default {
  components: {
    PrimaryButton,
  },

  data() {
    return {
      Main1: Main1,
      Main2: Main2,
      Correct: Correct,
      animation: [],
    };
  },
  mounted() {
    this.addBlocks();
  },

  methods: {
    async addBlocks() {
      const name = gsap.timeline();
      gsap.to(".main__gallery", {
        opacity: 1,
        duration: 1,
        delay: 2,
        stagger: 4,
      });
      name.to(".main__description", {
        opacity: 1,
        duration: 1,
        delay: 4,
        stagger: 4,
      });
      name.to(".reasons__button", {
        opacity: 1,
        duration: 1,
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    goNext() {
      this.$router.push({ name: "testTask" });
    },
  },
};
</script>
<style lang="scss" scoped>
.reasons {
  background: #e9f5ff;
  height: 100vh;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    margin-bottom: 18px;
  }

  &__title {
    padding: 11px 0 17px 0;
    width: 275px;
    margin: 0 auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #1391ce;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 6px;
      width: 114px;
      background-color: #f7ba0e;
      opacity: 1;
      position: absolute;
      bottom: 0;
      left: 80px;
    }
  }
  &__button {
    opacity: 0;
  }
}

.main {
  display: flex;
  justify-content: space-between;
  padding: 0 113px;
  &__description {
    width: 319px;
    opacity: 0;
    &-name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11.3778px;
      line-height: 15px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #25468a;
      margin-bottom: 11px;
    }
    &-title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 22.7556px;
      line-height: 31px;
      letter-spacing: 0.01em;
      color: #1391ce;
      margin-bottom: 23px;
    }
    &-text {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.8px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4f4f4f;
      margin-bottom: 17px;
    }
    &-listTitle {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15.6444px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #1391ce;
      margin-bottom: 11px;
    }
  }
  &__gallery {
    opacity: 0;
    &-img {
      // opacity: 0;

      width: 387px;
      height: 290px;
      object-fit: contain;
      object-position: center;
    }
  }
}

.list {
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    margin-bottom: 6px;
  }
  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #4f4f4f;
    padding-left: 13px;
  }
  &__img {
    width: 14px;
    height: 14px;
  }
}
</style>
