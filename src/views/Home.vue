<template>
    <div class="jumbotron jumbotron-fluid jumbotron-custom">
        <div class="container container-custom">
            <p>
                Come rico y variado mientras ahorras tiempo y cumples tu objetivo nutricional.
            </p>
            <p class="lead btn-custom">
                <router-link to="/login" class="btn btn-primary btn-lg">Únete</router-link>
            </p>
        </div>
    </div>

</template>

<script>

export default {
    components: {
    },
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

.jumbotron {
    color: white;
    background-image: url("/images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.jumbotron-custom{
    height: 92vh !important;
    margin-bottom: 0px;
    position: relative;
}
.container-custom{
    background-color: rgba(92, 234, 111, 0.651);
    border-radius: 5px;
    left: 3.5rem;
    padding: 1.5rem;
    position: absolute;
    top: 3.5rem; 
    width: 460px;
}
.container-custom p{
    margin-top: 15px;
    text-align: justify;
}
.container-custom .btn-custom a{
    background:white;
    border: 0px;
    border: 1px solid white;
    color:  #27884d;
    font-weight: 600;
    margin-left: 50%;
    padding: 5px 10px;
    transform: translateX(-50%);
    transition: all 0.3s ease;
}
.container-custom .btn-custom a:hover{
    background-color:  #27884d;
    color: white;
    font-weight: 600;
}
</style>