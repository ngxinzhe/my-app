<template>

<div id="container">


  <div id="app">

    <img id="pic" alt="company logo" src="./assets/comLogo.png">
    <h1>Welcome to  {{name}} </h1>
    <h2>Think Big, Think abc Different.</h2>

    <form>
    <label>Username:</label>
    <br/>
    <input type="text" v-model="userName" placeholder="eg:xinzhe"> 
    <br/>
    <label>Password:</label>
    <br/>
    <input type="Password"  v-model="passWord" placeholder="eg:abc123">
    <br/>
    <button v-on:click="pop">LOGIN</button>

    </form>
    
  </div>
  
  </div>
</template>

<script>

export default {

  name: 'App',

  components: {
  },


  data(){
    return{
    name:"COMPONY",
    userName:"",
    passWord:"",
    };
  },


  methods:{
  pop(){
    alert("Login success ,  USERNAME:  "+this.userName+"   PASSWORD:   "+this.passWord);
  }
},

};


</script>

<style>

#container{
  background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  padding:40px;
  padding-bottom:200px;
  
}

#app {
  font-family:Cursive; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  color: pink;
  margin-top: 20px;
}

h1{
  margin:20px;

}

h2{
  color:red;
  margin-bottom:30px;
  font-family:monospace;
}

#pic{
  width:500px;
  height:150px;
  border-radius:50px;
 
}

form{
  max-width:400px;
  background:lightblue;  
  text-align:left;
  padding:30px;
  border-radius: 30px;
  margin:auto;
  
  
}

label{
  color:black;
  margin:20px;
  
}

input{
  width:300px;
  margin:20px;
  padding:8px;
}

button{
  margin-left:20px;
  background:#483d8b;
  color:white;
  padding:10px;
  padding-left:20px;
  padding-right:20px;
  border-radius:15px;
  
}
</style>
