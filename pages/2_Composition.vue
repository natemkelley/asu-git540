<template>
  <div>
    <div class="section row">
      <div class="col m12">
        <h2>Summary</h2>
        <p>The goal of this assignment was to recreat a classic novel's cover. My final output was an indesign document and a writeup of how I brainstormed and implemented my design.</p>
      </div>
    </div>
    <div class="section row">
      <div class="col m12">
        <pdf-iframe pdfURL="Lord_of_the_flies_bundle.pdf"></pdf-iframe>
      </div>
      <div class="col m12">
        <pdf-iframe pdfURL="Final_Paper_Composition.pdf"></pdf-iframe>
      </div>
    </div>
  </div>
</template>

<script>
import ImageMeta from "~/components/ImageWithMeta";
import ResponsiveVideo from "~/components/ResponsiveVideo";
import PdfIframe from "~/components/pdfIframe";

export default {
  components: {
    ImageMeta,
    ResponsiveVideo,
    PdfIframe
  },
  mounted() {}
};
</script>

<style>
</style>
