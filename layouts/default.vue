<template>
  <div class="c-app">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <nuxt></nuxt>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>

<script>
  import TheSidebar from "../components/theme/TheSidebar";
  import TheHeader from "../components/theme/TheHeader";
  import TheFooter from "../components/theme/TheFooter";

  export default {
    components: {
      TheSidebar,
      TheHeader,
      TheFooter
    },
  }
</script>

<style>
</style>
