<template>
    <div id="weather" class="surface_1">
        <code><span>Temperature : </span><span>{{temp}}</span></code>
        <br><code><span>Location : </span><span>{{city}}</span></code>
        <br><code><span>Description </span><span>{{description}}</span></code>
        <br><code><span>Humidity : </span><span>{{humidity}}</span></code>
    </div>   
</template>
<style scoped>
#weather
{
    width:30vh;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
    position: fixed;
    bottom:0px;
    left:0px;
    z-index: 100;
}
</style>
<script>
import {getWeather} from '../assets/js/weatherApi.js'
export default {
    data()
    {
        return {
            temp:'Temperature not available',
            humidity:'Pressure not available',
            city:'City not available',
            description:'Not available'
        }
    },
    methods:
    {
        async fetchWeather()
        {   
        let weather=await getWeather();
        this.city=weather.city.name;
        this.temp=Math.round(weather.list[0].main.temp-273)+'°C';
        this.description=weather.list[0].weather[0].description;
        this.humidity=weather.list[0].main.humidity+ '%';
        

        },
        speech_weather()
        {   
            let msg = new SpeechSynthesisUtterance(`What are you doing at ${this.city} ? `);
            window.speechSynthesis.speak(msg);
            let msg1 = new SpeechSynthesisUtterance(`Temperature is ${this.temp}`);
            window.speechSynthesis.speak(msg1);

        }
    },

    mounted()
    {
       this.fetchWeather();
         window.textToSpeech={...window.textToSpeech||{},
            speech_weather:this.speech_weather
            };
      
    }
    
}

</script>
