<template>
  <div id="background">
    <b-container>
      <b-row align-h="center" align-content="center">
        <img
          src="../../assets/logodesign.png"
          style="
            padding: 30px;
            width: 400px;
            height: 150px;
            border-radius: 50px;
          "
        />
      </b-row>
      <b-row
        style="
          background-color: white;
          border-radius: 20px;
          padding: 30px;
          padding-bottom: 60px;
        "
      >
        <b-col>
          <img
            src="../../assets/project-management.png"
            style="width: 100%; height: 500px; border-radius: 30px"
          />
        </b-col>
        <b-col>
          <b-container
            style="
              background-color: powderblue;
              border-radius: 30px;
              padding: 40px;
              height: 450px;
              width: 400px;
              margin-top: 50px;
            "
          >
            <b-row
              align-h="center"
              align-content="center"
              style="text-align: center; font-family: Fantasy; opacity: 0.7"
              ><h1>Login</h1></b-row
            >
            <br />
            <b-row align-h="center" align-content="center"
              ><h4>Why Nebular?</h4>
            </b-row>
            <b-row align-h="center" align-content="center"
              ><p>
                Nebular is a jira supported application which help you to track
                project's status of jira in a view of clear and simple.
              </p>
            </b-row>
            <br />
            <br />
            <b-row
              align-h="center"
              align-content="center"
              style="color: brown; font-size: 14px"
              ><p>Sign in with Atlassian account to grant access from JIRA.</p>
            </b-row>
            <b-row align-h="center" align-content="center">
              <b-button
                id="button1"
                v-on:click="authorizeJira"
                variant="primary"
                style="width: 250px"
              >
                sign in with Atlassian account</b-button
              >
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
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

<style>
#background {
  background-image: url(../../assets/blue.jpg);
  background-size: cover;
  height: 800px;
}
</style>
