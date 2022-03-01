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
                        </div>
                        
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
    export default {
        name: 'ProfileData',
        props: {
            chars:Array
        },
    }
</script>

<style scoped>
    li {
        list-style: none;
    }
    .avatar{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }
.container-ul{
       display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;

        }
    .container {
        background: rgba(72 72 72 / 98%);
        display: flex;
        flex-direction: column;
        margin:2% 0% 0% 2%;
        border-radius: 12px;
        height: 480px;

    }

    .data-char {
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
        align-items: left;
        text-align: left;
        padding-top: 2%;

    }
    .subs{
     padding-left: 5%;
     padding-top: 5%;
     display: flex;
     flex-direction: column;
   
    }
    .name-span{
        font-size: 1.4rem;
        font-weight: 800;
        text-align: center;
    }
    .image{
        width: 100%;
        overflow: hidden;
    }
    img{
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    position: relative;
    background-size: contain;
    }
</style>