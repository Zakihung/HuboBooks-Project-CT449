<script>
import HeaderHubo from '@/components/HeaderHubo.vue'
import FooterHubo from '@/components/FooterHubo.vue'

export default {
  components: {
    HeaderHubo,
    FooterHubo
  }
}
</script>

<template>
  
  <div class="header">
    <HeaderHubo />
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
  <div class="footer">
    <FooterHubo />
  </div>
  
</template>

<style>
  @import "@/assets/css/style.css";
    @import "@/assets/css/bootstrap.min.css";
    @import "@/assets/css/bootstrap-table.min.css";
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
</style>