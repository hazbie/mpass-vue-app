<template>
  <div id="app">
      <div class="container">
        <div class="testimonial">

          <div v-bind:class="'testimonial-card ' + testimonial.style_css_class" v-for="testimonial of testimonials" :key="testimonial.id">
            <div class="testimonial-profile">
              <img class="testimonial-face" :src="getImgUrl(testimonial.image)"  v-bind:alt="testimonial.author" >
              <div class="testimonial-user">
                <div class="testimnial-name">{{testimonial.author}}</div>
                <div class="testimonial-work">{{testimonial.verified_graduate}}</div>
              </div>
            </div>

            <div class="testimonial-title">
              <h3>{{testimonial.title}}</h3>
            </div>
            <div class="testimonial-text">
              <p>{{testimonial.paragraph}}</p>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import './App.css';

export default {
  name: 'app',
  data() {
    return {
      testimonials: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/testimonials`)

      this.testimonials = res.data;

      
    } catch(e) {
      console.error(e)
    }
  },
  components: {
    
  }
}
</script>
