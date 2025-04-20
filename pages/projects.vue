<template>
  <div class="infoPage">
    <div class="corners tLeft">
      <h3>Here's a cat fact</h3>
      <p>{{ catFact?.fact }}</p>
    </div>

    <div class="corners tRight">
      <h3>Here's the weather</h3>
      <p>Temp: {{ weather?.current_weather?.temperature }}°C</p>
      <p>Wind: {{ weather?.current_weather?.windspeed }} km/h</p>
    </div>

    <main class="projectsCont">
      <h1>My Projects</h1>
      <ul class="projectList">
        <li><strong>COS212 Assignment 1</strong></li>
        <li><strong>Grade 12 Matric Final IT Capstone Practical Project</strong></li>
        <li><strong>COS212 Assignment 2</strong></li>
        <li><strong>COS216 Practical Assignment 3</strong></li>
      </ul>

      <router-link to="/" class="backBtn">Back to Home</router-link>
    </main>
  </div>
</template>

<script setup>
import { catInformation } from '~/composer/catInformation'
import { weatherInformation } from '~/composer/weatherInformation'

const catFact = await catInformation()
const weather = await weatherInformation()
</script>

<style scoped>
@import "assets/projects.css";
</style>