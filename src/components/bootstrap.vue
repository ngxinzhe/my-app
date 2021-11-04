<template>
  <div>
    <h1>*** BOOTSTRAP PAGE***</h1>
    <router-link to="/">HOME PAGE</router-link>
    <br>
    <router-link to="/second">SECOND PAGE</router-link>
    <br>
    <router-link to="/api">API PAGE</router-link>
    <br>
    <router-link to="/bootstrap">BOOTSTRAP</router-link>
    <br>
    <hr>
    <br>

    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>

    <div>
      <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h2 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h3 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h4 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h5 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    </div>

    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>

    <div>
      <b-icon icon="camera" font-scale="0.5"></b-icon>
      <b-icon icon="camera" font-scale="1"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="3"></b-icon>
      <b-icon icon="camera" font-scale="4"></b-icon>
      <b-icon icon="camera" font-scale="5"></b-icon>
      <b-icon icon="camera" font-scale="7.5"></b-icon>
    </div>

    <div>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
    </div>

    <div>
      <h5>Small image with <code>fluid</code>:</h5>
      <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>

      <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
      <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>