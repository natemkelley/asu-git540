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
  components: { Ground, Train },
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
      this.$emit("informheight", { width: totalWidth-350, container: "grass" });
    },
    handleTextTyping(pixels) {
      var textArray = [
        "Hello Friends! Welcome to my portfolio.",
        "Feel free to use the menu button to jog between sections",
        "You can drill more into a piece of content by clicking on it!"
      ];
      var typingNum = 0;
      if (Math.abs(pixels) < 3794) {
        typingNum = 0;
      }
      if (Math.abs(pixels) < 4474 && Math.abs(pixels) > 3793) {
        typingNum = 1;
      }
      if (Math.abs(pixels) < 5555 && Math.abs(pixels) > 4473) {
        typingNum = 2;
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
      if (Math.abs(pixels) > 10 && Math.abs(pixels) < 5400) {
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
      if (Math.abs(pixels) > 100) {
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
  margin-left: -100px;
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
  font-family: "Georgia",Georgia, serif;
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
</style>
