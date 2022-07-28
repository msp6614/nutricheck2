<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
   
    <div class="card" > 
  <div class="card-body">
    
  <div class= "form-group">
    <label  for="qty" data-toggle="tooltip" title="Hooray!" >Quantity </label>
    <input type="number" class="form-control mb-1" min="1" v-model="qty">

     <label for="unit">Unit</label> 
     
    <select class="form-control mb-1" name="" id="unit" v-model="unit">
     <option value="items">items</option> 
      <option value="kilograms">kilograms</option>
      <option value="grams">grams</option>
      <option value="litre">litre</option>
      <option value="tablespoon">Tablespoon</option>
      
        
       
    </select> 

    <label for="food">Food item</label>
    <input type="text" id="food" class="form-control" v-model="food"> 
<br>
    <button id="" class="btn btn-info"  @click="$emit('sendIngredient',addedIngredient)" style="width:75px"> Add </button>

  </div>
  </div> 
</div>


</template>

<script>


    export default {
        emits:['sendIngredient'],
        data(){
            return {
                 
                qty:0,
                unit:'',
                food:'',
                searchItem:'',
                
                post_data :{
                 "ingr":[]
                    },
                 post_response:{}

            }
        },

        computed:{
            addedIngredient () {
                var ingredient='';
                if(this.qty!==0 && this.unit!=='' && this.food!=='' ) {
                ingredient= this.qty +" "+ this.unit +" "+ this.food; 
                 }
                 return ingredient;
            }
        },

  methods: {
    add() { 
        var ingredient='';
      if(this.qty!==0 && this.unit!=='' && this.food!=='' ) {
      this.searchItem= this.qty +" "+ this.unit +" "+ this.food;
      ingredient=this.searchItem;
      }
      else {
        alert("Enter a value for each field before adding");
      }

      return ingredient;
    }, 

   
  }
}
</script>

<style >
  
  .rrr{
     margin-top:30px;
    background-color:black;
    
  }
  @media screen and (max-width:990px){
    .card-body{
        margin-left:-70%;
        margin-right:90%;
    }
}
</style>