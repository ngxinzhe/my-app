<template>

<div>
    <h1>***API DATA***</h1>
    <router-link to="/">HOME PAGE</router-link>
    <br>
    <router-link to="/second">SECOND PAGE</router-link>
    <br>
    <router-link to="/api">API PAGE</router-link>
    <br>
    <router-link to="/bootstrap">BOOTSTRAP PAGE</router-link>
    <hr>
    <br>
    <h1>FAKE DATA FETCH FROM API USING AXIOS</h1>
    <div v-for="todo in todos" :key="todo.id">
    <h2>{{todo}}</h2>
</div>

</div>
</template>


<script>
import axios from "axios";

export default{
    name:"EmployeeList",

    data(){
    return{
    todos:[]
    }
 },


mounted()
{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
    this.todos=res.data
    console.log(this.todos)
    })
    .catch(error=>
    {
    console.log(error)
    })

}
}
</script>

<style>
</style>