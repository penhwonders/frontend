<template>
  <v-main class="text-center pa-5">
    <!-- Introduction section -->
    <p class="text-h3 pt-5">About Penhwonders</p>
    <br />
    <p class="text-body-1 mx-5">
      A web application + Automation built by Cambodian college students to help
      your life easier in finding and promoting wonderful events in Phnom Penh!
      The events are automatically updated from a list of registered Facebook
      pages once everyday at 12:30am by our automated events-creating system.
    </p>

    <!-- Team member section -->
    <p class="text-h4">Developers</p>
    <v-layout row wrap justify-center>
      <v-card class="card mx-5 my-5 card-outter" elevation="10">
        <v-img
          height="280px"
          width="280px"
          src="../assets/MunyoudoumPav.jpg"
        ></v-img>
        <v-card-title primary-title class="justify-center">
          Munyoudoum Pav
        </v-card-title>
        <v-card-text>
          Web Automation<br />
          Full Stack Developer
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            href="https://www.instagram.com/munyoudoum/"
            target="_blank"
            icon
            ><v-icon size="30" class="icon">mdi-instagram</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn href="https://facebook.com/munyoudoum" target="_blank" icon
            ><v-icon size="30" class="icon">mdi-facebook</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn href="https://github.com/munyoudoum" target="_blank" icon
            ><v-icon size="30" class="icon">mdi-github</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            href="https://www.linkedin.com/in/munyoudoum/"
            target="_blank"
            icon
            ><v-icon size="30" class="icon">mdi-linkedin</v-icon></v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
      <v-card class="card mx-5 my-5 card-outter" elevation="15">
        <v-img
          height="280px"
          width="280px"
          src="../assets/Nel Sokchhunly_A.jpg"
        ></v-img>
        <v-card-title primary-title class="justify-center">
          Sokchhunly Nel
        </v-card-title>
        <v-card-text>
          Frontend Developer <br />
          UI/UX designer
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            href="https://www.instagram.com/chhunnnnlyyyy/"
            target="_blank"
            icon
            ><v-icon size="30" class="icon">mdi-instagram</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            href="https://web.facebook.com/harry.brown.us"
            target="_blank"
            icon
            ><v-icon size="30" class="icon">mdi-facebook</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn href="https://github.com/Nel-sokchhunly" target="_blank" icon
            ><v-icon size="30" class="icon">mdi-github</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            href="https://www.linkedin.com/in/sokchhunly-nel-2926341b9/"
            target="_blank"
            icon
            ><v-icon size="30" class="icon">mdi-linkedin</v-icon></v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-layout>

    <p class="text-h4">Appreciation</p>
    <v-card
      class="card mx-auto my-5 card-outter"
      elevation="15"
      max-width="280px"
    >
      <v-img height="280px" width="280px" src="../assets/bogdan.jpg"></v-img>
      <v-card-title primary-title class="justify-center">
        Bogdan Vorozhtsov
        <br />
        Founder
      </v-card-title>
      <v-card-text>
        founded Penhwonders in late 2017. The previous website needed to
        manually add events to the website. With a new idea to automate the process 
        of adding events, it leads to a new Penhwonders website in early 2021.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn href="https://www.instagram.com/sixsixone6/" target="_blank" icon
          ><v-icon size="30" class="icon">mdi-instagram</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          href="https://www.facebook.com/bohdan.vorozhtsov/"
          target="_blank"
          icon
          ><v-icon size="30" class="icon">mdi-facebook</v-icon></v-btn
        >
        <v-spacer></v-spacer>

        <v-btn
          href="https://www.linkedin.com/in/bogdan-vorozhtsov-0aa215120"
          target="_blank"
          icon
          ><v-icon size="30" class="icon">mdi-linkedin</v-icon></v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <!-- FAQs section -->
    <p class="text-h4">FAQs</p>
    <v-expansion-panels accordion multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="title"
          >What is the purpose of this website?</v-expansion-panel-header
        >
        <v-expansion-panel-content
          >To explore events easier and help the flow of traffic to some events.
          With the search, categories, dates filtering functions, add to Google
          Calendar, a neat and beautiful user experience and interface, finding
          events will be at ease in comparision to Facebook website. At the time
          of writing this, covid19 has affected a lot of businesses, and we hope
          that this will, in some ways, help them rise up again.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="title"
          >How do I register my events on your
          website?</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          If your business frequently has events, feel free to contact and
          register your Facebook page with us, we are happy to have you on
          board! <br />Otherwise, if your page rarely have events, you can just
          add one on
          <a href="http://penhwonders.com/AddUpdateEvent"
            >Add/Update new events</a
          >
          anytime.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="title"
          >How long did it take to develop this web
          app?</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <p class="font-italic">
            "I started working on it since mid September 2020 as a side project
            with no knowledge on web scraping and aws server, some knowledge on
            api and databases. While being busy for 8h a day, I spare extra 0-4h
            a day to learn and develop along the way. I asked Chhunly who was
            also a beginner in Vue.js to work on the frontend after done with
            70% of the backend. Since I know some Vue.js, I helped on some parts
            of the frontend. The development was roughly around 2.5 months and
            probably total hours of 350-450 hours combined. I would say we are
            happy with what we have made."
          </p>
          - Munyoudoum Pav
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="title"
          >Why don't I just look at events on
          Facebook?</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <p>
            There are some features like better searching functions than
            Facebook. You can select multiple dates and find the events of the
            days that you are available. Adding the event to Google Calendar is
            also another thing to improve your experience. You can also think of
            this like Eventbrite.com, but you don't have to manually create
            events. You are at ease of promoting your events. Of course, this
            web app is not complete and has a lot of potential to be improved
            like having a chatbox to connect with other people to socialize and
            meet new people with the same interest of events as you, so any
            feature requests are welcome.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.icon:hover {
  color: #63c6ff;
}
</style>
