<template><link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
  />
  <head>
    <meta name="viewport" Content="width=device-width,initial-scale=1.0" />
  </head>
  
  <div class="ro">
    <div class="row">
      <div class="col-sm-4">
        <div class="Mcard-body">
          <div class="Mcard-title1">
            <img
               src="../assets/greensalad.jpg"
            />
          </div>
          <div class="table-card" id="vvv" @click="getFacts(' green salad')">
            <br />
            <button
              type="button"
              class="btn btn-lg btn-danger"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >
              Green Salad
            </button>
            
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="Mcard-body3">
          <div class="Mcard-title1">
            <img
              src="../assets/dosa.jpg"
            />
          </div>
          <div class="table-card" @click="getFacts(' dosa')">
            <br />
            <button
              type="button"
              class="btn btn-lg btn-danger"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >
              Dosa
            </button>
            <!-- <b>Dosa</b> -->
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="Mcard-body4">
          <div class="Mcard-title1">
            <img
              src="../assets/coffee.jpg"
            />
          </div>
          <div class="table-card" @click="getFacts(' Coffee')">
            <br />
            <button
              type="button"
              class="btn btn-lg btn-danger"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >
              Coffee
            </button>
            
            <br />
            <br />
          </div>
        </div>
      </div>
      <p
        v-if="Object.keys(get_response).length === 0"
        style="padding: 0px 20px"
      ></p>
      <div class="results" v-else-if="Object.keys(get_response).length !== 0">
        <table class="centred">
          <tr>
            Calories:
            {{
              get_response.calories
            }}
          </tr>
          <tr>
            Total Weight:
            {{
              get_response.totalWeight
            }}
            gms
          </tr>Diet Labels:
          <tr v-for="l in get_response.dietLabels" :key="l">
            {{
              removeUnderscore(l)
            }}
          </tr>
        </table>
      </div>
    </div>
  </div>
  <NewsComp />
</template>

