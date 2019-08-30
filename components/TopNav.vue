<template>
    <div class="topnav">
        <div class="nav-wrapper">
            <div class="row">
                <div class="col s12 m10 offset-m1">
                    <transition name="slide-fade" mode="out-in" appear>
                        <h1 class="header asu-maroon small-center" :key="name">{{name}}</h1>
                    </transition>
                </div>
            </div>
        </div>
        <a href="#" data-target="slide-out" class="top-nav sidenav-trigger full hide-on-large-only">
            <i class="material-icons">menu</i>
        </a>
    </div>
</template>

<script>

export default {
  data: function () {
      return {
          Logo: null
      }
  },
  mounted(){
  },
  props: {
    name: String,
  }

}
</script>

<style>
.topnav{
    border-bottom: 1px solid var(--nav-borders)
}
</style>
