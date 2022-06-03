<template>
<div class="full">
  <google-codelab :id="data.codelabId" :title="data.codelabTitle">
    <Content/>
  </google-codelab>

</div>

</template>

<script>

export default {
  name: 'StepLayout',

  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400|Roboto:400,300,400italic,500,700|Roboto+Mono' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://storage.googleapis.com/codelab-elements/codelab-elements.css' },
    ],
    meta: [ 
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0,initial-scale=1.0, user-scalable=yes' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://storage.googleapis.com/codelab-elements/native-shim.js'}, 
      { type: 'text/javascript', src: 'https://storage.googleapis.com/codelab-elements/custom-elements.min.js'}, 
      { type: 'text/javascript', src: 'https://storage.googleapis.com/codelab-elements/prettify.js'}, 
      { type: 'text/javascript', src: 'https://storage.googleapis.com/codelab-elements/codelab-elements.js'}, 
    ]
  }
}
</script>



<style lang="stylus">
#app
.full
  width: 100%
  height 100%
#next-step 
google-codelab #drawer ol li[completed] .step:before 
  background $accentColor
#previous-step
  color: $accentColor
</style>