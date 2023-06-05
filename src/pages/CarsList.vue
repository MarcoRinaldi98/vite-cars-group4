<template>
   <h1>Siamo nella lista</h1>
   <div class="row">
      <div class="col-3" v-for="car in cars">
         <AppCard
            :cicciobello="car"
         ></AppCard>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import AppCard from "../components/AppCard.vue"

export default {
   name: 'CarsList',
   components: {
      AppCard
   },
   data () {
      return {
         urlBase: "http://localhost:8000",
         cars: [],
      }
   },
   methods: {
      getCars() {
         axios.get(`${this.urlBase}/api/cars`)
         .then(response => {
            this.cars = response.data.results
            console.log(response)
         })
      }
   },
   mounted() {
      this.getCars();
   }
}

</script>

<style lang="scss"></style>