<template>
  <v-dialog
    v-model="dialog"
    scrollable
    :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        color="background"
        dark
        v-bind="attrs"
        v-on="on"
      >
        share
      </v-btn>
    </template>

    <v-card class="pa-5">
      <ShareNetwork
        class="pa-3 my-2 text-decoration-none"
        v-for="network in networks"
        :key="network.network"
        :network="network.network"
        :style="{ backgroundColor: network.color }"
        :url="shareData.url + '\n'"
        :title="
          shareData.title +
            ' hosted by ' +
            shareData.hosts.join(', ') +
            '\nview the event now on Penhwonders'
        "
        :description="shareData.description"
        :quote="qoute"
        hashtags="penhwonders,event"
      >
        <v-icon
          large
          class="share-icon mx-2"
          color="white"
        >
          {{
            network.icon
          }}
        </v-icon>
        <span class="text--body font-weight-bold white--text">Share on {{ network.name }}</span>
      </ShareNetwork>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopupShare",
  props: {
    shareData: Object,
  },
  computed: {
    qoute() {
      const data = this.shareData;

      return `${data.title} \nhosted by ${data.hosts.join(
        ", "
      )} \nview the event now on Penhwonders.com
        `;
    },
  },
  data() {
    return {
      dialog: false,
      networks: [
        {
          network: "facebook",
          name: "Facebook",
          icon: "mdi-facebook",
          color: "#1877f2",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "mdi-twitter",
          color: "#1da1f2",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "mdi-telegram",
          color: "#0088cc",
        },
      ],
    };
  },
};
</script>
