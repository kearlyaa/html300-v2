<template>
    <div class="container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div v-if="!formSubmitted && !formError">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" v-model="name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email address" v-model="email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Enter your message" v-model="message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div v-if="formSubmitted" class="alert alert-success">
          Your message has been sent successfully!
        </div>
        <div v-if="formError" class="alert alert-danger">
          {{ formErrorMessage }}
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        formSubmitted: false,
        formError: false,
        formErrorMessage: ''
      };
    },
    methods: {
      submitForm() {
        // form submission logic here
        /* form submission is successful */
        if (this.formSubmitted) {
          this.formSubmitted = true;
          this.formError = false;
        } else {
          this.formSubmitted = false;
          this.formError = true;
          this.formErrorMessage = 'There was an error submitting your message. Please try again.';
        }
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  textarea {
    resize: vertical;
  }
  </style>
  