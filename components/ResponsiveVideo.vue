<template>
    <div class="">
        <video v-show="isLoad" class="responsive-video" controls ref="thisVideo">
            <source :src="video" type="video/mp4">
        </video>
        <div v-show="!isLoad">
            <circle-loader></circle-loader>
        </div>
    </div>
</template>

<script>
import CircleLoader from '@/components/circleLoader'

export default {
  data: function () {
      return {
          video: null,
          isLoad: false
      }
  },
  methods:{
      checkIfLoaded(){
          if(!this.isLoad){
            setTimeout(()=>{ 
                    if (this.$refs.thisVideo.readyState > 2) {
                        this.isLoad = true
                    } else{
                        this.checkIfLoaded();
                    }
            }, 200);
          }
      }
  },
  mounted(){
    var videobaby = this.videoURL;
    if(!this.videoURL.includes('/')){
         videobaby = require('@/assets/img/'+this.videoURL)
    }  
    if(videobaby){
        this.video = videobaby;
        this.checkIfLoaded();
    }
  },
  props: {
    videoURL: String,
  },
components: {
    CircleLoader,
  },
}
</script>

<style>

</style>
