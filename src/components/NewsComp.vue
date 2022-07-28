<template>
<h1 style="font-family:roboto"> News and Highlights </h1><br>
<div class="main">
<div class="cards">
<div class="image">

 <img src="../assets/child.jpeg"/>
 <div class="top-right">HEADLINES</div>
</div>
<div class="title"><h4><b>British Nutrition Foundation responds to headlines about ultra-processed foods in school food and packed lunches. </b></h4>
</div>
<div class="desc"><p>There have been several news articles today  on the ‘ultra-proc...</p>
<a  href="https://www.nutrition.org.uk/news/2022/british-nutrition-foundation-responds-to-headlines-about-ultra-processed-foods-in-school-food-and-packed-lunches/" role="button"><button type="button" class="btn btn-secondary btn-lg btn-block">Read more...</button></a>
</div>
</div>
<div class="cards">
<div class="image">
 <img src="../assets/adult.jpg"/>
 <div class="top-right2">HEADLINES</div>
<!--change -->
<!--change -->
</div>
<div class="title"><h4><b>British Nutrition Foundation responds to headlines about the number of children trying to lose weight.</b> </h4>
</div>
<div class="desc"><p>Several news articles have been published today raising concer...</p>
<a  href="https://www.nutrition.org.uk/news/2022/british-nutrition-foundation-responds-to-headlines-about-the-number-of-children-trying-to-lose-weight/" role="button"><button type="button" class="btn btn-secondary btn-lg btn-block">Read more...</button></a>
</div>
</div>
<div class="cards">
<div class="image">
 <img src="../assets/garden.jpg"/>
 <div class="top-right3">BLOGS</div>
</div>
<div class="title"><h4><b>Genome editing: the future for our food? </b></h4>
</div>
<div class="desc"><p>What is genome editing and how might this technology lead to potential nutrit...</p>
<div class="button-space">
<a  href="https://www.nutrition.org.uk/news/2022/british-nutrition-foundation-responds-to-headlines-about-ultra-processed-foods-in-school-food-and-packed-lunches/" role="button"><button type="button" class="btn btn-secondary btn-lg btn-block">Read more...</button></a>
</div></div>
</div>
</div>     
</template>
<script>
</script>

<style>
 .cards{
   width:30%;
    border-radius:5px;
    box-shadow:2px 2px 10px black;
    display:inline-block;
   padding: 30px;
   height:540px;
  margin: 10px;
  margin-bottom: 5px; 
  margin-left:30px;
  
  }
  
.title{
    font-family:Arial;
}
.image img{height: 200px;
  width: 300px;
margin-top:10px;
border-top-right-radius:5px;
border-top-left-radius:5px;
padding:0px -80px;
position: relative;
}
.main{
    display: flex;
   
}
.title{
    text-align:left;
}
.desc{
    text-align:left;
}
#button{
    align:right;
}
h1{
text-decoration:underline;}
.top-right {
   position: relative;
  bottom: 190px;
  right: -30px;
  background-color: #eb6739;
  color: white;
  width:50%
  /* padding-left: 20px;
  padding-right: 20px */
}
.top-right2 {
   position: relative;
  bottom: 190px;
  right: -30px;
  background-color: #eb6739;
  color: white;
  width:50%;
  /* padding-left: 10px;
  padding-right: 10px */
}
.top-right3 {
   position: relative;
  bottom: 190px;
  right: -40px;
  background-color: #eb6739;
  color: white;
  width:50%;
  /*padding-left: 20px;
  padding-right: 20px */
}
.button-space{
    margin-top:33%;
}
</style>
