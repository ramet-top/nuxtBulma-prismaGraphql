<template>
  <div>
    <NavbaDef />
    <Nuxt /> 
    <FooterDef />
  </div>
</template>

<script>
import NavbaDef from '~/components/Lay/navbar'
import FooterDef from '~/components/Lay/footer'
export default {
  data() {
    return {
      
    };
  },

  components: {
    NavbaDef,
    FooterDef
  }

};
</script>
