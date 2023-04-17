<template>
  <div class="wrapper">
    <img :src="Cross" alt="Cross" class="popup__cross" @click="hidePopup" />
    <div class="popup">
      <p class="popup__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  </div>
</template>
<script>
import Cross from "@/images/Cross.png";
export default {
  data() {
    return {
      Cross: Cross,
    };
  },
  methods: {
    hidePopup() {
      this.$emit("hidePopup");
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 480px;
  height: 330px;
  background-color: rgba(255, 255, 255, 0.95);
}
.popup {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
  width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__text {
    padding: 58px 17px 58px 36px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    width: 426px;
    color: #1391ce;
  }
  &__cross {
    object-fit: contain;
    object-position: center;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