<script>
import NewsComp from './NewsComp.vue'
import Axios from "axios";
export default {
   components: {  NewsComp},
  data() {
    return {
      src: "",
      loading: false,
      err: "",
      get_response: {},
    };
  },
  methods: {
    getFacts(ingr) {
      this.loading = true;
      Axios.get(
        "https://api.edamam.com/api/nutrition-data?app_id=a3d8ef0d&app_key=c260a2ce7f82409710ede374215aa455&nutrition-type=logging&ingr=" +
          ingr
      )
        .then((response) => {
          console.log(response.data);
          this.get_response = response.data;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.err = "An error has occurred. Please try again";
          console.log("Error", err);
        });
    },
    getPath(foodname) {
      var path = "";
      this.plist.forEach((element) => {
        if (element.name === foodname) {
          path = element.path;
          console.log("Path: " + path);
        }
      });
      return path;
    },
    removeUnderscore(label) {
      var newLabel = label.replaceAll("_", " ");
      return newLabel;
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  color: gold !important;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
  font: size 100%;
}
.ro {
  padding-left: 1%;
  padding-right: 1%;
}
.container {
  text-align: center;
  margin: auto;
}
.btn {
  text-align: center;
}
.btn:hover {
  color: white !important;
}
.car-marg {
  border: 5px solid #b08f26;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
}
td {
  border: 1px solid black;
  border-collapse: collapse;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
th {
  text-align: center;
  padding-top: 20px;
}
.car-mar {
  border: 2px solid white;
  margin-left: 1%;
}
td {
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
  text-align: initial;
}
.wd {
  width: 100%;
}
p {
  text-align: center;
  width: 100%;
  padding-bottom: 30%;
}
.ing {
  margin-left: 15% !important;
}
h2 {
  text-align: center;
}
h5 {
  color: black;
}
.row {
  text-align: center;
}
img {
  border-radius: 12px;
}
.blk {
  background-color: black;
  border-radius: 10px;
  width: 100.6%;
}
.Mcard-title {
  text-align: center;
  height: 30px;
  width: -10px;
}
.container {
  position: relative;
  width: 0%;
  max-width: 100px;
}
.container img {
  width: 100%;
  height: auto;
}
.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
.container .btn:hover {
  background-color: black;
}
.search {
  text-align: center;
  font-family: "Brush Script MT", cursive;
}
li {
  color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
}
.err {
  transition-delay: 5ms !important;
}
.bttn {
  margin: 2%;
  border: 2px solid black !important;
  padding: 5px;
  background-color: #ffe6e6 !important;
  border-radius: 10px;
  margin-right: 5%;
}
b {
  font-weight: 900 !important;
  font-size: 30px;
  color: #b08f26;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  opacity: 5;
  transition: 30s;
}
.bttn:hover {
  background-color: white;
  transition: 1s;
  color: maroon !important;
  opacity: 10s;
}
.bg-colour {
  background-color: black;
  height: 2500px;
  margin-top: 9px !important;
  text-align: center;
}
.sie {
  font-size: 150%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
}
#card {
  transition: 0.3s;
  width: 300px;
  border-radius: 10px;
  background-color: maroon;
  text-align: left;
  max-width: 500px;
  margin-left: 500px;
  box-shadow: 0 4px 8px 0 #ffe6e6;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 2px 16px;
}
.col-container {
  display: table;
  width: 100%;
}
.col {
  display: table-cell;
  padding: 16px;
}
.card {
  background-color: maroon !important;
  margin-left: 200px;
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
  opacity: 10;
}
.card-text {
  text-align: left;
}
.al {
  margin-left: 75%;
  text-align: left;
}
.alien {
  margin-left: 10%;
  text-align: left;
}
.fp-i {
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.heading {
  text-align: center;
  font-size: 2.142em;
  font-weight: 600;
  letter-spacing: -0.13px;
  width: 100%;
  color: #520606;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-bottom: 0px;
}
.Mcard {
  background-color: #ffb3b3;
  color: white;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
}
.Mcard-body {
  background-color:#bcf7be;
  color: white;
  padding: 30px;
  margin-bottom: 5px;
  border-radius: 10px;
  width:90%;
  height:85%;
  margin-left:10%;
}
.Mcard-body3 {
  background-color:#f7c5bc;
  color: white;
  padding: 30px;
  margin-bottom: 5px;
  border-radius: 10px;
  width:90%;
  height:85%;
    margin-left:5%;

}.Mcard-body4 {
  background-color:#F89880;
  color: white;
  padding: 30px;
  margin-bottom: 5px;
  border-radius: 10px;
  width:90%;
  height:85%;
    margin-right:10%;

}
.Mcard-body1 {
  background-color: #ffb3b3;
  color: white;
  border-radius: 3px;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 0px;
  width: -10px;
}
.Mcard-title.hover {
  font-size: 20px;
  font-weight: 400;
  color: #b08f26;
  text-align: center;
  height: 0px;
  width: 0px;
  opacity: 10s;
}
.clr {
  border-radius: 5px;
  border-radius: 3px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.Mcard-text {
  margin-left: 15px;
  margin-right: 15px;
  height: 10px;
  width: 10px;
}
.title {
  font-size: 20px;
  font-weight: 400;
  color: #b08f26;
  text-align: center;
  height: 0px;
  width: 0px;
}
.text {
  margin-left: 15px;
  margin-right: 15px;
}
.Mcard-body-MCB {
  background-color: #000;
  color: white;
  border-radius: 5px;
  padding: 30px;
  width: 20px;
  height: 2px;
  margin-bottom: 10px;
}
.Msection {
  font-size: 16px;
}
#division {
  text-align: left;
  margin-left: 0;
  background-color: indigo;
}
.flip-card {
  background-color: transparent;
  margin-top: 5% !important;
  margin-left: 5%;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.flip-card-front {
  color: black;
  width: 300px;
  height: 300px;
  margin-left: 35%;
}
.flip-card-back {
  background-color: maroon;
  color: black;
  transform: rotateY(180deg);
  height: auto;
  width: 30%;
}
img {
  height: 200px;
  width: 300px;
}
.results {
  text-align: center;

  position: center;
}
.centred {
  border:10px ;
width: 300px;
height: 200px;
margin: 0 40%;
border-radius: 80px;

background: #66FF99;
font-size:20px;
font-family:'Roboto';
}
#vvv {
  margin-right: 1000px;
}
button.btn.btn-lg.btn-danger{
padding:10px;
margin-right:40px;}
tr{
  COLOR:BLACK;
}
table.centred{
  color:black
}
img{
  padding:0px -80px;
}
@media screen and (max-width: 990px) {
  html,body{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
  }}
@media screen and (max-width:990px){
    .table-card{
        margin:auto ;
        margin-left:22%;
       
    }
}
@media screen and (max-width:990px){
    .Mcard-body{
        margin:auto;
    }
}
@media screen and (max-width:990px){
    .Mcard-body4{
        margin:auto;
    }
}
@media screen and (max-width:1044px){
    .centred{
        margin:auto;
    }
}
</style>
