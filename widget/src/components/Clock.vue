<template>
    <div>
        <p class="time">{{ dText }}</p>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Clock',
    props: {
        pType: String
    },
    data() {
        return {
            dText: ''
        }
    },
    mounted () {
        setInterval(() => {
            this.dText = moment().format('HH:mm:ss')
        }, 1000)
    }
}
</script>

<style scoped>
    .time {
        font-size: 160px;
    }
</style>