<template>
  <div class="graph" v-touch:swipe="swipeHandler">
    <GraphSlider :isSlideOpen="isSlideOpen" @showSlide="showSlide" />
    <div class="graph__upperSection">
      <div class="graph__section">
        <p class="graph__section-text">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <div class="graph__section-question">
          <img
            :src="Question"
            alt="Question"
            class="graph__section-img"
            @click="showPopup1"
          />
        </div>
      </div>
    </div>
    <div class="graph__mainSection">
      <img :src="Graph" alt="Graph" class="graph__mainSection-img" />
      <div class="graph__section">
        <div class="graph__section-question">
          <img
            :src="Question"
            alt="Question"
            class="graph__section-img"
            @click="showPopup2"
          />
        </div>
        <p class="graph__section-text" style="text-align: left">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful.
        </p>
      </div>
    </div>
    <div class="graph__images">
      <img :src="GraphFooter" alt="GraphFooter" class="graph__images-img" />
      <img :src="GraphFooter" alt="GraphFooter" class="graph__images-img" />
    </div>
    <GraphPopup style="top: 42px" @hidePopup="hidePopup1" v-if="popup1" />
    <GraphPopup
      style="top: 334px; right: 22px"
      @hidePopup="hidePopup2"
      v-if="popup2"
    />
  </div>
</template>
<script>
import Question from "@/images/question.png";
import Graph from "@/images/Graph.png";
import GraphFooter from "@/images/GraphFooter.png";
import Arrow from "@/images/Arrow.png";
import Background from "@/images/Background.png";
import GraphPopup from "@/components/GraphPopup/GraphPopup.vue";
import { gsap } from "gsap";
import GraphSlider from "@/components/GraphSlider/GraphSlider.vue";

export default {
  components: {
    GraphPopup,
    GraphSlider,
  },

  data() {
    return {
      Question: Question,
      Graph: Graph,
      GraphFooter: GraphFooter,
      Arrow: Arrow,
      Background: Background,
      popup1: false,
      popup2: false,
      slider: false,
      isSlideOpen: false,
    };
  },
  methods: {
    hidePopup1() {
      this.popup1 = false;
    },
    hidePopup2() {
      this.popup2 = false;
    },
    showPopup1() {
      this.popup1 = true;
    },
    showPopup2() {
      this.popup2 = true;
    },
     showSlide() {
      // let name = gsap.timeline();
      if (this.isSlideOpen) {
      //   name.to(".graph__animation", {
      //     x: 24,
      //     duration: 1,
      //   });
      //   name.to(".graph__arrow-arrow", {
      //     rotation: 0,
      //     duration: 1,
      //   });
        gsap.to(".graph__animation", {
          x: 24,
          duration: 1,
        });
        gsap.to(".graph__arrow-arrow", {
          rotation: 0,
          duration: 1,
          onComplete: () => {
            this.isSlideOpen = !this.isSlideOpen;
          }
        });
      } else {
        this.isSlideOpen = !this.isSlideOpen;

        gsap.to(".graph__animation", {
          x: -376,
          duration: 1,
        });
        gsap.to(".graph__arrow-arrow", {
          rotation: 180,
          duration: 1,
        });
      }
      // this.isSlideOpen = !this.isSlideOpen;
    },
    swipeHandler(direction) {
      if (direction === "right") {
        this.$router.go(-1);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.graph {
  padding: 0 24px;
  background: #e9f5ff;
  &__slide {
    width: 400px;
    background: #ffffff;
    position: fixed;
    top: 42px;
    right: 0;
    transform: translateX(400px);
    &-text {
      padding: 44px 14px 44px 30px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      color: #1391ce;
    }
  }
  &__arrow-background {
    position: fixed;
    top: 125px;
    right: 0;
    width: 68px;
    height: 74px;
  }
  &__arrow-arrow {
    position: fixed;
    top: 155px;
    right: 8px;
    width: 46px;
  }
  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 475px;

    &-text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: 0.04em;
      color: #000000;
      width: 400px;
      text-align: right;
    }
    &-question {
      padding: 9px 21px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 60px;
      width: 60px;
    }
    &-img {
      object-fit: contain;
      object-position: center;
      width: 18px;
      height: 42px;
    }
  }
  &__upperSection {
    margin-top: 42px;
    margin-bottom: 62px;
  }
  &__mainSection {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 23px;
    &-img {
      object-fit: contain;
      object-position: center;
      width: 364px;
      height: 331px;
    }
  }
  &__images {
    display: flex;
    justify-content: center;
    align-items: center;
    &-img {
      width: 500px;
      height: 250px;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
