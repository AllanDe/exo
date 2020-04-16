<template>
  <!-- ajouter des condition -->
  <div class="home">
    <input type="text" v-model="value" />
    <!-- la span disparait quand isOk -->
    <span type="text">Veuillez saisir 5 caractères</span>
    <!-- sinon afficher le buuton --> 
    <button>Envoyer</button>
    <!-- la span apparaitre quand isClose et quand  --> 
    <span type="text">Encore un peu plus que {{carac}} caractères </span>
    <router-link to="/sol1">Solution</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data: () => {
    return {
      value: ''
    }
  },
  computed: {
    isOk: function() {
      return this.value.length >= 5 ? true : false
    },
    isClose: function() {
      return !this.isOk && this.value.length >= 3 ? true : false
    },
    carac: function() {
      return 5 - this.value.length;
    }
  }
}
</script>

<style>
.home {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.home > input {
  margin: 15px 0px;
}
</style>
