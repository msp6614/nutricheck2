<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
<!--<marquee width="100%" direction="right" height="30px">
Don't focus on how much you eat. Focus on what you eat
</marquee> -->
       <div class="o">
        <h2>Your Nutrition and Food Safety Resource</h2> 
        <hr />  
        </div>

        
        <div class="qwe">
        <div class="cont">
         <table class="mmm"><tr>
        <td>
        <input typesearch v-model ="search1" class="search" placeholder="Enter a Food"/><br></td>&nbsp;<td>
           
           
           <a button @click="getSearch"><k class="fas fa-search"></k></a></td></tr></table></div>
        
        <div  v-if=" this.search && nutrients.calories!='0'&& this.err ==''">
            <div class="b">
  <h4>
            Calories : {{nutrients.calories}}</h4>
       <div>
        <h4>Total Weight : {{nutrients.totalWeight}}gms </h4> 
       </div> 
        <div><h4>Diet Labels :</h4>
           <h4 v-for="l in get_response.dietLabels" :key="l">
           {{removeUnderscore(l)}}
        </h4>
        </div> 
        </div> 
          </div> 
<div class="we" v-else-if="this.err!==''">
    Enter Something</div>
    <div class="w" v-else-if="this.nutrients.calories==0">Enter valid info</div><br>
   
    </div>
</template>

<script>
import Axios from 'axios';

    export default {
        name: 'VNutrients',
        components:{
             
        },
        data () {
        return {
            nutrients: {},
             search:false,
             search1:'',
            err:'',
            get_response:{}
        }
    },
        methods: {
         getSearch() {
        Axios.get('https://api.edamam.com/api/nutrition-data?app_id=a3d8ef0d&app_key=c260a2ce7f82409710ede374215aa455&nutrition-type=logging&ingr=' + this.search1).then(response =>{
              console.log(response.data)
             this.nutrients =response.data;
             this.get_response=response.data;
             this.search=true;
             }).catch((err) => {
          this.loading = false;
          this.err = "Something went Wrong";
          console.log("Error", err);
    });     
    } ,
     removeUnderscore (label) {
            var newLabel=  label.replaceAll('_',' ');
            return newLabel;}
    },
}
</script>
<style>
.qwe {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: auto;
  /* background: #2c3e50;
  /* background-image: url('../assets/i.png'); */
   height: auto;
   width:auto;
   color: black;
   
}
.mmm{
    margin-bottom: 20px ;
    text-align: center;
    color: BLACK;
    
}
k{
    color:black;
}
.mmm .search{
   /* width: 50%;
    color: black;
    padding:10px 30px;
    appearance: none;
    border:none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0,0, 0.25);
    background-color: silver;
    border-radius:0px 10px 0px 10px ;
    transition:0.4s;
    align-items: center;
  margin-top: 50px; */
  padding:10px 30px;
  box-shadow: 0px 0px 8px rgba(0, 0,0, 0.25);
  background-color: white;
  transition:0.4s;
  border-radius:50px ;
  border:3px blue;
  
}
.mmm.search.button
{
background: skyblue;


}
#v-if{
    color: blue;
}
button{
    background:  white;
}
marquee{
    color: blue;
    font-size: 130%;
    border-bottom: 5px solid black;
    background:white;
}
.b{
border:10px ;
width: 300px;
height: 250px;
margin: 0 40%;
border-radius: 80px;

background: #66FF99;
font-size:10px;
font-family:'Roboto';
}
.o{
    text-align: center;
    color: brown;
    background:white;
    font-family:'Roboto';
}
.we{
    border:10px ;
width: 180px;
height: 120px;
margin: 0 45%;
border-radius: 90px;
background: #66FF99;
font-size:30px;
font-family:'Roboto';
}
 .w{
    border:10px ;
width: 180px;
height: 100px;
margin: 0 45%;
border-radius: 90px;
background: #66FF99;
font-size:30px;
font-family:'Roboto';
}
hr{
    height:100px;
    width:auto;
    background-color:black;

     border: 1000px solid black;
        }
.cont{
    margin-left:40%;
   position:relative;
}
.fa-search{
    border:none;
    height:100%;
    width:100%;
    margin-right:10px;
    
}

@media screen and (max-width: 990px) {
  html,body{
    width:auto;
    height:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
    
  }}
@media screen and (max-width:768px){
    .mmm{
        margin-left:-60px;
    }
}
@media screen and (max-width:768px){
    .b{
        margin-left:150px;
    }
}
</style>