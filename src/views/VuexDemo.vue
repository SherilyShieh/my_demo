<template>
    <div>
        <h1>This page is about Vuex~</h1>
        <h2>test1</h2>
        <!-- <button @click="increment">Add</button> -->
        <h2>{{$store.state.test1.count}}</h2>
        <!-- <button @click="decrement">Minus</button> -->
        <h2>test2</h2>
        <!-- <button @click="increment">Add</button> -->
        <h2>{{$store.state.test2.count}}</h2>
        <!-- <button @click="decrement">Minus</button>         -->
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {}
        },
        methods: {
            // ...mapActions([
            //     'increment',
            //     'decrement'
            // ]),
            add() {
                
                // this.$store.dispatch('increment');
            },
            minus() {
                // this.$store.dispatch('decrement');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>