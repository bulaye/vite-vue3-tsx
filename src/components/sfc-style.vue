<script setup lang="ts">
import { reactive, ref } from "vue";
// interface Props {
//   msg?: string
// }

// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello sfc'
// })
const props = defineProps({
    msg: {
        type: String,
        default: 'hello sfc'
    }
})
// const emit = defineEmits(['click'])
const emit = defineEmits({ click: (payload) => {
    if(payload < 5) {
        console.log(`payload: ${payload}`)
        return true
    } else {
        console.warn(`Invalid submit event payload!`)
        return false
    }
}})
const num = ref(0)
const click = function() {
    num.value++;
    emit('click', num.value)
}
</script>
<template>
    <div class="sfc-style">
        <div @click="click">
            sfc-style {{msg}}
        </div>
    </div>
</template>
<style lang="less">
</style>