<template>
   <div class="card">
      <div class="card-body">
         <h5 class="card-title">{{ cicciobello.model }}</h5>
         <h6 class="card-subtitle mb-2 text-muted">{{ cicciobello.brand }}</h6>
         <p class="card-text">Prezzo: {{ cicciobello.price }} cc: {{ cicciobello.cc }}</p>
         <small class="card-text">Anno: {{ cicciobello.year_release }}</small>
         <router-link :to="{name:SingleCar, params:{id:car.id}}"></router-link>
      </div>
   </div>
</template>

<script>
export default {
   name: 'AppCard',
   props:{
      cicciobello: Object
   }
}


</script>