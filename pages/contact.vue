<template>
  <div class="contact-page">
    <header>
      <h1>Contact Me</h1>
    </header>

    <form name="contact" method="POST" data-netlify="true" class="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      <p><input type="text" name="name" placeholder="Your Name" required class="input-field" /></p>
      <!-- <p><input type="email" name="email" placeholder="Your Email" required class="input-field" /></p> -->
      <p><textarea name="message" placeholder="Your Message" required class="input-field"></textarea></p>
      <h3>Find me at: u24580482@tuks.co.za</h3>
      <div class="btnSubmitCont">
        <p><button type="submit" class="btnSubmit">Send</button></p>
      </div>
    </form>

    <div class="btnBackCont">
      <router-link to="/" class="btnBack">Back to Home</router-link>
    </div>
  </div>
  </template>

<style scoped>
@import 'assets/contact.css';
</style>