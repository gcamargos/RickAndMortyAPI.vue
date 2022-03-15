<template>
    <div class="avatar">
        <ul class="container-ul">
            <li v-for="person in personas" :key="person.id" class="container">
                <div class="image">
                    <img :src="person.image" alt="" srcset="">
                </div>
                <div class="data-char">
                    <span class="name-span">{{person.name}}</span>
                    <div class="subs">
                        <span> SPECIES: {{person.species}}</span>
                        <span>GENDER: {{person.gender}}</span>
                        <span>STATUS: {{person.status}}</span>
                        <input type="button" value="ADD" class="btnADD btn">
                        <div class="container-save">
                        </div>

                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default ({
        name: 'ArmazemUser',
        props: {
            personas: Array
        },

    })
</script>
<style scoped>
    li {
        list-style: none;
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
        height: 480px;

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