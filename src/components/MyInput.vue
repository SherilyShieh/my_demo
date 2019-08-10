<template>
    <div>
        <input type="text" :value="value" @input="onInput">
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                onInput(e) {
                    this.$emit('input', e.target.value);
                }
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>