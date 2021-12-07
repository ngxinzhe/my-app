<template>

  <div id="background">
    <div>

      <img id="pic" alt="company logo" src="../assets/logodesign.png">

      <div id="welcomediv">
        <h5 id="welcome1">Project tracker for JIRA.</h5>
      </div>

      <form>      
        <b-button id="button1" v-on:click="authorizeJira" variant="primary">sign in with Atlassian account</b-button>
        <br/>
      </form>

    </div>
  </div>

</template>

<script>

import {get} from '../store/utils/api.js'
import {search} from '../store/urls.js'

export default {
  name: 'loginpage',

  components: {},

  data() {
    return {
    }
  },
  

  methods: {
      authorizeJira(){
          window.location.href='https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=63k79pW3ajKk93HJxMP6KHcHMiNYiINA&scope=read%3Ame&redirect_uri=https%3A%2F%2Flocalhost%3A8080%2Fsuccess&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent'
      },

  },

  mounted() {
    get(search)
    console.log(this.$route.query.code)   
  }
}
</script>



<style>
#background {
  background-image: url(../assets/blue.jpg);
  background-size:cover;
  padding-top:20px;
  padding-bottom: 300px;

}

#welcome1 {
  text-align: center;
  margin: 20px;
  padding: 30px;
  color: goldenrod;
  font-family: cursive;


}

#welcomediv {
  margin: auto;
  width: 1000px;
  background-color: black;
  border-radius: 15px;
  opacity: 0.5;
}


#pic {
  margin-top: 40px;
  width: 350px;
  height: 90px;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

form {
  max-width: 400px;
  background: black;
  opacity: 0.7;
  text-align: left;
  padding: 25px;
  border-radius: 30px;
  margin: auto;
  margin-bottom: 100px;
}

#button1 {
margin-left:55px;
}

</style>
