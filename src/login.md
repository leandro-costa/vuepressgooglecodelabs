---
layout: LayoutVuetify
---

# Login Requerido

Para acessar as paginas desse material é necessário se identificar.

<GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>

<GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin>

<script>
    import GoogleLogin from 'vue-google-login'
    export default {
        name: 'GoogleLoginApp',
        data() {
            return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "452127015071-5n1dmf344kc16942311g79pps8eh4j4k.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 125,
                    height: 50,
                }
            }
        },
        components: {
            GoogleLogin
        },
        methods: {
            onSuccess(googleUser) {
                console.log(googleUser);
                // This only gets the user information: id, name, imageUrl and email
                //console.log(googleUser.getBasicProfile());
                this.$router.push({ path: '/home' })
                .catch(error => {
                    console.info(error.message)
                });
            },
            onFailure(){
                console.log("google login Failure");

            }
        }
    }
</script>