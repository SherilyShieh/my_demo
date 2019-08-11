<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        provide() {
            return {
                MyForm: this
            }
        },
        props: {
            model:{
                type:Object,
                required:true
            },
            rules:{
                type:Object
            }
        },
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss" scoped>

</style>