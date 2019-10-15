<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li class="logo logo-sidenav">
        <div class="img-cont-sidenav">
            <img :src="Logo" class="responsive-img">
        </div>
      </li>
      <li class="bold" v-for="route in routes">
        <nuxt-link exact :to="route.path" class="waves-effect waves-yellow" @click.native="updateRoute(route.name)">
          {{route.name | camelCased}}
        </nuxt-link>
      </li>
    </ul>

    <header>
      <top-nav :name="name | camelCased"></top-nav>
    </header>

    <main class="hidden">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Logo from '@/assets/img/sparky.png'
import TopNav from '@/components/TopNav'
import sortJsonArray from 'sort-json-array'

export default {
  data: function () {
      return {
          name: '1 - Research',
          Logo: Logo
      }
  },
  methods: {
    updateRoute: function (name) {
      this.name = name
    },
  },
  mounted(){
    M.Sidenav.init(document.querySelector('.sidenav'));
    if (this.$router.history.current.name == 'index') {

    } else{
    this.name = this.$router.history.current.name
    }
    document.getElementsByClassName("hidden")[0].classList.remove("hidden");
  },
  created() {
    var arr = []
    this.$router.options.routes.forEach(function(element) {
        if(element.name != 'index') arr.push(element)
    });
    sortJsonArray(arr, 'name','asc') //.unshift({name:'Home', path:'/'})
    this.routes = arr;
  },
  components: {
    TopNav
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

<style>
.sidenav{
  box-shadow: none!important;
  border-right: 1px solid var(--nav-borders);
}

.logo-sidenav{
    text-align: center;
    padding: 27.5px 0px;
    border-bottom: 1px solid var(--nav-borders)
}
.img-cont-sidenav{
    padding: 0% 35%;
    text-align: center;
}

main {
  opacity: 1;
  transition: all 0.65s;
  transform-origin: top left;
}
.hidden {
  opacity: 0;
  transform: scale(1.05);
  transform: translate(60px);
}
</style>

<style scoped>
main{
  max-width: 940px;
}

</style>
