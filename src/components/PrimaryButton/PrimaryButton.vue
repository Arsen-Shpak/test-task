<template>
  <button
    class='primary-button'
    @click="handler"
  >
    {{title}}
  </button>
</template>
<script>
export default {
props: {
  title: {
    type: String,
    required:true,
  }
},
  
  methods: {
    handler () {
      this.$emit ("primaryButton")
    }
  }
}
</script>
<style lang="scss" scoped>
.primary-button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 36px;
  background: #F7BA0E;
  border-radius: 18px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12.8px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #3B4A6B;
  &:hover {
    cursor: pointer;
    background-color: #A378FF;
  }
}
</style>