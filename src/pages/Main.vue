<template>
  <div class="homepage">
    <Header />
    <MainHero />
    <BlockList :blocks="mainList" v-if="mainList.length" />
  </div>
</template>
<script>
import Header from "@/components/MainHeader/MainHeader.vue";
import MainHero from "@/components/MainHero/MainHero.vue";
import BlockList from "@/components/BlockList/BlockList.vue";
export default {
  components: {
    Header,
    MainHero,
    BlockList,
  },
  data() {
    return {
      mainList: [
        {
          text: "Convert video from nearly any format",
          id: 0,
        },
        {
          text: "Free and Open Source video converter",
          id: 1,
        },
        {
          text: "Multi-Platform desktop application",
          id: 2,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.homepage {
  padding-left: 113px;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9f5ff 100%),
    rgba(19, 145, 206, 0.7);
}
</style>
