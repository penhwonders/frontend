<template>
  <v-dialog
    v-model="dialog"
    scrollable
    :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-2" color="background" dark v-bind="attrs" v-on="on">
        share
      </v-btn>
    </template>

    <v-card class="pa-5">
      <ShareNetwork
        class="share-button"
        v-for="network in networks"
        :key="network.network"
        :network="network.network"
        :style="{ backgroundColor: network.color }"
        :url="shareData.url + '\n'"
        :title="
          shareData.title +
            ' hosted by ' +
            shareData.hosts.join(', ') +
            '\nview the event now on Penhwonder'
        "
        :description="shareData.description"
        :quote="qoute"
        hashtags="penhwonders,event"
      >
        <v-icon large class="share-icon">{{ network.icon }}</v-icon>
        <span class="share-text">Share on {{ network.name }}</span>
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
      )} \nview the event now on Penhwonder
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

<style scoped>
.share-button {
  text-align: left;
  margin: 5px 0;
  padding: 0.8rem 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.share-icon {
  margin: 0 0.5rem;
  widows: 24px;
}

.share-text {
  color: #fff;
  font-weight: 600;
  font-size: 1em;
}
</style>
