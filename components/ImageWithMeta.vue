<template>
    <div class="image">
        <div v-show="isLoad">
            <img v-lazy="src" class="responsive-img materialboxed" @load="loaded" :data-caption="caption"/>
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
var request = require('request');

export default {
  data: function () {
      return {
          date: new Date(),
          src: null,
          isLoad: false,
      }
  },
  methods:{
    loaded() {
        setTimeout(()=>{
            this.isLoad = true;
            this.$emit('dunzo', true);
            M.Materialbox.init(this.$el.querySelectorAll('.materialboxed'));
        }, 150)
      }
  },
  mounted(){
    this.src = require('@/assets/img/'+this.imageURL)
  },
  props: {
    imageURL: String,
    caption: String
  },
  components: {
    CircleLoader,
  },
}
</script>

<style scoped>

.superimpose {
    position: relative;
    margin-top: -35px;
    float: right;
    /* margin-right: 4%; */
    color: white;
    width: 100%;
    text-align: center;
    font-size: 0.77em;
}

.image-gallery .image{
    margin: 11px;
    background: gray;
}
 
 img{
    background: gray;
 }
</style>
