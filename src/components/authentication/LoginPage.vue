<template>
  <b-container>
    <b-row align-h="center" align-content="center">
      <b-col cols="3">
        <b-button id="button1" v-on:click="authorizeJira" variant="primary">
          sign in with Atlassian account</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { authorizationURL } from "../../../env";

export default {
  name: "LoginPage",
  components: {},

  data() {
    return {};
  },

  methods: {
    //go to jira authorization page
    authorizeJira() {
      window.location.href = authorizationURL;
    },
  },
};
</script>
