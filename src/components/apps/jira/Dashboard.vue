<template>
  <div></div>
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
    //this.test()

    get(
      atlassianJiraURL +
        '/' +
        this.$store.getters.getAppID +
        '/rest/api/2/search?jql=project = Nebular order by created DESC'
    ).then((res) => {
      console.log(res)
    })
    get(atlassianJiraURL + '/' + this.$store.getters.getAppID + '/rest/api/2/project').then((res) => {
      console.log(res)
    })

    get(atlassianJiraURL + '/' + this.$store.getters.getAppID + '/rest/api/2/users/search').then((res) => {
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
