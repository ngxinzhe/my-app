<template>
  <b-container>
    <b-row>
      <b-col v-for="(app, index) in apps" :key="`app-${index}`" cols="3">
        <b-card :title="app.name" :img-src="app.avatarUrl" img-alt="Image" img-top tag="article" class="mb-2">
          <b-button variant="primary" @click="setApp(app.id)">Dashboard</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { post, get } from '../../store/utils/api'
import { tokenExchange, cloudidExchange } from '../../store/urls'
import { clientId, clientSecret, authorizationRedirectURL } from '../../../env'
import { ToastMixin } from '../../helpers/mixins'

export default {
  name: 'TokenPage',
  components: {},
  mixins: [ToastMixin],
  data() {
    return {
      apps: [],
    }
  },
  async mounted() {
    const authCode = this.$route.query.code
    const header = {
      'Content-Type': 'application/json',
    }
    const data = {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode,
      redirect_uri: authorizationRedirectURL,
    }

    //Exchange token using query code on URL passed from jira authorization page
    await post(tokenExchange, data, header)
      .then(async (res) => {
        let token = res.data.access_token
        await this.$store.dispatch('setTokenAction', token)
      })
      .catch((error) => {
        this.showToast('Error Occurred', error)
      })

    await this.getApps()
  },
  methods: {
    async getApps() {
      const header = {
        Accept: 'application/json',
      }
      //Exchange cloud id with token
      await get(cloudidExchange, header)
        .then((res) => {
          this.apps = [...res.data]
        })
        .catch((error) => {
          this.showToast('Error Occurred', error)
        })
    },
    setApp(appId) {
      this.$store.dispatch('setAppIDAction', appId)
      // TODO Update this logic later
      this.$router.push({ name: 'Jira' })
    },
  },
}
</script>

<style></style>
