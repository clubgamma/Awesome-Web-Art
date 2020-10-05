<template>
    <div id='loginform'>
        <form>
            
            <input type="text" placeholder="Username!" class='inp_small' required>
           <br><br> <input type="password" name="" id="" placeholder="Key?" class='inp_small' required>
           <br><br> <button class='btn btn-outline-info'>Verify</button>
        </form>   
    </div>
</template>
<style scoped>
.btn-outline-info
{
    color: white;
    background-color: transparent;
    background-image: none;
    border-color: #033a9e;

}
.btn
{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding:15px;
    width: 100px; 
    border:1px solid #033a9e;
    justify-self: center;
    font-family:monospace;
}
#loginform
{
    width: 50%;
    justify-self: center;
    align-self: center;
    padding: 20px;
    
}
#loginform form 
{
    display: grid;
    justify-content: center;
     font-family:monospace;
}
.inp_small
{
    background: inherit;
    padding: 10px;
    border-bottom:2px solid #033a9e;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    font-size: 20px;
    color:white;
     font-family:monospace;
}
</style>

<script>
export default {
    
}
</script>
