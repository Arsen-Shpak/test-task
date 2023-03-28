<template>
  <div class="wrapper">
    <div class="popup">
      <img 
        :src="Cross" 
        alt="Cross"
        class="popup__cross"
        @click="hidePopup"
      >
      <h2 class="popup__title">Thank you for this test task!</h2>
      <h3 class="popup__name">YOU HAVE DONE A GREAT JOB!</h3>
      <img 
        :src="GreatJob" 
        alt="GreatJob"
        class="popup__img"
      >
    </div>
  </div>
  
</template>
<script>
import GreatJob from "@/images/GreatJob.svg";
import Cross from "@/images/Cross.png";

export default {
  data() {
    return {
      GreatJob: GreatJob,
      Cross:Cross,
    }
  },
  methods: {
    hidePopup() {
      this.$emit("hidePopup")
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: center;
  align-items:center;
  position: absolute;
  top:0;
  bottom:0;
  right: 0;
  left:0;
  background-color: rgb(66 66 66 / 67%);
}
.popup{
  position: fixed;
  top:141px;
  // right: 0;
  // left:0;
  background:rgba(255, 255, 255, 0.85);
  width: 800px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;

  &__cross{
    object-fit: contain;
    object-position: center;
    width: 25px;
    height: 25px;
    position: absolute;
    top:15px;
    right:15px;
    cursor: pointer;
  }
  &__title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #1391CE;
    margin-bottom: 3px;
  }
  &__name{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #1391CE;

  }
  &__img{
    width: 346px;
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
}
</style>