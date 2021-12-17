<template>
  <div id="backgrounds">
    <h1 style="text-align: center; margin: 50px; background: lightgreen; padding: 20px; border-radius: 50px">
      Default Dashboard Test
    </h1>
    <div
      v-for="(dashboard, index) in dashboards"
      :key="`dashboard-${index}`"
      style="width: 900px; margin-left: 200px; background-color: grey; padding: 50px; border-radius: 50px"
    >
      <h2 style="text-align: center; background-color: lightblue">1.DASHBOARD NAME</h2>
      <h5 style="text-align: center; background-color: pink">
        {{ dashboard.name }}
      </h5>
      <br />
      <h2 style="text-align: center; background-color: lightblue">2.DASHBOARD ID</h2>
      <h5 style="text-align: center; background-color: pink">
        {{ dashboard.id }}
      </h5>
      <br />
      <h2 style="text-align: center; background-color: lightblue">3.DASHBOARD SELF API LINK</h2>
      <h5 style="text-align: center; background-color: pink">
        {{ dashboard.self }}
      </h5>
      <br />
    </div>
  </div>
</template>
<script>
import { get } from '../../../store/utils/api'
import { atlassianJiraURL } from '../../../../env'
export default {
  name: 'Dashboard',

  data() {
    return {
      dashboards: [],
    }
  },
  mounted() {
    this.test()

    get(atlassianJiraURL + '/' + this.$store.getters.getAppID + '/rest/api/2/issue/NEB-12').then((res) => {
      console.log(res)
    })
  },
  methods: {
    test() {
      get(atlassianJiraURL + '/' + this.$store.getters.getAppID + '/rest/api/2/dashboard').then((res) => {
        this.dashboards = [...res.data.dashboards]
        console.log(this.dashboards)
      })
    },
  },
}
</script>

<style>
#backgrounds {
  background-image: url('/color.jpg');
  background-size: cover;
  align-items: center;
}
</style>
