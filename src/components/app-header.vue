<template>
  <v-app-bar app theme="dark" class="d-print-none" style="z-index:999">
      <div>
        <a :href="leftIconHref" target="_blank">
          <img alt="Logo" src="/logo_left.svg" style="min-height:40px; margin-left:10px" />
        </a>
      </div>

      <v-spacer></v-spacer>

      <div>
        <a :href="rightIconHref" target="_blank">
          <img alt="Logo" src="/logo_right.svg" style="min-height:70px" />
        </a>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    leftIconHref: {
      type: String,
      default: 'https://www.example.com/left'
    },
    rightIconHref: {
      type: String,
      default: 'https://www.example.com/right'
    }
  }
};
</script>