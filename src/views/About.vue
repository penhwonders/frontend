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
        manually add events to the website. With a new idea of his to do web
        scraping on Facebook to automate the process of adding events, it leads
        to a new Penhwonders website.
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
      <v-expansion-panel>
        <v-expansion-panel-header class="title"
          >Registered Facebook pages</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-layout row wrap justify-center>
            <v-chip
              class="ma-2"
              v-for="page in pageList"
              :key="page.name"
              :href="page.pageLink"
              target="_blank"
            >
              <v-avatar left> <img :src="page.profileAvartar" /> </v-avatar
              >{{ page.name }}
            </v-chip>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      pageList: [
        {
          pageLink: "https://www.facebook.com/FactoryPhnomPenh/",
          name: "Factory Phnom Penh",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/119065797_2133940856749500_1178433881066600944_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEVUEpKXlmP6ppb30luLa4rJ2gNa8Nl3qUnaA1rw2XepYt-i2rWcUIIo2es6eh0POjFv3Lz82ycSmNpaMh2OSow&_nc_ohc=Rlsan_O9BTQAX-t1QJd&_nc_ht=scontent.fpnh8-2.fna&oh=dd4da8be5ca864b7583931c01345119f&oe=601F4757",
        },
        {
          pageLink: "https://www.facebook.com/Phnomclimb",
          name: "Phnom Climb Community Gym",
          profileAvartar:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/35226172_1010204765785411_8702129561657147392_n.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFVn-Sug0GwaA9Fyzq9Qh1B9584p4M3OvD3nzingzc68BgTWcI42Fn3143OW5fe1WEGyxskdcGunsRNi6c851Bk&_nc_ohc=IVzf0Qkuu2wAX8rc-M9&_nc_ht=scontent.fpnh8-1.fna&oh=67ee2ca7affd080f8c220b32506e9eb4&oe=601FEE04",
        },
        {
          pageLink: "https://www.facebook.com/Nerdnightphnompenh",
          name: "Nerd Night Phnom Penh",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/11998940_1142916492389120_492723222230033480_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFHLOhhKWF21m1jkL4f3zb__Euouc9YLr_8S6i5z1guv8mq1SkYcq31rcXNQtHAtck-kJIXszgQtur_vN9hHLho&_nc_ohc=FK985VFbQYcAX9jZAA5&_nc_ht=scontent.fpnh8-2.fna&oh=02fbc6f39fb94793ae9f8b7668aa8a52&oe=601D8FA5",
        },
        {
          pageLink: "https://www.facebook.com/AmatakFitness",
          name: "CrossFit Amatak",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/61784907_2464567340489414_9060098691888578560_n.png?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEV1SJgC3PruC3FMZ234Kzn8csmhK-zEv_xyyaEr7MS_76tkRCQ5Qulk5XY3ceZAFHkc-Q3RfwDeJghVjrvQ4_9&_nc_ohc=Od6OwoFh64YAX8JJk9v&_nc_ht=scontent.fpnh8-2.fna&oh=dbd37647b25b4768c4a4dc0f89559873&oe=601D23D4",
        },
        {
          pageLink: "https://www.facebook.com/runningbongs",
          name: "RB runners club",
          profileAvartar:
            "https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/18301961_1766566516988675_151532821681922665_n.png?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFUXawml04SHF4jxDu73AW5RlB4PTt0-clGUHg9O3T5yaMlOuI9zRsEiVBJkPD-kJWFsotY-TdMQa3cQP_35Uwz&_nc_ohc=FOhxq3XvYasAX9QnGwO&_nc_ht=scontent.fpnh2-1.fna&oh=339e3e5290db068f366475dde39fceb5&oe=601FF521",
        },
        {
          pageLink: "https://www.facebook.com/alchemygastro",
          name: "Alchemy GastroPub",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/24796265_703111336563087_8347658138500499486_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE2QpJXWYPSKynlpPZjbeITblHW0QZromtuUdbRBmuia7OlE1G6SkwDC1AXj-hfPJngtF0xVR_kddgOFTFW35gB&_nc_ohc=Nxt6Fdno5_gAX_mWl0B&_nc_ht=scontent.fpnh8-2.fna&oh=ffb0c624ad474fd33268346f2b0f9e11&oe=601C4EE8",
        },
        {
          pageLink: "https://www.facebook.com/longafterdarkcambodia",
          name: "Long After Dark",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/45381064_1000738733433252_9171228707224813568_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHfW3lNvNynoFudknK4KjAND70tX4oQ34kPvS1fihDfiRD9RA0wvhCnyvY1u5DHvm8hBO62hiBf4z-XGs9IfgST&_nc_ohc=IPz3N3trCEwAX-2DGaI&_nc_ht=scontent.fpnh8-2.fna&oh=81f65cf7acc415a8a5ffd6f576d5dab6&oe=601FDFC3",
        },
        {
          pageLink: "https://www.facebook.com/petanquebar",
          name: "La Petanque bar",
          profileAvartar:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t1.0-9/19875193_740500889473050_6542788228850730903_n.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFYyVvtdcj--hToNkmGed4UJKQst1YtkXwkpCy3Vi2RfJdZJUejEZyFGBbRWy3s6chmaJCSIrewTh75VWlR3HC_&_nc_ohc=HnomMUgvm1gAX9X6Ky_&_nc_ht=scontent.fpnh8-1.fna&oh=c7c0558b4b96b2dab4cb7d39d0696461&oe=601C866E",
        },
        {
          pageLink: "https://www.facebook.com/topazrestaurant",
          name: "Topaz Restaurant",
          profileAvartar:
            "https://scontent.fpnh8-1.fna.fbcdn.net/v/t31.0-8/28616982_1656392047737612_6832951242314493151_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHwp71RhB-HSV8FYX7YFOfuFRKewiM_wAUVEp7CIz_ABRKZKI-U0HdwY2TA1YcSknvOpdzXO-ZYI_F5E92l3CNG&_nc_ohc=QKnwsll5v9gAX-B9jsP&_nc_ht=scontent.fpnh8-1.fna&oh=92087788b34dad053d38d9444a9a15c4&oe=601CE0EE",
        },
        {
          pageLink: "https://www.facebook.com/FarmToTablePP",
          name: "Farm to Table",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t31.0-8/13147391_1034641116612483_3208067345772174070_o.png?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFLT-J4ywD8q1pbiyzlmMpt5Uv7VFXThYXlS_tUVdOFhQq0-jL2vQ02DZ44UiT2tNRJcbV9awo4qPCFPWYXN8pu&_nc_ohc=-bRQ07u-kosAX_5dM7N&_nc_ht=scontent.fpnh8-2.fna&oh=a75e6735795deab6599cf348e531c38c&oe=601D3358",
        },
        {
          pageLink: "https://www.facebook.com/TheFlicksPage",
          name: "The Flicks Community Movie Theater",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/116787559_3045442605553104_5391793278587134292_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGc2lU7vsE_BjXMnW2zGi2OvyNm-ieOahy_I2b6J45qHHmztzSNKMxHq-go_tL206s6pPH2cWHUrnnYdKX0hX1E&_nc_ohc=yizl0JzuZtAAX_rLjml&_nc_ht=scontent.fpnh8-2.fna&oh=58a925756b23786e9dd352e6843bfa22&oe=601E9641",
        },
        {
          pageLink: "https://www.facebook.com/botanicowineandbeergarden",
          name: "Botanico Wine & Beer Garden",
          profileAvartar:
            "https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/74459657_3052377821456914_475696425787719680_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGuYNlqZws_qBF8DSmDY5xEbV1S-JyD_cVtXVL4nIP9xR7UYbJyV4YRKyiIsaNR4CIdjRssF3qPbrZEq5Q0oxvO&_nc_ohc=1X7f9El5CDsAX_3AP_g&_nc_ht=scontent.fpnh8-2.fna&oh=915aed104813994adba4b927ef8dbda5&oe=601DA3B8",
        },
        {
          pageLink: "https://www.facebook.com/friendsfuturesfactorykh",
          name: "Friends Future Factory",
          profileAvartar:
            "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/128871902_834757724015247_1463256839828495407_n.png?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFMFeKmbxmMqNwdloWjrGTBV9tyqXr6JGxX23KpevokbLNr9k-kyKI-gs2E6a3vYrxJaoLQEqsJ8LNkD3zb8GvS&_nc_ohc=eoOsK3Uyg5sAX_5DF2s&_nc_ht=scontent.fpnh10-1.fna&oh=0fb00e10e74756077adc37ef5a783f12&oe=60306261",
        },
        {
          pageLink: "https://www.facebook.com/STEMCambodia",
          name: "STEM Education Organization for Cambodia",
          profileAvartar:
            "https://scontent.fpnh10-1.fna.fbcdn.net/v/t31.0-8/12967963_241993816153559_6357391204047304148_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFLmipCir2pYyodXS6fCslgkTDwPmLDC0iRMPA-YsMLSKwx4vx_0FDCj31unsSx7T0T9_STTIauA6BvYWjUW8-S&_nc_ohc=S7lljakcvcAAX_TFhry&_nc_ht=scontent.fpnh10-1.fna&oh=31f22f406a10296fe7ac7121df486df2&oe=60300700",
        },
        {
          pageLink: "https://www.facebook.com/moeys.gov.kh",
          name: "MoEYS Cambodia",
          profileAvartar:
            "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/131440744_4273969555962959_2739629284368092107_n.png?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGoxyQyxWl2xxBjKWCFUj2gHygBh87BtrQfKAGHzsG2tJHiyLG8lnUuSlY3LiARF4ENV1mHQG0qfS07LeTY__EO&_nc_ohc=mnPi5PqgZogAX9B5jtM&_nc_ht=scontent.fpnh10-1.fna&oh=38667f27341659c85c54d045ab1bc945&oe=602FD884",
        },
        {
          pageLink: "https://www.facebook.com/AzurePP",
          name: "Azure Bar and Grill",
          profileAvartar:
            "https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/82459277_468296237185540_3439246773678243840_n.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=MK05rESN62cAX-zEuBS&_nc_ht=scontent.fpnh10-1.fna&oh=fd1c667dcb275f41b808fe9f0bfe4e98&oe=6037D4DF",
        },
        {
          pageLink: "https://www.facebook.com/lanternrooftopbar.asia",
          name: "Lantern Rooftop Bar",
          profileAvartar:
            "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/93954885_228957398451552_4587781725106470912_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGANsNUsHI7MbnPG9ughDzV3F5tJBz73XPcXm0kHPvdc_xlKUhQq4c_hwAfCpUR3EFxQBVqMCSUwsNvHe7urEk2&_nc_ohc=u5BTuBcEgOUAX8Zjb27&_nc_ht=scontent.fpnh1-1.fna&oh=77517716d3c2d2332cf9f40d842363df&oe=60418E7D",
        },
        {
          pageLink: "https://www.facebook.com/hardrockcafephnompenh",
          name: "Hard Rock Cafe Phnom Penh",
          profileAvartar:
            "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/67815541_2937763852907714_328706435712024576_n.png?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEvvcQOM0kKSxJBD5SCCtRcgkkb9jycJxWCSRv2PJwnFYtn3vOQJ9Z_0D4UIXxBJxumu4RjW00PKoGvKo05Bl9v&_nc_ohc=gP9vugvc1nYAX-17kEb&_nc_ht=scontent.fpnh1-1.fna&oh=6499efc187e800aaa20f70a28396db8a&oe=6042E87E",
        },
        {
          pageLink: "https://www.facebook.com/tangocambo",
          name: "Tango Cambodia",
          profileAvartar:
            "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/118162601_605282550189985_8273306191097943879_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFdVhKmjiREhuZQJZHjJs7tmC23I5o-mqaYLbcjmj6apqaqlMKMOfhNF_oyGzoL7YYUIDubuj90MVL1tBvoczxZ&_nc_ohc=QC41CRwNVlQAX_p1SY0&_nc_ht=scontent.fpnh1-1.fna&oh=36e171b059658af5dc385cd0d1dde68b&oe=60418B46",
        },
        {
          pageLink: "https://www.facebook.com/TwoBirdsCraftBeer",
          name: "TwoBirds Craft Beer",
          profileAvartar:
            "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/75464238_734787793651755_6825379005361815552_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHjmUIMlzJgpyZVwRWeEBpHUAGa0NQy1fVQAZrQ1DLV9cRnn_zkxVNNkRJ6iZ9AQ1GmL0k_nwARrLPFmDhg7JPI&_nc_ohc=HatHnZSoJ9IAX8XLHPs&_nc_oc=AQnyt9RxgiRBxUVgqZUOwXO-lXNF23XRk_frQSLIoK2Bs08y_mr9gtbUaflIzbBbwM4&_nc_ht=scontent.fpnh1-1.fna&oh=017013c1678e758a8a8bde288b7f2324&oe=6043289B",
        },
        {
          pageLink: "https://www.facebook.com/Theboxofficephnompenh",
          name: "The Box Office - Phnom Penh",
          profileAvartar:
            "https://scontent.fpnh1-2.fna.fbcdn.net/v/t31.0-8/13217075_1724444387832985_8051552019381899381_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFBowEovcGQDsGz5_tUkVtHJz8OO7IgCdsnPw47siAJ2_9cq-MoB8WmpOff0WUCJ4YE2BweedwYKmQcVnZ_4tYh&_nc_ohc=FSHIXiOEDr0AX8lO9nl&_nc_ht=scontent.fpnh1-2.fna&oh=cab6d53bbdae84425b92d724e4c8b4a2&oe=6042A6A1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon:hover {
  color: #63c6ff;
}
</style>
