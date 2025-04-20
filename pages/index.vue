<template>
  <div class="home">
    <header>
      <h1>Welcome to My Portfolio</h1>
    </header>

    <section class="biography">
      <img src="/pic.jpeg" alt="pic of me" class="mePic" />
      <h2>Name: Dominiqu</h2>
      <p>
        My name is Dominiqu and at the time of making this I am a 2nd year IKS student. I'm studing this because I enjoy it and see a future where I will be able to make a good living using this degree. Yoh, but theres a lot of work involved, like no joke I basically have a million assignments due on the first day back after recess. COS216 is a real headache I cant lie. But anyway such is life.
      </p>
    </section>

    <section class="btnGroup">
      <router-link to="/projects" class="btnProjects">Look at my projects here</router-link>
      <router-link to="/contact" class="btnContact">Contact me here</router-link>
    </section>
  </div>
</template>


<style scoped>
@import 'assets/index.css';
</style>