<template>
  <div class="container">
    <div class="hero-body">
      <!-- landing -->
      <Landing /> 

      <!-- News -->
      <news />

      <!-- information -->
      <Information />

      <!-- advisor -->
      <Advisor />

    </div>
  </div>
</template>

<script>
import Landing from '~/components/DetailPage/landing'
import News from '~/components/DetailPage/news'
import Information from '~/components/DetailPage/information'
import Advisor from '~/components/DetailPage/advisor'

export default {
  head: {
    title: "หน้าหลัก"
  },
  components:{
    Landing,
    News,
    Information,
    Advisor
    
  }
  
};
</script>

<style scoped>
</style>