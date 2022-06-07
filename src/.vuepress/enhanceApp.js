/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import GoogleLogin from 'vue-google-login'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(GoogleLogin, {
    client_id: '452127015071-5n1dmf344kc16942311g79pps8eh4j4k.apps.googleusercontent.com'
  })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    }
  })
}
