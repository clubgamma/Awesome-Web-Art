<template>
    <div id="battery" class="surface_1">
         <code><span>Battery: </span><span>{{battLevel}}</span></code>
        <br><code><span>Charging: </span><span>{{chargeStatus}}</span></code>
    </div>   
</template>
<style scoped>
#battery
{
    width:20vh;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
    position: fixed;
    bottom:0px;
    right:0px;
    z-index: 100;
}
</style>
<script>
export default {
    data()
    {
        return {
            battLevel : 'Not Available',
            chargeStatus : 'Not Available'
        }
        
        
    },
    methods:
    {
        async fetchBattery()
        {
            let batt=await navigator.getBattery();
            this.battLevel=Math.round(batt.level*100)+'%';
            this.chargeStatus=batt.charging;

            
        },
        speech_bat()
        {   
            let msg1 = new SpeechSynthesisUtterance(`Battery Status is ${this.battLevel}`);
            window.speechSynthesis.speak(msg1);

        }
    },
    mounted() {
      this.fetchBattery();  
        window.textToSpeech={...window.textToSpeech||{},
            speech_bat:this.speech_bat
            };
    }
}

</script>


