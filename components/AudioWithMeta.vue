<template>
    <div class="image">
        <div v-show="isLoad">
        <iframe 
          frameborder="0" 
          width="100%"     
          height="210"
          :src="src">    
        </iframe>
            <div class="superimpose">
                {{caption}}
                <!--<p>{{date | moment("LLL")}}</p>-->
            </div>
        </div>
        <div v-show="!isLoad" class="loading">
            <circle-loader></circle-loader>
        </div>
    </div>
</template>

<script>
import CircleLoader from '@/components/circleLoader'

export default {
  data: function () {
      return {
          src: null,
          isLoad: false,
      }
  },
  methods:{
    loaded() {
        setTimeout(()=>{
            this.isLoad = true;
            this.$emit('dunzo', true);
        }, 550)
      }
  },
  mounted(){
    //this.src = require('@/assets/img/'+this.audioURL)
    this.loaded();
    this.src = this.audioURL || "https://drive.google.com/file/d/10IDL913xoGBJdEHLKqrlefzdSUp1K9UU/preview"
  },
  props: {
    audioURL: String,
    caption: String
  },
  components: {
    CircleLoader,
  },
}
</script>

<style scoped>
.superimpose{
    position: relative;
    margin-top: -65px;
    float: right;
    /* margin-right: 4%; */
    color: black;
    width: 100%;
    text-align: center;
    font-size: 0.77em;
}

</style>
