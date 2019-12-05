<template>
  <div>
    <div ref="backgroudContainer" class="backgroundContainer">
      <Grass
        v-if="activeLayers.grass"
        :initialGroundElevationGround="initialGroundElevationGround"
        :groundSpeed="groundSpeed"
        :objectSpeed="objectSpeed"
        :natureSpeed="natureSpeed"
        :skySpeed="skySpeed"
        :offsetLeft="offsetLeft"
        @informheight="calculateAndEmitPageHeight"
        @toggleModal="toggleModal"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Grass from "~/components/backgrounds/Grass.vue";


export default {
  name: "BackgroundAll",
  components: { Grass },
  data() {
    return {
      totalPageHeight: 0,
      containerOffsets: [],
      distanceOfLayers: 0.25,
      groundSpeed: 0,
      objectSpeed: 0,
      natureSpeed: 0,
      skySpeed: 0,
      immediateSpeed: 0,
      HorizonDistance: 3,
      checkingActiveLayers: false,
      activeLayers: {
        grass: true,
        sea: true,
        beach: true,
        cave: true,
        rocket:true
      }
    };
  },
  props: [
    "previousScrollPos",
    "groundElevationGround",
    "initialGroundElevationGround",
    "offsetLeft"
  ],
  methods: {
    toggleModal(component) {
      this.$emit("toggleModal", component);
    },
    calculateAndEmitPageHeight(newHeightObj) {
      if (!checkIfObjExist(newHeightObj, this.containerOffsets)) {
        this.containerOffsets.push(newHeightObj);
        this.totalPageHeight += Number(newHeightObj.width) || 0;
        //console.log(newHeightObj.width, newHeightObj.container);
        this.$emit("informheight", this.totalPageHeight);
      }

      function checkIfObjExist(newObj, containerOffsets) {
        var returnVal = false;
        containerOffsets.forEach(obj => {
          if (obj.container === newObj.container) {
            returnVal = true;
          }
        });
        return returnVal;
      }
    },
    handleMovementY(value) {
      anime({
        targets: this.$refs.backgroudContainer,
        translateY: -value,
        easing: "cubicBezier(.4,.06,.82,.37)",
        duration: 300,
        delay: 0,
        begin: () => {
          console.log("starting ground");
        },
        complete: anim => {
          console.log("complete ground");
        }
      });
    },
    handleLayerMovement(pixelsMoved) {
      //HorizonDistance to the Horizon (must be larger then the number of layers times x. Change this to tune the parallax effect)
      //The layer we are calculating the speed for
      //The distance each layer is into the screen from the last

      this.groundSpeed = -pixelsMoved;
      this.objectSpeed =
        -((this.HorizonDistance - 1 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;
      this.natureSpeed =
        -((this.HorizonDistance - 1.5 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;
      this.skySpeed =
        -((this.HorizonDistance - 3 * this.distanceOfLayers) * pixelsMoved) /
        this.HorizonDistance;

      //this.$refs.sky.style.transform = "translateX(" + -speed + "px)";
    },
    checkAndToggleActiveLayer(override) {
      if (!this.checkingActiveLayers) {
        this.checkingActiveLayers = true;
        setTimeout(() => {
          var clientWidthTimes2 = document.body.clientWidth * 2;

          for (let index = 0; index < this.containerOffsets.length; index++) {
            var name = this.containerOffsets[index].container;
            var contwidth = Number(this.containerOffsets[index].width);
            switch (name) {
              case "grass":
                this.activeLayers.grass =
                  this.previousScrollPos < contwidth + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "sea":
                this.activeLayers.sea =
                  this.previousScrollPos > this.seaOffset - clientWidthTimes2 &&
                  this.previousScrollPos < this.beachOffset + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "beach":
                // code block
                this.activeLayers.beach =
                  this.previousScrollPos >
                    this.beachOffset - clientWidthTimes2 &&
                  this.previousScrollPos < this.caveOffset + clientWidthTimes2
                    ? true
                    : false;
                break;
              case "cave":
                  this.activeLayers.cave =
                  this.previousScrollPos > this.caveOffset - clientWidthTimes2
                    ? true
                    : false;
                break;
              default:
              // code block
            }
          }

          //console.log(this.activeLayers);
          this.checkingActiveLayers = false;
        }, 500);
      }
    }
  },
  watch: {
    groundElevationGround(newVal, oldVal) {
      this.handleMovementY(newVal);
    },
    previousScrollPos(pixels) {
      this.handleLayerMovement(pixels);
      this.checkAndToggleActiveLayer(pixels);
    }
  },
  computed: {

  }
};
</script>

<style>
.backgroundContainer {
  position: fixed;
  bottom: 0;
  left: 0;
}

.area-container {
  position: absolute;
  top: 0;
  left: 0;
}

.ground-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

.sky-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
.objects-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
.interactive-container {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
