<template>
    <div>
        <div class="row m-5 pb-4 justify-content-sm-center">
            <div class="col" v-for="t in times" v-bind:key="t.text">
                <span class="countdown-label mr-3">{{ t.text }}:</span> <span class="countdown-text">{{ ('00' + t.time).slice(-2) | uppercase }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'countdown-timer',
        data () {
            return {
                endTime: 1554476400000,
                times: [
                    {id: 0, text: 'Days', time: 45},
                    {id: 1, text: 'Hours', time: 35},
                    {id: 2, text: 'Minutes', time: 25},
                    {id: 3, text: 'Seconds', time: 15}
                ],
                a: 1,
                progress: 50,
            };
        },
        methods: {
            updateTimer: function () {
                this.getTimeRemaining();
            },
            getTimeRemaining: function () {
                let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());

                // console.log(this.progress);
                this.times[3].time = Math.floor(t / 1000 % 60);
                this.times[2].time = Math.floor(t / 1000 / 60 % 60);
                this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24);
                this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24));
            }
        },
        created: function () {
            this.updateTimer();
            setInterval(this.updateTimer, 1000);
        }
    };
</script>

<style lang="scss">
    @import "../colours";

    .countdown-text {
        font-family: 'Bungee Inline', cursive;
        font-size: 1.75rem;
        color: $white;
        letter-spacing: 0.15rem;
    }

    .countdown-label {
        font-size: 1.25rem;
        color: $white;
        letter-spacing: 0.15rem;
    }
</style>