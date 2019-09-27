<template>
  <div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">The serif font I chose is <strong>EB Garamond</strong></span>
            <h3 class="eb">leg·i·ble</h3>
          </div>
        </div>
      </div>
            <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">The sans-serif font I chose is <strong>Valera Round</strong></span>
    <h1 class="ubuntu grey-text text-lighten-2">post·mod·ern</h1>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ImageMeta from "~/components/ImageWithMeta";
import ResponsiveVideo from "~/components/ResponsiveVideo";

export default {
  components: {
    ImageMeta,
    ResponsiveVideo
  },
  mounted() {}
};
</script>

<style scoped>
/* EB serif*/
@import url("https://fonts.googleapis.com/css?family=EB+Garamond|Ubuntu&display=swap");
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

.eb {
  font-family: "EB Garamond", serif;
}

.ubuntu {
  font-family: "Ubuntu", sans-serif;
}

.val {
  font-family: "Varela Round", sans-serif;
}
</style>

<p><iframe src="https://git540.web.app/3_Typography" width="100%" height="600px"></iframe></p>
