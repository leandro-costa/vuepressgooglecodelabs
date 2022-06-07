---
layout: LayoutVuetify
---

# stepper
<v-stepper v-model="e1"><v-stepper-header>
<v-stepper-step :complete="e1 > 1" step="1">Passo 1</v-stepper-step><v-divider></v-divider>
<v-stepper-step :complete="e1 > 2" step="2">Passo 2</v-stepper-step><v-divider></v-divider>
<v-stepper-step :complete="e1 > 3" step="3">Passo 3</v-stepper-step><v-divider></v-divider>
<v-stepper-step :complete="e1 > 4" step="4">Passo 4</v-stepper-step><v-divider></v-divider>
<v-stepper-step step="5">Passo 5</v-stepper-step></v-stepper-header><v-stepper-items>
<v-stepper-content step="1"><v-card class="mb-12" color="grey lighten-1" height="500px" width="100%"></v-card><v-btn color="primary" @click="e1 = 2">Continue</v-btn><v-btn text>Cancel</v-btn></v-stepper-content>
<v-stepper-content step="2"><v-card class="mb-12" color="grey lighten-1" height="500px" width="100%"></v-card><v-btn color="primary" @click="e1 = 3">Continue</v-btn><v-btn text>Cancel</v-btn></v-stepper-content>
<v-stepper-content step="3"><v-card class="mb-12" color="grey lighten-1" height="500px" width="100%"></v-card><v-btn color="primary" @click="e1 = 4">Continue</v-btn><v-btn text>Cancel</v-btn></v-stepper-content>
<v-stepper-content step="4"><v-card class="mb-12" color="grey lighten-1" height="500px" width="100%"></v-card><v-btn color="primary" @click="e1 = 5">Continue</v-btn><v-btn text>Cancel</v-btn></v-stepper-content>
<v-stepper-content step="5"><v-card class="mb-12" color="grey lighten-1" height="500px" width="100%"></v-card><v-btn color="primary" @click="e1 = 1">Restart</v-btn></v-stepper-content></v-stepper-items></v-stepper>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>