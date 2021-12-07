<template>

  <div>
  <h1>YOUR TOKEN IS</h1>
  <h6>{{this.$store.state.token}}</h6>
  <router-link to="/cloud">get cloud id</router-link>
  

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'success',

  components: {},

  data() {
    return {   
      
    }
  },
  

  methods: {
     
    
  },

  mounted() {
     const authCode= this.$route.query.code
          const header={
               'Content-Type': 'application/json' 
          };
          const data={
               "grant_type": "authorization_code",
              "client_id": "63k79pW3ajKk93HJxMP6KHcHMiNYiINA",
              "client_secret": "kzgdW-c8sUzPKqtb0z-mU6fdBFKDzDwe0vAnbrTcOHFCyJMPOCeH1PVO5Emn7KsH",
              "code": authCode,
              "redirect_uri": "https://localhost:8080/success"
          };

          axios.post('https://auth.atlassian.com/oauth/token',data,header
          ).then(res=>{console.log(res.data)          
          this.token=res.data.access_token
          this.$store.dispatch('setToken',this.token)
          })
          .catch(error=>{console.log(error)})


  }
}
</script>



<style>
</style>