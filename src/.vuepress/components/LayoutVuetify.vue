<template>
  <v-app light>
    <Navbar/>
    <Content />
  </v-app>
</template>
<script>
import Navbar from '@theme/components/Navbar.vue'
export default {
  name: 'LayoutVuetify',
  components: {
    Navbar
  },
}
</script>