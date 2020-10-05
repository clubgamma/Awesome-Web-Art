<template>
    <div class="animating-cir-cont">
        <div id="animating-circles" class="surface_1 ">
            
        </div>
    </div>    
        
</template>
<script>

export default {
    components:
    {
        
    }
}
</script>


<style scoped>
@keyframes rot {
	from {
		transform: rotate(0deg)
		           translate(-180px)
		           rotate(0deg);
	}
	to {
		transform: rotate(360deg)
		           translate(-180px) 
		           rotate(-360deg);
	}
}

#animating-circles
{
    background:#057bf7cc;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    margin: auto;
    animation: rot 4s infinite linear
}
.animating-cir-cont
{
    display: grid;
    width: 100%;
    height: 100%;
    position:absolute;
}

</style>

