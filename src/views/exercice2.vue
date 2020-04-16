<template>
  <div class="about">
    <!-- utiliser v-for pour creer la liste d'utilisateurs -->
    <div class="card">
      <p>prenom nom</p>
      <p>adresse</p>
      <p>codePostal ville</p>
    </div>
    <router-link to="/sol2">Solution</router-link>
  </div>
</template>
<script>
export default {
  data:function(){
    return {
      utilisateurs:[
        {
          id:0,
          nom: "Jack",
          prenom: "Michel",
          adresse: "9 rue la montagne",
          codePostal: "5987",
          ville: "Lewarde"
        },
        {
          id:1,
          nom: "Jack",
          prenom: "Kevin",
          adresse: "9 rue la montagne",
          codePostal: "5987",
          ville: "Douai"
        },
        {
          id:2,
          nom: "Martin",
          prenom: "Coraline",
          adresse: "9 rue la montagne",
          codePostal: "5987",
          ville: "Lille"
        }
      ]
    }
  }  
}
</script>
<style>
.card{
  border: 1px solid #563d7c;
  border-radius: 20px;
  padding: 20px;
  margin:10px;
}

.card > p{
  font-size: 20px;
}

.card > p{
  font-size: 20px;
}

.card > p:first-of-type{
  font-weight: bold;
}
</style>