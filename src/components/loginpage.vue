<template>



<div id="background">
  <div >
    <img id="pic" alt="company logo" src="../assets/logodesign.png">
    <div id="welcomediv">
    <h5 id="welcome1">Project tracker for JIRA.</h5>

    </div>
    <div id="login">
    <h5 id="welcome2">Login with jira account</h5>
    </div>

    <form>
    <label>Username:</label>
    <br/>
    <input type="text" v-model="userName" placeholder="eg:xinzhe"> 
    <br/>
    <label>Password:</label>
    <br/>
    <input type="Password"  v-model="passWord" placeholder="eg:abc123">
    <br/>
    
     <b-button id="button1" v-on:click="pop" variant="primary">LOGIN</b-button>
    </form>
  </div>
  </div>


</template>

<script>

import axios from "axios";

export default {
  name: 'loginpage',

  components: {
  },

  data(){
    return{
    name1:"COMPONY",
    userName:"",
    passWord:"",
    };
  },

  methods:{
      
      pop:function(){

           alert("Login success ,  USERNAME:  "+this.userName+"   PASSWORD:   "+this.passWord);
      }

},

mounted()
{
    axios.get('https://innoqode.atlassian.net/rest/api/2/search?jql=assignee="Ng Xin Zhe"',{

  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
    'xinzhe.ng@innoqode.com:KNDbPTela90ZzPW8ZX9nD8BF'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})

.then(response=>{

 console.log(
response.data
);
   
})

.then(text => console.log(text))
.catch(err => console.error(err));
}
};

</script>




<style>

#background{
    background-image:url(../assets/nebula-galaxy.gif);
    background-size: cover;
    padding:20px;
     
}

#welcome1{   
    text-align:center;
    margin:20px;
    padding:30px;
    color:goldenrod; 
    font-family:cursive;
     
    
}
#welcomediv{
     margin:auto;
    width:1200px;  
    
    background-color:black;
    border-radius:15px;
    opacity:0.7;
}

#welcome2{   
    text-align:center;
     color:white;
  font-family:monospace;
  background-color:#800000;
   border-radius:8px;
   opacity:0.7;
  
}
#login{
    margin:auto;
    width:450px;  
    margin-top:100px;
    margin-bottom:20px;
}


#pic{
    margin-top:40px;
  width:350px;
  height:90px;
  border-radius:20px;
     display: block;
  margin-left: auto;
  margin-right: auto;
  opacity:0.9;
  
 
}

form{
  max-width:400px;
  background:black;  
 opacity:0.7;
  text-align:left;
  padding:25px;
  border-radius: 30px;
  margin:auto;
  margin-bottom:100px;
    
}

label{
  color:white;
  margin:20px;
  
}

input{
  width:300px;
  
  margin-left:20px;
  margin-right:20px;
  margin-bottom:30px;
  padding:8px;
  
}

#button1{
  margin-left:20px;
  margin-top:15px;
  padding-left:15px;
  padding-right:15px;
  
  
}

</style>