<template>
   <div class="graph__animation">
      <div @click="showSlide">
        <img :src="Background" alt="Background" class="graph__arrow-background" >
        <img :src="Arrow" alt="Arrow" class="graph__arrow-arrow">
      </div>
      
      <div class='graph__slide' v-if="isSlideOpen">
        <p class="graph__slide-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
</template>
<script>
import Arrow from "@/images/Arrow.png";
import Background from "@/images/Background.png";
export default {
  props: {
    isSlideOpen: {
      type: Boolean,
      required:true,
    }
  },

  data() {
    return {
      Arrow: Arrow,
      Background:Background,
    }
  },
  methods: {
    showSlide() {
      this.$emit("showSlide")
    }
  }
}
</script>
<style lang="scss" scoped>
.graph{
  &__slide{
    // padding:44px 14px 44px 30px; 
    width: 400px;
    background: #FFFFFF;
    position:fixed;
    top:42px;
    right:0;
    transform: translateX(400px);

    // &-true{
    //   transform: translateX(0%);
    // }
    &-text{
      padding:44px 14px 44px 30px; 
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      color: #1391CE;
    }
  }
  &__arrow-background{
    position:fixed;
    top: 125px;
    right: 0;
    width: 68px;
    height: 74px;
  }
  &__arrow-arrow{
    position:fixed;
    top: 155px;
    right: 8px;
    width: 46px;
  }
}
 
</style>