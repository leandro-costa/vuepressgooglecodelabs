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
  created() {
    if (typeof window !== 'undefined') {
      let headElement = window.document.createElement("script");
      headElement.setAttribute("src", "https://storage.googleapis.com/codelab-elements/native-shim.js");
      window.document.head.appendChild(headElement);

      headElement = window.document.createElement("script");
      headElement.setAttribute("src", "https://storage.googleapis.com/codelab-elements/custom-elements.min.js");
      window.document.head.appendChild(headElement);

      headElement = window.document.createElement("script");
      headElement.setAttribute("src", "https://storage.googleapis.com/codelab-elements/prettify.js");
      window.document.head.appendChild(headElement);

      headElement = window.document.createElement("script");
      headElement.setAttribute("src", "https://storage.googleapis.com/codelab-elements/codelab-elements.js");
      window.document.head.appendChild(headElement);

      headElement = window.document.createElement("meta");
      headElement.setAttribute("name", "viewport");
      headElement.setAttribute("content", "width=device-width, minimum-scale=1.0,initial-scale=1.0, user-scalable=yes");
      window.document.head.appendChild(headElement);

    }
  },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>



<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400|Roboto:400,300,400italic,500,700|Roboto+Mono");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://storage.googleapis.com/codelab-elements/codelab-elements.css");
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