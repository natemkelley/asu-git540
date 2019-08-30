<template>
    <div class="image">
        <div v-show="isLoad">
            <img v-lazy="src" class="responsive-img materialboxed" @load="loaded"/>
            <div class="superimpose">
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
          date: new Date(),
          src: null,
          isLoad: false
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
  },
  components: {
    CircleLoader,
  },
}
</script>

<style scoped>

.superimpose {
    position: relative;
    margin-top: -55px;
    float: right;
    margin-right: 4%;
    color: white;
}

.image-gallery .image{
    margin: 11px;
    background: gray;
}
 
</style>
