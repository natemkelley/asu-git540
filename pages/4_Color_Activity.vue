<template>
  <div class="row">
    <div class="col s12 m6" v-for="(word,n) in words" :key="n">
      <h3 v-bind:style="{ color: word.color}">{{n+1}}. {{word.word}}</h3>
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
  data() {
    return {
      words: [
        { word: "thirsty", color: "#c2d7ff" },
        { word: "creator", color: "#3ab031" },
        { word: "birds", color: "#706535" },
        { word: "clean", color: "#bbe9fa" },
        { word: "two", color: "#000000" },
        { word: "decay", color: "#b39037" },
        { word: "idea", color: "#f2ff00" },
        { word: "foamy", color: "#b6ffb5" },
        { word: "delicate", color: "#f29eff" },
        { word: "truculent", color: "#e31212" }
      ]
    };
  },
  mounted() {}
};
</script>

<style>
</style>
