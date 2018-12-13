<template>
  <div class="scroll">
    <scroll v-if="caseDetail.length" ref="scroll" class="scroll-content">
      <div id="case-detail" style="padding: 5px;">
        <div v-html="caseDetail">
        </div>
        <v-footer></v-footer>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import VFooter from 'components/pageFooter'
  import Scroll from 'base/scroll'
  export default {
    name: "caseDetails",
    data() {
      return {caseDetail: {}}
    },
    components: {VFooter,Scroll},
    created() {
      this._getCaseDetails()
    },
    mounted() {
      this.$refs.scroll.refresh()
    },
    methods: {
      _getCaseDetails() {
        this.$api.caseDetails({case_guid: this.$route.query.guid}).then((res) => {
          if (res.code === 200) {
            this.caseDetail=res.result.case_content
          } else {
            this.$wu.showToast(res.msg)
          }
        })

      }
    }
  }
</script>

<style lang="stylus">
  template
    color: #474747
  #case-detail p
    margin 0 15px 0 15px
</style>
