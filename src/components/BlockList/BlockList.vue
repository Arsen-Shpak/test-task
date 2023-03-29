<template>
<div class='blockList'>
  <div class='blockList__item' v-for="item in blocks" :key="item.id">
    {{ item.text }}
  </div>
</div>
</template>
<script>
import { gsap } from "gsap";
export default {
  props: {
    blocks: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
    this.addBlocks();
  },
  methods: {
    addBlocks () {
      gsap.to ('.blockList__item', {
        opacity: 1,
        duration: 1,
        delay:2,
        stagger: 2,
      });
    }
  },
}
</script>
<style lang='scss' scoped>
.blockList{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right:113px;
  gap:22px;

  &__item{
    opacity:0;
    width: 250px;
    padding:49px 0 49px 0;
    background: #1391CE;
    box-shadow: 0px 7.11111px 10.6667px rgba(31, 100, 133, 0.1), 0px 2.84444px 4.26667px rgba(0, 0, 0, 0.05);
    border-radius: 5.68889px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15.6444px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }

  &__text {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15.6444px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }
}
</style>