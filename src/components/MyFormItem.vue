<template>
    <div>
        <label for="">{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="status">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['label', 'prop'],
        data() {
            return {
                errMessage: '',
                status: false
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>