<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
<HomePage />

<VNutrition />

 
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head> 
 
  


<div class="col-lg-5 col-md-8 col-sm-10">
    <ingredients-form  @sendIngredient="add" />
</div>

  <br> 

<br>

<analysis :ingredient="searchItem"/>
  <br>
  <br>
  
 <CardComp /> <br>
<FooterComp />
</template>

<script>  

import IngredientsForm from './Ingredients_Form/IngredientsForm.vue'
import Analysis from './Analysis/Analysis.vue'
import FooterComp from './FooterComp.vue'
import HomePage from './HomePage.vue'
import VNutrition from './VNutrition.vue'
import CardComp from './CardComp.vue'
export default {
  components: {  IngredientsForm, Analysis,FooterComp,HomePage,VNutrition,CardComp},
  setup () {
    return {
    }
  },

  data () {
    return {

      searchItem:'',
      searchList:[] ,
      post_data :{
        "ingr":[]
         },
       post_response:{},
       get_response:{}
    }
  },

  methods:  {
         
           add(event) { 
             this.searchItem=event;
        }, 

        }

}

</script>

<style>

main-div{
  display: flexbox;
  justify-content: center;
  
}

 .centred {
     color: red;
     margin-left:auto; 
     margin-right:auto;
     
 }

 .table-card {
color: rgb(139, 130, 0);
align:center;
padding: 10px;
width: 300px;
margin: 10px;

}

#add-btn{
  padding: 3px 3px;
  background-color:lightgreen;
  
}

label{
  text-align:center;
  color: YELLOW;
}

 #firstLabel{
  margin-right:autox;
  width:auto;
}

#pulser {
      animation: buttonpulse 1s infinite;
      border: 1px solid blue;
      background-color:cyan;
      cursor:pointer;
  }

  @keyframes buttonpulse {
      0% {
    box-shadow: 0 0 0 0px rgba(20, 180, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(20, 0, 160, 0.3);
  }

  } 

h2{
  color:lightseagreen;
  text-transform: capitalize;
  
}


p{
  color: seagreen;
}


.results {
  border: 0px solid darkseagreen;
  align-self: center;
}

#ingredient-list{
  width:16rem;
  margin-left:auto; 
  background-color: rgb(77, 76, 125);
  margin-right:auto;color:red;
}  

.container {
     justify-content: center;
     margin-left: auto;
     margin-right: auto;
     display: inline-block;background-color: #cfc;
     /*margin-left:240px; */
 } 



.newrow {
  border: 0px;
}

.newrow:hover {
  border: 0px;
  background-color: antiquewhite;
}

 /* tr:hover {
  border: 3px solid gold;
  background-color: aqua;
  color:darkred;
} */

 

 .panel{
   justify-content: center;
   align-content: center;
   align-items: center;
   color:darkorchid;
   width: 220px;
 } 

 img{
   width: 160px;
   height: 120px;
 }

 .card-body {
  box-sizing: border-box;
  background-color: #6CC4A1;
  
}

@media screen and (max-width: 990px) {
  html,body{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
  }}
 .form {
   width: 90%;
    margin-top: 0;
    flex-direction: column;
    align-items: stretch;
    
  }
  #add-btn{
    padding: 3px 3px 3px 3px 0;
  }
  .card{
   
    width:100%;
    color:pink;
    margin-left:80%;
  }


</style>
  