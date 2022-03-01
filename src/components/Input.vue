<template>
  <div class="container">
    <div class="slogan"> <img src="../assets/title.png" alt=""></div>
    <input type="text"   name="" id="search" placeholder="Busque aqui" v-model="NewName" >


    <input type="button" value="SEARCH" id="btnSearch" v-on:click="search()">
    <ProfileData v-if="error == false" :chars="chars" /> <!-- Passando dados de forma dinamica-->
    <div v-else>
      <h1>Nenhum resultado encontrado</h1>
    </div>
  </div>
</template>

<script>
  import ProfileData from './ProfileData.vue'
  export default {
    name: 'InputSearch',
    components: {
      ProfileData
    },
    props: {

    },
    data() {
      return {
        NewName: "",
        chars: [],
        error: false,
      }
    },

    methods: {
      search() {
        let NewName = this.NewName
        let url = "https://rickandmortyapi.com/api/character/?name=" + NewName
        fetch(url)
          .then(res => {
            if(res.status === 200){
              this.error = false
            return res.json()
            }
            else{ 
              this.error = true
              throw new Error(res.status)    
            }
          })
          .then(
            json => {
              let chars = json.results
              this.chars = chars
            },

          ).catch((error)=>{
            console.log(error)
          })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1rem;
}
.slogan{
  width: 100%;
  height: 20vh;
  }
.slogan img{
  width: 45%;
  height: 100%;
}
  #search {
    width: 20%;
    margin: 10px auto;
    padding: 8px;
    padding-left: 18px;
    border: none;
    margin-bottom: 10px;
    outline: none;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    color: whitesmoke;
    background: rgb(70, 70, 70);
    text-transform: uppercase;
  }

  #btnSearch {
    padding: 8px;
    border-top-right-radius: 10px;
    background: rgba(124, 126, 0, 0.788);
    color: whitesmoke;
  }

  #btnSearch:hover {
    cursor: pointer;
  }
  h1{
    color: azure;
  }
</style>