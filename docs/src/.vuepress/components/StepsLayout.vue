<template>
<div class="full">
  <google-codelab :id="data.codelabId" :title="data.codelabTitle">
    <div v-if="data.steps && data.steps.length">
      <div v-for="(step, index) in data.steps" :key="index">
        <google-codelab-step :label="step.label" :duration="step.duration">
          {{ step.details }}
        </google-codelab-step>
      </div>
    </div>
  </google-codelab>

  <script src="https://storage.googleapis.com/codelab-elements/native-shim.js"></script>
  <script src="https://storage.googleapis.com/codelab-elements/custom-elements.min.js"></script>
  <script src="https://storage.googleapis.com/codelab-elements/prettify.js"></script>
  <script src="https://storage.googleapis.com/codelab-elements/codelab-elements.js"></script>
</div>

</template>

<script>

export default {
  name: 'StepsLayout',

  computed: {
    data () {
      return this.$page.frontmatter
    }
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