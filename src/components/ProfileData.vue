<template>
    <div class="avatar">
            <ul  v-for="char in chars" :key="char.id">
                <li class="container">
                    <div class="image">
                        <img :src="char.image" alt="" srcset="">
                    </div>
                    <div class="data-char">
                        <span class="name-span">{{char.name}}</span>
                        <span> SPECIES: {{char.species}}</span>
                        <span>GENDER: {{char.gender}}</span>
                        <span>STATUS: {{char.status}}</span>
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

    .container {
        background: rgba(94, 94, 94, 0.849);
        display: flex;
        flex-direction: column;
        padding: 3%;
        margin:5% 2% 0% 2%;
        text-align: center;
        overflow: hidden;
        border-radius: 12px;
        height: 440px;

    }

    .data-char {
        display: flex;
        flex-direction: column;
        color: rgb(255, 255, 255);
        align-items: left;
        text-align: left;

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
        border-radius: 10%;
        width: 95%;
        position: relative;
        background-size:contain ;
    }
</style>