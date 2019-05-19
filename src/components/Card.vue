<template>
  <div class="flip-card" @click="flip()">
    <div class="flip-card-inner" v-bind:style="{ transform: 'rotateY(' + toggleState + 'deg)' }">
      <div class="flip-card-front">
        <lazy-img-loader :src="card.tokenId" :id="card.tokenId" :lazy="lazy"></lazy-img-loader>
      </div>
      <div class="flip-card-back">
          <!-- NEEDS LOOKINMG AT
          
          I thing the SVG has static heights set...  probably best pass it as a prop based on the current size of the front img.
           -->
        <div v-if="card">
          <card-back :card="card"></card-back>
        </div>
        <div v-else>
          <img src="../assets/holding.svg" alt="loading">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImgLoader from "./LazyImgLoader";
import CardBack from "./CardBack";

export default {
  name: "card",

  components: { CardBack, LazyImgLoader },
  data: function() {
    return {
      toggleState: 0
    };
  },
  props: {
    card: {
      type: Object
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  methods: {
    // new function to do the flipping
    flip: function() {
      if (this.toggleState == "180") {
        this.toggleState = "0";
      } else {
        this.toggleState = "180";
      }
    }
  }
};
</script>

<style lang="scss">
@import "../colours";
body {
  background-color: #000;
}

// See the one working media query (line 96).  the rest need updating to include the img sizes and use em so they scale

// // Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575px) {
//     .card-height {
//         height: 330px;
//     }
// }

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) and (max-width: 767px) {
//     .card-height {
//         height: 140px;
//     }
// }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) and (max-width: 991px) {
//     .card-height {
//         height: 200px;
//     }
// }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) and (max-width: 1199px) {
//     .card-height {
//         height: 260px;
//     }
// }

// // Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

  //   JUST SETTING THIS TO MAKE SURE ITS THIS MEDIA QUERY THAT FIRES
  
  body {
    background-color: green;
  }
  .flip-card {
    height: 23.125em;
    img {
      min-height: 23.125em;
      height: 23.125em;
    }
  }
}

// DISCLAIMER.... Copied below from w3schools and hacked a bit :)

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 100%;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
