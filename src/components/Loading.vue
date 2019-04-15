<template>
    <div class="sampleContainer">
        <div class="loader">
            <span class="dot dot_1"></span>
            <span class="dot dot_2"></span>
            <span class="dot dot_3"></span>
            <span class="dot dot_4"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
    };
</script>

<style scoped lang="scss">
    $animationLength: 1.5s;
    $animationRadius: 12px;
    $dotSize: 8px;

    .sampleContainer { margin-top: 50px; }

    .loader {
        position: relative;
        width: $animationRadius * 3 + $dotSize;
        height: $dotSize;
        margin: $animationRadius auto;
    }

    .dot {
        display: inline-block;
        width: $dotSize;
        height: $dotSize;
        border-radius: $dotSize * 0.5;
        background: #88d840;
        position: absolute;
    }

    .dot_1 {
        animation: animateDot1 $animationLength linear infinite;
        left: $animationRadius;
        background: #247209;
    }

    .dot_2 {
        animation: animateDot2 $animationLength linear infinite;
        animation-delay: $animationLength / 3;
        left: $animationRadius * 2;
    }

    .dot_3 {
        animation: animateDot3 $animationLength linear infinite;
        left: $animationRadius;
    }

    .dot_4 {
        animation: animateDot4 $animationLength linear infinite;
        animation-delay: $animationLength / 3;
        left: $animationRadius * 2;
    }

    @keyframes animateDot1 {
        0%{ transform: rotate(0deg) translateX(-$animationRadius); }
        25% { transform: rotate(180deg) translateX(-$animationRadius); }
        75% { transform: rotate(180deg) translateX(-$animationRadius); }
        100% { transform: rotate(360deg) translateX(-$animationRadius); }
    }

    @keyframes animateDot2 {
        0%{ transform: rotate(-0deg) translateX(-$animationRadius); }
        25% { transform: rotate(-180deg) translateX(-$animationRadius); }
        75% { transform: rotate(-180deg) translateX(-$animationRadius); }
        100% { transform: rotate(-360deg) translateX(-$animationRadius); }
    }

    @keyframes animateDot3 {
        0%{ transform: rotate(0deg) translateX($animationRadius); }
        25% { transform: rotate(180deg) translateX($animationRadius); }
        75% { transform: rotate(180deg) translateX($animationRadius); }
        100% { transform: rotate(360deg) translateX($animationRadius); }
    }

    @keyframes animateDot4 {
        0%{ transform: rotate(-0deg) translateX($animationRadius); }
        25% { transform: rotate(-180deg) translateX($animationRadius); }
        75% { transform: rotate(-180deg) translateX($animationRadius); }
        100% { transform: rotate(-360deg) translateX($animationRadius); }
    }

</style>