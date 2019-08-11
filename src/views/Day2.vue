<template>
    <div>
        <p>Today is sunday, a sunshine day!</p>
        <p>route.params======{{$route.params.id}}</p>
        <p>props====={{id}}</p>
        <router-view/>        
    </div>
</template>

<script>
    export default {
        props:['id'],
        created() {
            console.log(this.$route);
        },
        data() {
            return {};
        }
    }
</script>

<style lang="scss" scoped>

</style>