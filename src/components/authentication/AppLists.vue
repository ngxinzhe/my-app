<template>
  <b-container>
    <b-row>
      <b-col cols="3" v-for="(app, index) in apps" :key="`app-${index}`">
        <b-card
          :title="app.name"
          :img-src="app.avatarUrl"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-button @click="setApp(app.id)" variant="primary"
            >Dashboard</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { post, get } from "../../store/utils/api";
import { tokenExchange, cloudidExchange } from "../../store/urls";
import { clientId, clientSecret, authorizationRedirectURL } from "../../../env";
import { ToastMixin } from "../../helpers/mixins";

export default {
  name: "TokenPage",
  mixins: [ToastMixin],
  components: {},
  data() {
    return {
      apps: [],
    };
  },
  mounted() {
    const authCode = this.$route.query.code;
    const header = {
      "Content-Type": "application/json",
    };
    const data = {
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode,
      redirect_uri: authorizationRedirectURL,
    };

    //Exchange token using query code on URL passed from jira authorization page
    post(tokenExchange, data, header)
      .then((res) => {
        let token = res.data.access_token;
        this.$store.dispatch("setTokenAction", token);
      })
      .catch((error) => {
        this.showToast("Error Occurred", error);
      });

    this.getApps();
  },
  methods: {
    getApps() {
      const header = {
        Authorization: `Bearer ${this.$store.getters.getToken}`,
        Accept: "application/json",
      };
      //Exchange cloud id with token
      get(cloudidExchange, header)
        .then((res) => {
          this.apps = [...res.data];
        })
        .catch((error) => {
          this.showToast("Error Occurred", error);
        });
    },
    setApp(appId) {
      this.$store.dispatch("setAppIDAction", appId);
      // TODO Update this logic later
      this.$router.push({ name: "Jira" });
    },
  },
};
</script>

<style></style>
