<template>
  <div id="app">
    <div class="background">
    </div>
    <div class="overlay" id="overlay"></div>
    <div class="main-cont" id="mainWindow">
        <!-- <router-view :user="{name:'Kaa kaa chee chhee'}"  v-on:click.native="assistantSpeak"></router-view> -->
      <locationBox/>
      <weatherBox/>
      <timeBox/>
      <batteryBox/> 
       <frontFace :user="{name:'Kaa kaa chee chhee'}" v-on:click.native="assistantSpeak"/>
        <!-- <loginForm/> -->
      <!-- <cloudWindow/> -->
    </div> 
    
  </div>
</template>
<script>
import loginForm from './components/login-form'
import frontFace from './components/front-face'
import locationBox from './components/location-box'
import timeBox from './components/time-box'
import weatherBox from './components/weather-box.vue'
import batteryBox from './components/battery-box.vue'
import cloudWindow from './components/cloud-window'
import './assets/js/jqueryPG.js'
export default {
  name: 'App',
  components: {
    frontFace,
    locationBox,
    timeBox,
    weatherBox,
    batteryBox,
    cloudWindow,
    loginForm
    
  },
  methods:
  {
    loadParticles () {
    particleground(document.getElementById('overlay'), {
      dotColor: '#1a68e2',
      lineColor: '#5cbdaa',
       density:9950,
       
    });

   
  },
   assistantSpeak()
    {
      textToSpeech.speech_front();
      textToSpeech.speech_bat();
      textToSpeech.speech_weather();
    }

  },
  mounted()
  {
    this.loadParticles();

  }
  
}
// function assistantSpeak()
//     {
//       textToSpeech.speech_front();
//       textToSpeech.speech_bat();
//       textToSpeech.speech_weather();
//     }
    
// document.addEventListener('DOMContentLoaded', function () {
//     particleground(document.getElementById('overlay'), {
//       dotColor: '#1a68e2',
//       lineColor: '#5cbdaa',
//        density:9950
//     });
   
//   }, false);
  
</script>

<style>
@import url(assets/css/style.css);
@import url('https://fonts.googleapis.com/css?family=Raleway');

#app {
  font-family: 'Raleway', sans-serif;
  font-weight: unset;
  color: #fff;
}

</style>
