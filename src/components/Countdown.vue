<template>
    <div>
        <span v-for="t in times">
            {{ t.time }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'countdown-timer',
        data () {
            return {
                endTime: 'April 5, 2019 14:30:00',
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