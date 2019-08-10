<template>
    <div>
        <h2>my cart</h2>
        <table>
            <tr>
                <th>check</th>
                <th>name</th>
                <th>price</th>
                <th>count</th>
                <th>total</th>
            </tr>
            <tr v-for="(item) in products" :key="item.id">
                <td><input type="checkbox" v-model="item.isActive"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="minus(item)"> - </button>
                    {{item.count}}
                    <button @click="add(item)"> + </button>
                </td>
                <td>{{item.price * item.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{checkedCount}} / {{total}}</td>
                <td colspan="2">{{totalPrice}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['products'],
    data() {
        return {
        }
    },
    computed: {
        checkedCount() {
            return this.products.filter(item => item.isActive).length;
        },
        total() {
            return this.products.length;
        },
        totalPrice() {
            let num = 0;
            this.products.forEach(element => {
                if (element.isActive) {
                    num += element.price * element.count;
                }
            });
            return num;
        }
    },
    methods: {
        add(item) {
            item.count += 1;
            if (item.count > 0 && !item.isActive) {
                item.isActive = true;
            }
        },
        minus(item) {
            if (item.count > 1) {
                item.count -= 1;
            } else {
                if(window.confirm('remove this product?')) {
                    this.$emit('remove',item)
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
