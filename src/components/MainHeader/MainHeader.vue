<template>
  <div class="navigation">
    <div class="navigation__wrapper">
      <div class="navigation__left">
        <router-link 
          to="/" 
          class='navigation__logo-link'
        >
          <img 
            :src="Logo" 
            alt="Logo" 
            class='navigation__logo-img'
          >
          <p 
            class='navigation__name-link'
          >
            HandBrake
          </p>
        </router-link>
        


      </div>
      <div class="navigation__rigth">
        <nav class="navigation__page">
          <ul class='navigation__list'>
            <li 
              v-for="route in routes"
              :key="route"
              class='navigation__item'
            >
              <router-link
                to="/"
                class="navigation__link"
              >
                {{ route }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/images/Logo.png";
export default {
  data() {
    return {
      Logo: Logo,
      routes:["Docs","GitHub","News","Community & Support", "Downloads"]
    }
  }
}

</script>

<style lang="scss" scoped>
.navigation {
  // background-color: green;
  margin:30px 113px 70px 0;

  &__wrapper{
    height: 38px;
		max-width: 1024px;
		display: flex;
		justify-content: space-between;
		// margin: 0 auto;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__logo-link{
    display: flex;
    align-items: center;
    width: 38px;
    height: 38px;
  }
  &__name-link{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #25468A;
    text-decoration: none;
    cursor: pointer;
  }
  
  &__logo-img {
    object-fit: contain;
		object-position: center;
		height: 100%;
		width: 100%;
  }

  &__rigth {
    display:flex;
  }

  &__page {
    display: flex;
    align-items: center;
  }

  &__list{
    display:flex;
    align-items: center;
    flex-direction: row;
    gap:23px;
  }

  &__item {
    line-height: 13px;
  }

  &__item:last-child{
    background: #FFFFFF;
    border-radius: 17px;
    padding: 13px 6px;
  }

  &__link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #25468A;
  }

}
</style>