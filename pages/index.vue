<template>
  <div>
    <h2>Loading...</h2>

    <!--<div class="row grid">
      <div v-for="n in routes">
        <div class="grid-item">
          <div class="waves-effect waves-yellow card">
            <div class="card-image">
              <img src="https://snworksceo.imgix.net/asp/b2a27081-3f71-48d8-9083-7101f351cff6.sized-1000x1000.jpg?w=1000">
              <span class="card-title">{{n.name | camelCased}}</span>
            </div>
            <div class="card-content black-text">
              <span class="card-title">Click the link on the side to direct to the page you are looking for.</span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Masonry from 'masonry-layout'
import sortJsonArray from 'sort-json-array'

export default {
  name:'Home',
  components: {
    Logo
  },
  data: function () {
      return {
          routes: [],
      }
  },
  beforeCreate(){
    window.location.replace(this.$router.options.routes[0].path);
  },
  updated(){
    this.updateGrid();
  },
  methods:{
    updateGrid: function(){
      var grid = this.$el.querySelector('.grid');
      var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
        transitionDuration: '0.8s',
        stagger: 30
      });
      console.log('updated')
    }
  },
  filters:{
    camelCased: function (name) {
      return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str){ return str.toUpperCase(); })
        .replace(/_/g, ' - ')
    }
  }
}
</script>

<style scoped>
.grid-sizer,
.grid-item { 
  width: 49%;
  padding: 10px;
}

.waves-effect {
    display: inherit; 
}

.arrow{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>

/*
    var arr = []
    this.$router.options.routes.forEach(function(element) {
        if(element.name != 'index') arr.push(element)
    });
    sortJsonArray(arr, 'name','asc')
    this.routes = arr;
 */
