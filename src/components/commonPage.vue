<template>
  <div>
    <scroll ref="scroll">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <div ref="main" class="main">
          <slot name="main"></slot>
        </div>
      </div>
      <div ref="footers"></div>
      <div v-if="footerStatus">
        <v-footer></v-footer>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import vFooter from './pageFooter'
  import Scroll from "base/scroll"
  export default {
    name: "",
    data() {
      return {footerStatus:true}
    },
    components: {Scroll, vFooter},
    mounted() {
      setTimeout(()=>{
        this._setFooterHeight()
        this._getFooterStatus()
      },20)
    },
    methods: {
      _setFooterHeight() {
        let Height = this.$refs.main.clientHeight
        this.$refs.footers.style.height = `${Height-70}px`
      },
      _getFooterStatus() {
        if (this.$route.path==='/brand-design' || this.$route.path==='/reject-review'){
          this.footerStatus = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main
    left 1%
    right 1%
    position absolute
    margin -90px 15px 0 15px
    border-radius 5px
    background-color white
    box-shadow 0 0 15px #888888
  .footer
    position absolute
    bottom -70px
</style>