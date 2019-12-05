<template>
  <div class="area-container">
    <div class="sky-container" ref="sky">
      <svg-icon
        v-for="(object, n) in sky"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_grass' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="nature-container" ref="nature">
      <!--<House class="house" />-->
      <svg-icon
        v-for="(object, n) in nature"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_grass' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="objects-container" ref="objects">
      <svg-icon
        v-for="(object, n) in objects"
        class="item"
        :name="'objects/' + object.name"
        :width="object.width"
        :height="object.height"
        :key="object.name + '_grass' + '_' + n"
        :style="{
          marginLeft: object.posX + 'px',
          marginBottom: object.posY + 'px'
        }"
      />
    </div>
    <div class="ground-container" ref="groundContainer">
      <Ground ref="ground" />
    </div>
    <div class="interactive-container" ref="interactive">
      <div>
        <Train :introTrain="introTrain" class="trainCont" />
      </div>
      <div>
        <PowerPlant class="powerCont" />
      </div>
    </div>
    <div class="ground-container" ref="speechCont">
      <div
        class="item speech-bubble"
        ref="speechBubble"
        :style="{ marginLeft: offsetLeft + 95 + 'px' }"
      >
        <svg-icon
          class
          name="objects/World_Grass_SpeechBubble"
          height="555px"
          width="379px"
        />
        <div class="text" ref="text"></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Typed from "typed.js";
import Ground from "~/assets/inlinesvg/X__GroundGrass.svg?inline";
import Grass_Objects from "~/components/backgrounds/grass_objects2.js";
import Grass_Nature from "~/components/backgrounds/grass_nature.js";
import Grass_Sky from "~/components/backgrounds/grass_sky.js";
import Train from "~/components/Train.vue";
import PowerPlant from "~/components/Powerplant.vue";

export default {
  name: "Grass",
  props: [
    "initialGroundElevationGround",
    "containerOffset",
    "groundSpeed",
    "objectSpeed",
    "natureSpeed",
    "skySpeed",
    "offsetLeft"
  ],
  components: { Ground, Train, PowerPlant },
  mounted() {
    this.initLayers();
  },
  data() {
    return {
      objects: Grass_Objects,
      sky: Grass_Sky,
      nature: Grass_Nature,
      typeRunning: false,
      introTrain: false,
      typed: { strings: [""] }
    };
  },
  methods: {
    initLayers() {
      //ground
      this.$refs.ground.style.marginBottom =
        this.initialGroundElevationGround + "px";
      let totalWidth = this.$refs.ground
        .getAttribute("viewBox")
        .split(/\s+|,/)[2];
      this.$emit("informheight", {
        width: totalWidth - 350,
        container: "grass"
      });
    },
    handleTextTyping(pixels) {
      var textArray = [
        "Zdravo! My name is Nikky Tesla. Pleasure to meet you!",
        "Say goodbye to steam powered engines and direct current.",
        "My new Westinghouse power plant uses alternating current.",
        "How cool is that?",
        "Is goes further and is more efficient.",
        "Suck it Edison."
      ];
      var typingNum = 0;
      console.log(pixels);
      if (Math.abs(pixels) < 700) {
        typingNum = 0;
      }
      if (Math.abs(pixels) > 700 && Math.abs(pixels) < 1500) {
        typingNum = 1;
      }
      if (Math.abs(pixels) > 1501 && Math.abs(pixels) < 2150) {
        typingNum = 2;
      }
      if (Math.abs(pixels) > 2151 && Math.abs(pixels) < 2850) {
        typingNum = 3;
      }
            if (Math.abs(pixels) > 2851 && Math.abs(pixels) < 3250) {
        typingNum = 4;
      }
            
        if (Math.abs(pixels) > 3251 && Math.abs(pixels) < 15150) {
        typingNum = 5;
      }

      var options = {
        strings: [textArray[typingNum]],
        typeSpeed: 18,
        onComplete: self => {
          this.typeRunning = false;
        }
      };

      if (this.typed.strings[0] != textArray[typingNum] && !this.typeRunning) {
        this.typeRunning = true;
        this.$refs.text.innerHTML = "";
        this.typed = new Typed(".text", options);
      }
    },
    handleSpeechBubble(pixels) {
      if (Math.abs(pixels) > 10 && Math.abs(pixels) < 3400) {
        this.$refs.speechBubble.classList.add("show");
        if (!this.typeRunning) {
          this.handleTextTyping(pixels);
        }
      } else {
        this.$refs.speechBubble.classList.remove("show");
      }
    }
  },
  watch: {
    groundSpeed(pixels) {
      this.$refs.groundContainer.style.marginLeft = `${pixels + "px"}`;
      this.$refs.speechCont.style.marginLeft = `${pixels + "px"}`;

      this.handleSpeechBubble(pixels);
      if (Math.abs(pixels) > 300) {
        this.introTrain = true;
      }
      this.$refs.interactive.style.transform = "translateX(" + pixels + "px)";
    },
    objectSpeed(pixels) {
      this.$refs.objects.style.transform = "translateX(" + pixels + "px)";
    },
    natureSpeed(pixels) {
      this.$refs.nature.style.transform = "translateX(" + pixels + "px)";
    },
    skySpeed(pixels) {
      this.$refs.sky.style.transform = "translateX(" + pixels + "px)";
    }
  }
};
</script>

<style scoped>
.trainCont {
  margin-left: -40px;
  margin-bottom: 100px;
}

.house {
  position: absolute;
  bottom: 0;
  margin-left: 2399px;
  margin-bottom: 131px;
}
</style>

<style>
.item {
  position: fixed;
  bottom: 0;
  left: 0;
}

.speech-bubble {
  opacity: 0;
  transition: opacity 300ms ease;
  margin-bottom: 173px;
}
.speech-bubble.show {
  opacity: 1;
}

.speech-bubble .text {
  font-family: "Georgia", Georgia, serif;
  position: absolute;
  font-weight: bolder;
  bottom: 0;
  margin-left: 55px;
  height: 300px;
  margin-bottom: 73px;
  width: 280px;
  font-size: 27px;
}

.speech-bubble span {
  display: none;
}

.powerCont {
  z-index: -1;
  position: absolute;
  bottom: 0;
  margin-bottom: 320px;
  margin-left: 730px;
  transform: scale(0.78)
}
</style>
