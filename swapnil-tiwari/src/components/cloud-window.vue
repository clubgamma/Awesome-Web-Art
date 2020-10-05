<template>
    
       <div id="cloudwindow" class='surface_1 animated fadeIn'>
           <loginForm/>
       </div>
    
</template>
<style scoped>
    #cloudwindow {
        width:80vw;
        height: 80vh;
        background: #000000eb;
        align-self: center;
        justify-self: center;
        display: grid;
    }
</style>
<script>
import loginForm from './login-form'
export default {
    components:  {
        loginForm
    }
}
</script>
