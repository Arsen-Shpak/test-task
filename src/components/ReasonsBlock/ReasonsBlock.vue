<template>
  <div class='reasons__content-block main'>
      <div class='main__gallery'> 
        <img 
          :src="Main1" 
          alt='Main1' 
          class='main__gallery-img'
        >
      </div>
      <div class='main__description'>
        <h4 class='main__description-name'>Optimised for easy use</h4>
        <h2 class='main__description-title'>Built-in Device Presets</h2>
        <p class='main__description-text'>
          Get started with HandBrake in seconds by choosing a profile optimised for your device, or choose a universal profile for standard or high quality conversions. Simple, easy, fast. For those that want more choice, tweak many basic and advanced options to improve your encodes.
        </p>
      </div>
      
  </div>
</template>
<script>
import Main1 from "@/images/Main1.svg";
import Main2 from "@/images/Main2.svg";
import Correct from "@/images/Correct.svg";
export default {
  data() {
    return {
      Main1: Main1,
      Main2: Main2,
      Correct:Correct,
    }
  }
}
</script>
<style scoped lang="scss">
.main{
   display: flex;
    justify-content: space-between;
    padding:0 113px;
  &__description{
    width:319px;
    &-name{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 11.3778px;
      line-height: 15px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #25468A;
      margin-bottom: 11px;
    }
    &-title{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 22.7556px;
      line-height: 31px;
      letter-spacing: 0.01em;
      color: #1391CE;
      margin-bottom: 23px;
    }
    &-text{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12.8px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
      margin-bottom: 17px;
    }
    &-listTitle{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 15.6444px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #1391CE;
      margin-bottom:11px;
    }
  }
 
  &__gallery-img{
    width: 387px;
    height: 290px;
    object-fit: contain;
    object-position: center;
  }
}

.list{
  &__item {
    display:flex;
    justify-content: flex-start;
    align-items:start;
    margin-bottom: 6px;
  }
  &__text{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: #4F4F4F;
    padding-left:13px;
  }
  &__img{
    width: 14px;
    height: 14px;
  }
}
</style>