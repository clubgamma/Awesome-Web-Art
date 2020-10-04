<template>
    <div id='timeBox' class="surface_1">
        <code>Date : <span v-html="date"></span></code>
    </div>   
</template>
<script>
const months=['January','February','March','April','May','June','July','August','September','October','November','December']
let today=new Date();
    let date='<code>'+today.getDate()+ '&nbsp' + months[(today.getMonth())] + '&nbsp' + today.getFullYear()+'</code>';
    //let time=today.getHours()+ ' : ' + today.getMinutes();
export default {

    data()
    {
        return {
            date: date,
        }
    }
}
</script>

<style scoped>
#timeBox
{
    width:fit-content;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
    position: fixed;
    top:0px;
    right:0px;
}
</style>

