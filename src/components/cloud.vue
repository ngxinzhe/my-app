<template>

  <div>
  <h1>cloud ID</h1>
  
  </div>

</template>

<script>

import {cloudidExchange} from '../store/urls'
import {get} from '../store/utils/api'

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
          const header={
               'Authorization': `Bearer ${this.$store.state.token}`,
               'Accept': 'application/json'
          };
                
           get(cloudidExchange,header)
          .then(res=>{
            console.log(res.data)          
          })
          .catch(error=>{
            console.log(error)
          })
  }
}
</script>



<style>
</style>