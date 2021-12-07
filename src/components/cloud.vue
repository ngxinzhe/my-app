<template>

  <div>
  <h1>cloud ID</h1>
  
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'cloud',

  components: {},

  data() {
    return {     
    }
  },
  

  methods: {
       
  },

  mounted() {

        //   const header={
        //        'Authorization': `Bearer ${this.$store.state.token}`,
        //        'Accept': 'application/json'
        //   };

        //   const data={
        //   }
          
           axios.get('https://api.atlassian.com/oauth/token/accessible-resources',{
               headers:{
                   Authorization:'Bearer '+this.$store.state.token,
                   Accept: 'application/json'
               }
           }
          ).then(res=>{console.log(res.data)          
          })
          .catch(error=>{console.log(error)})


  }
}
</script>



<style>
</style>