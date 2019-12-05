<template>
  <main :style="{ height: height + 'px' }">
    <BackgroundAll
      v-if="offsetLeft != 0"
      @informheight="updatePageHeight"
      :previousScrollPos="previousScrollPos"
      :groundElevationGround="groundElevationGround"
      :initialGroundElevationGround="initialGroundElevationGround"
      :offsetLeft="offsetLeft"
      @toggleModal="toggleModal"
    />
    <MeMoving
      @informoffsetleft="updateOffsetLeft"
      :directionX="directionX"
      :groundElevation="groundElevation"
      :initialGroundElevation="initialGroundElevationNate"
      :stillMoving="stillMoving"
      :underwater="underwater"
      :outerspace="outerspace"
    />
  </main>
</template>

<script>
import MenuCartoon from "~/components/MenuCartoon";
import MeMoving from "~/components/MeMoving";
import BackgroundAll from "~/components/BackgroundAll";
import ScoreKeeper from "~/components/ScoreKeeper";
import ModalCartoon from "~/components/ModalCartoon";

export default {
  components: {
    MenuCartoon,
    MeMoving,
    BackgroundAll,
    ScoreKeeper,
    ModalCartoon
  },
  data() {
    return {
      previousScrollPos: 0,
      directionX: "right",
      initialGroundElevationNate: 133,
      groundElevation: 0,
      initialGroundElevationGround: -790,
      groundElevationGround: 0,
      stillMoving: false,
      stillScrolling: 200,
      movingTimeoutVar: undefined,
      checkElevationChange: true,
      underwater: false,
      outerspace: false,
      elevationChangePositionsNate: [
        { positionX: 0, positionY: 0 },

        { positionX: 22463, positionY: 0 }
      ],
      elevationChangePositionsGround: [{ positionX: 0, positionY: 0 }],
      height: 0,
      offsetLeft: 0,
      modalOpen: false,
      component: null
    };
  },
  methods: {
    updatePageHeight(val) {
      this.height = Number(val); //is modified by offsetLeft
      console.log("incoming height", Number(val), "total height", this.height);
    },
    updateOffsetLeft(val) {
      console.log("offsetSetLeft", val);
      this.offsetLeft = val;
      this.height -= val;
    },
    handleScroll() {
      //handle direction of man
      this.directionX =
        this.previousScrollPos > window.scrollY ? "left" : "right";
      this.previousScrollPos = window.scrollY;
      //console.log(this.previousScrollPos);

      //handle elevation change function which use previous scroll position
      if (this.checkElevationChange) {
        this.checkElevationChange = false;
        setTimeout(() => {
          this.handleElevationChangeNate();
          this.handleElevationChangeGround();
          this.handleSpecialEnviroments();
          this.checkElevationChange = true;
        }, 40);
      }

      //handle if still scrolling
      clearTimeout(this.movingTimeoutVar);
      this.movingTimeoutVar = setTimeout(() => {
        this.stillMoving = false;
      }, this.stillScrolling);
      this.stillMoving = true;
    },
    async handleElevationChangeGround() {
      this.groundElevationGround = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsGround.length; i++) {
          if (
            this.elevationChangePositionsGround[i].positionX >
            Math.max(0, this.previousScrollPos + this.offsetLeft)
          ) {
            //console.log('positionX',this.elevationChangePositionsGround[i].positionX,'scrollpos', this.previousScrollPos,'offset',this.offsetLeft,'diff',Math.max(0,this.previousScrollPos+this.offsetLeft))
            resolve(this.elevationChangePositionsGround[i - 1].positionY);
            break;
          }
        }
      });
    },
    async handleElevationChangeNate() {
      this.groundElevation = await new Promise(resolve => {
        for (var i = 0; i < this.elevationChangePositionsNate.length; i++) {
          if (
            this.elevationChangePositionsNate[i].positionX >
            Math.max(0, this.previousScrollPos + this.offsetLeft)
          ) {
            resolve(this.elevationChangePositionsNate[i - 1].positionY);
            break;
          }
        }
      });
    },
    toggleModal(component) {
      this.component = component;
      this.modalOpen = !this.modalOpen;
    },
    handleSpecialEnviroments() {
      let underwaterVal = false;
      if (
        this.previousScrollPos + this.offsetLeft > 6830 &&
        this.previousScrollPos + this.offsetLeft < 13685
      ) {
        underwaterVal = true;
        console.log("underwahwah", underwaterVal);
      }

      //console.log('underwater',returnVal)
      this.underwater = underwaterVal;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style></style>
