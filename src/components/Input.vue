<template>
  <div class="container">
    <div class="slogan"> <img src="../assets/title.png" alt=""></div>
    <input type="text" name="" id="search" placeholder="Busque aqui" v-model="NewName">
    <input type="button" value="SEARCH" id="btnSearch" v-on:click="search()">
    <input type="button" value="STORAGE" id="btnStorage" class="btn" v-on:click="hidden()">
    <ArmazemUser v-if="storage == true && list == false" :personas="personas" />
    <!-- Passando dados de forma dinamica-->
    <ProfileData v-if="error == false && list == true" :chars="chars" /> <!-- Passando dados de forma dinamica-->
    <div v-else-if="error == true">
      <h1>Nenhum resultado encontrado...</h1>
    </div>
  </div>
</template>

<script>
  import ProfileData from './ProfileData.vue'
  import personagens from '../services/personagens'
  import ArmazemUser from '../views/ArmazemUser.vue'
  export default {
    name: 'InputSearch',
    components: {
      ProfileData,
      ArmazemUser
    },
    data() {
      return {
        NewName: "",
        chars: [],
        personas: [],
        error: false,
        storage: false,
        list: true

      }
    },
    // LISTAR DADOS JA NO BANCO
     mounted(){ 
      personagens.listar().then(resposta =>{
        this.personas = resposta.data
      })
    },
    methods: {
      // VISIBILIDADE DE LISTA OU STORAGE
      hidden(){
        this.storage = true
        this.error = false
        this.list = false
      },
      // Fazer busca na API Rick and Morty
      search() {
        let NewName = this.NewName
        let url = "https://rickandmortyapi.com/api/character/?name=" + NewName
        fetch(url)
          .then(res => {

            if (res.status === 200) {
              this.list = true
              this.error = false
              this.storage = false
              return res.json()
            } else {
              this.error = true
              throw new Error(res.status)
            }
          })
          .then(
            json => {
              let chars = json.results
              this.chars = chars
              console.log(json.results)
            },

          ).catch((error) => {
            console.log(error)
          })

      },
     


      // Listando ja os dados inseridos
      /* add() {
         fetch('http://localhost:3000/')
           .then(res => {
             this.storage = true
             this.error = false
             this.list = false
             return res.json()

           })
           .then(
             json => {
             
               let personas = json
              this.personas = personas
             
             },

           )
       }*/

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1rem;
  }

  .slogan {
    width: 100%;
    height: 20vh;
  }

  .slogan img {
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


  #btnSearch,
  .btn {
    padding: 8px;
    border-top-right-radius: 10px;
    background: rgba(124, 126, 0, 0.788);
    color: whitesmoke;
  }

  #btnSearch,
  .btn:hover {
    cursor: pointer;
  }

  h1 {
    color: azure;
  }

  .btn {
    margin-left: 50px;
  }
</style>