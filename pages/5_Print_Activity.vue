<template>
  <div>
    <div class="section row">
      <div class="col m12">
        <h2>Business Card</h2>
        <p>Dr. Philip Sherman (also known as P. Sherman and The Dentist) is one of the two human antagonists of Finding Nemo, the other being his niece Darla.</p>
      </div>
    </div>
    <div class="section row">
      <div class="col m12 imaged">
        <image-meta imageURL="businesscard1.png"></image-meta>
      </div>
      <div class="col m12 imaged">
        <image-meta imageURL="businesscard2.png"></image-meta>
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

<style scoped>
.imaged{
  margin: 8px;
}
</style>
