<template>
  <div>Test</div>
</template>
<script>
import { get } from "../../../store/utils/api";
export default {
  name: "Dashboard",
  mounted() {
    this.test();
  },
  methods: {
    test() {
      get(
        "https://api.atlassian.com/ex/jira/9d0b3b2f-532c-435d-9aa1-62cdace0059e/rest/api/2/dashboard/10000"
      ).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
