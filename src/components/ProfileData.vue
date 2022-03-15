<template>
    <div class="avatar">
        
        <ul class="container-ul">
            <li v-for="char in chars" :key="char.id" class="container">
                <div class="image">
                    <img :src="char.image" alt="" srcset="">
                </div>
                <div class="data-char">
                    <span class="name-span">{{char.name}}</span>
                    <div class="subs">
                        <span> SPECIES: {{char.species}}</span>
                        <span>GENDER: {{char.gender}}</span>
                        <span>STATUS: {{char.status}}</span>
                        <input type="button" value="ADD" class="btnADD btn" >
                    </div>
                </div>
              <!-- TENTATIVA FALHA DE POST <form @submit.prevent="salvar" action="" method="post" class="form">

                <input type="text" placeholder="name" name="name" v-model="carinha.name"> 
                <input type="text" placeholder="image(url)"  name="image" v-model="carinha.image">
                <input type="text" placeholder="species"  name="species" v-model="carinha.species">
                <input type="text" placeholder="gender"  name="gender" v-model="carinha.gender">
                <input type="text" placeholder="status"  name="status" v-model="carinha.status">
                

                <button>SALVAR</button>
            </form>-->
            </li>
        </ul>
        
       
    </div>
    
</template>
<script>
import Carinha from '../services/personagens'
    export default {
        name: 'ProfileData',
        props: {
            chars: Array
        },
        data() {
            return {
                personagem: {

                },
                carinha: {
                    name: '',
                    gender: '',
                    status: '',
                    image: '',
                    species: ''
                },
                person:[]
            }
        },
        methods: {

            salvar(){
                alert(this.chars[0].name)
                // eslint-disable-next-line 
                Carinha.salvar(this.carinha).then(resposta =>{
                    alert('salvo com sucesso')
                })

            }
   
        }
            
            // Listando ja os dados inseridos metodo sem exios
           /* add() {
                fetch('http://localhost:3000/')
                    .then(res => {
                        return res.json()

                    }) 
                    .then(
            json => {
                    console.log(json)
            },

          )
            }*/
        }

    
</script>

<style scoped>
    li {
        list-style: none;
    }
.form{
    display: flex;
    flex-direction: column;
}
    .avatar {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }

    .container-ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;

    }

    .container {
        background: rgba(72 72 72 / 98%);
        display: flex;
        flex-direction: column;
        margin: 2% 0% 0% 2%;
        border-radius: 12px;
        height: auto;

    }

    .btn {
        padding: 8px;
        background: rgba(97, 99, 1, 0.87);
        color: whitesmoke;
        width: 50%;
    }

    .btn:hover {
        cursor: pointer;
    }

    .data-char {
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
        align-items: left;
        text-align: left;
        padding-top: 2%;

    }

    .subs {
        padding-left: 5%;
        padding-top: 5%;
        display: flex;
        flex-direction: column;
    }

    .name-span {
        font-size: 1.4rem;
        font-weight: 800;
        text-align: center;
    }

    .image {
        width: 100%;
        overflow: hidden;
    }

    img {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        position: relative;
        background-size: contain;
    }
</style>