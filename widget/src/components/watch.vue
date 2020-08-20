<template>
    <div>
        <h1>{{ dText }}</h1>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Watch',
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