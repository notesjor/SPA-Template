<template>
  <v-footer theme="dark"
      style="z-index: 100; max-height: 80px; position: absolute; bottom: 0; width: 100%; padding-left:25px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'left middle right';">
      <div style="color:white; grid-area: left; margin-top: 10px; font-size: 12px;" v-if="!useMobileView">
        <img alt="Logo" src="/owid-logo-dunkel.svg" style="max-height:15px; margin:-10px 0px 3px 0px" float="left" />
        <div>
          <a style="color: #fff" :href="footerContact">Kontakt</a>
          &middot;
          <a style="color: #fff" :href="footerDsgvo">Datenschutzhinweis</a>
          &middot;
          <a style="color: #fff" :href="footerImpressum">Impressum</a>
        </div>
        <div>
          &copy; Leibniz-Institut für Deutsche Sprache
        </div>
      </div>

      <div style="grid-area: middle;"></div>

      <div style="text-align: right; grid-area: right">
        <a :href="rightIconHref" target="_blank">
          <img alt="Logo" src="/logo_right.svg"
            style="max-height:65px; min-height: 45px; min-width: 200px; margin-left: auto; " />
        </a>
      </div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    leftIconHref: {
      type: String,
      default: 'https://www.owid.de/'
    },
    rightIconHref: {
      type: String,
      default: 'https://www.ids-mannheim.de/'
    },
    footerContact: {
      type: String,
      default: 'https://www.owid.de/kontakt/'
    },
    footerDsgvo: {
      type: String,
      default: 'https://www.owid.de/datenschutzhinweis/'
    },
    footerImpressum: {
      type: String,
      default: 'https://www.owid.de/impressum/'
    },
    useMobileView: {
      type: Boolean,
      default: false
    }
  }
}
</script>