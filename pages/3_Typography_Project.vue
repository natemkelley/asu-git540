<template>
  <div>
    <div class="section row">
      <div class="col m12">
        <h2>Summary</h2>
        <p>The goal of this assignment was to create a poster that used only typography - no pictures or illustrations. We were instructed to choose one word from a list of words and use only fonts and colors in our creation of that word.</p>
        <p>
          The word I chose was
          <strong>EVOLUTION</strong>.
        </p>
      </div>
    </div>
    <div class="section row">
      <div class="col m12">
        <h2>Poster</h2>
        <pdf-iframe pdfURL="Typography_Final_With_Writeup.pdf"></pdf-iframe>
      </div>
    </div>
    <div class="section row">
      <div class="col m12">
        <h2>Writeup</h2>
        <p>The word evolution is connotated with the progress of organisms through time. However, the Oxford dictionary takes a broader view and defines it as &ldquo;the gradual development of something, especially from a simple to a more complex form&rdquo;. The purpose of this exposition will advocate that 1) the modern English alphabet is a form of evolution, 2) English alphabetic evolution did at one time increase in complexity but has since simplied, and that 3) the preceding poster is an accurate portrayal of that evolution.</p>
        <p>The modern English alphabet has its origins in the Phoenician writing system which was developed in the Southern mediterranean around 2500 b.c. This civilization was considered the first to have an alphabet. As time progressed the Greeks, Romans, Germanics tribes, and Anglo-saxons all started using adapted forms of this alphabet. Beginning in Romans times, the English alphabet has changed very little, however, the style in which we write our letters has changed dramatically from its origins.</p>
        <p>For example, the Phoenician and archaic Greek writing systems were used almost exclusively to record business and government transactions. The quick strokes and simple letters are reflected in this alphabet. As time progressed the alphabets of the Greek and Romans became bolder and more robust reflecting their strong political and economic structures. Following the collapse of these civilizations, typography seemed to take a step back as shown in the light calligraphy of the Germanic and Nordic peoples. However, as power was re-centralized to Kingdoms during the late Middle Ages, calligraphy became extremely ornate as if to show that only the rich and powerful possessed the ability to produce font. This trend towards the excessive climaxed during the late baroque period with cursive penmanship and calligraphy. The last hundred years has seen a dramatic push towards simplicity and legibility as seen in the fonts of typewriters, digital computers, and the modern web.&nbsp;</p>
        <p>The poster shows this progression with each letter reflecting the progress towards our modern writing system. The letters are as follows: Phoenician, archaic Greek, classical Greek/Roman, Germanic/Norsk, middle age, baroque, typewriter, digital, and modern web.</p>
        <p>In conclusion, the English alphabet has been 4000 years in the making and has seen various adaptations throughout time. The poster shows simple strokes in early periods, cursives in the high baroque period, and simple web fonts in the modern age.</p>
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
