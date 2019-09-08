<template>
    <div class="image">
        <div v-show="isLoad">
            <iframe :src="src" width="100%" :height="setheight">
            </iframe>
        </div>
        <div v-show="!isLoad" class="loading">
            <circle-loader></circle-loader>
        </div>
    </div>
</template>

<script>
import CircleLoader from '@/components/circleLoader'
var request = require('request');

export default {
  data: function () {
      return {
          src: null,
          isLoad: false,
          defaultHeight: '500px',
          setheight: '500px'
      }
  },
  methods:{
    loaded() {
        setTimeout(()=>{
            this.isLoad = true;
            this.$emit('dunzo', true);
        }, 550)
      },
      checkIframeLoaded(){
        var iframe = this.$el.getElementsByTagName('iframe')[0];
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document; 
        console.log(iframeDoc.readyState)       
        if(iframeDoc.readyState  == 'complete'){
            this.loaded();
            return
        }
        setTimeout(()=>{
            this.checkIframeLoaded()
        }, 1250)
      }
  },
  mounted(){
    this.src = '/'+this.pdfURL;
    this.setheight = this.height || this.defaultHeight
    this.checkIframeLoaded();
  },
  props: {
    pdfURL: String,
    height: String
  },
  components: {
    CircleLoader,
  },
}
</script>

<style scoped>
 
</style>
