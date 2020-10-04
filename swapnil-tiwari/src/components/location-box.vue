<template>
    <div id="location" class="surface_1">
        <span v-html="location">{{location}}</span>
    </div> 
</template>

<script>
export default {
    data()
    {
        return {
            location:'Location not Available'
        }
    },
    methods:
    {
       getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else { 
            this.location = "Location not Available";
        }
        }, showPosition(position) {
       this.location = '<code>'+"Latitude: "+position.coords.latitude + '</code>'+ 
        "<code><br>Longitude: " + +position.coords.longitude+'</code>';
        }  
    },
    mounted() {
        this.getLocation();
    },
}
</script>
<style scoped>
#location
{
    width:fit-content;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
    position: fixed;
    top:0px;
    left:0px;
    z-index: 100;
}
</style>

