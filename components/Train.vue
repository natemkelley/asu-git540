<template>
  <div>
    <div class="stay">
      <svg-icon
        class="tracks"
        name="objects/World_Cave_Tracks"
        height="120px"
        width="2790px"
      />
      <svg-icon
        class="tracks2"
        name="objects/World_Cave_Tracks"
        height="120px"
        width="2790px"
      />
      <svg-icon
        class="tracks3"
        name="objects/World_Cave_Tracks"
        height="120px"
        width="2790px"
      />
    </div>
    <div class="train">
      <div class="smoke">
        <span class="s0"></span>
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
        <span class="s4"></span>
        <span class="s5"></span>
        <span class="s6"></span>
        <span class="s7"></span>
        <span class="s8"></span>
        <span class="s9"></span>
        <span class="s10"></span>
        <span class="s11"></span>
        <span class="s12"></span>
        <span class="s13"></span>
        <span class="s14"></span>
        <span class="s15"></span>
        <span class="s16"></span>
        <span class="s17"></span>
        <span class="s18"></span>
        <span class="s19"></span>
      </div>
      <svg-icon
        class="trainitself"
        name="final/X__Train"
        height="320px"
        width="1790px"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Train",
  props: ["introTrain"],
  methods: {
    runTrain(timer) {
        if(!timer){
            timer = 400
        }
        var duration = 39000;
      setTimeout(() => {
        anime({
          targets: ".train",
          marginLeft: 7950,
          duration: duration,
          delay: 0,
          easing: "easeOutQuad"
        });
        this.runTrain(4000)
      }, timer);
    }
  },
  watch: {
    introTrain(newVal) {
      if (newVal) {
        this.runTrain();
      }
    }
  }
};
</script>

<style scoped>
.tracks {
  margin-bottom: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
}
.tracks2 {
  margin-bottom: 80px;
  position: fixed;
  bottom: 0;
  margin-left: 2730px;
}
.tracks3 {
  margin-bottom: 80px;
  position: fixed;
  bottom: 0;
  margin-left: 5460px;
}

.train {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 86px;
  margin-left: -2500px;
  z-index: 100;
  transform: scale(2.3);
}

.smoke {
  position: absolute;
  bottom: 229px;
  margin-right: 75px;
  right: 0;
  transform: scale(1.07);
  z-index: -1;
}

/* smoke balls */
.smoke span {
  display: block;
  position: absolute;
  bottom: -35px;
  left: 50%;
  margin-left: -20px;
  height: 0px;
  width: 0px;
  border: 35px solid #ffffff;
  border-radius: 35px;
  left: -14px;
  opacity: 0;
  transform: scale(0.2);
}

/* Smoke animation */
@keyframes smokeL1 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(-20px, -130px);
  }
}
@keyframes smokeR1 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(20px, -130px);
  }
}
@keyframes smokeL2 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(-40px, -100px);
  }
}
@keyframes smokeR2 {
  0% {
    transform: scale(0.2) translate(0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(0.2) translate(0, -5px);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate(40px, -100px);
  }
}
.smoke .s0 {
  animation: smokeL1 10s 0s infinite;
}

.smoke .s1 {
  animation: smokeR1 10s 0.5s infinite;
}

.smoke .s2 {
  animation: smokeL2 10s 1s infinite;
}

.smoke .s3 {
  animation: smokeR2 10s 1.5s infinite;
}

.smoke .s4 {
  animation: smokeL1 10s 2s infinite;
}

.smoke .s5 {
  animation: smokeR1 10s 2.5s infinite;
}

.smoke .s6 {
  animation: smokeL2 10s 3s infinite;
}

.smoke .s7 {
  animation: smokeR2 10s 3.5s infinite;
}

.smoke .s8 {
  animation: smokeL1 10s 4s infinite;
}

.smoke .s9 {
  animation: smokeR1 10s 4.5s infinite;
}

.smoke .s10 {
  animation: smokeL2 10s 5s infinite;
}

.smoke .s11 {
  animation: smokeR2 10s 5.5s infinite;
}

.smoke .s12 {
  animation: smokeL1 10s 6s infinite;
}

.smoke .s13 {
  animation: smokeR1 10s 6.5s infinite;
}

.smoke .s14 {
  animation: smokeL2 10s 7s infinite;
}

.smoke .s15 {
  animation: smokeR2 10s 7.5s infinite;
}

.smoke .s16 {
  animation: smokeL1 10s 8s infinite;
}

.smoke .s17 {
  animation: smokeR1 10s 8.5s infinite;
}

#smoke .s18 {
  animation: smokeL2 10s 9s infinite;
}

#smoke .s19 {
  animation: smokeR2 10s 9.5s infinite;
}
</style>
