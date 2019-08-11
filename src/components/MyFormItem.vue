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
    import Schema from '../../node_modules/async-validator'
    export default {
        props:['label', 'prop'],
        inject:['MyForm'],
        data() {
            return {
                errMessage: '',
                status: false
            };
        },
        mounted() {
            this.$on('validate', this.validtor)
        },
        methods: {
            validtor() {
                const rules = this.MyForm.rules[this.prop];
                const value = this.MyForm.model[this.prop];
                const descriptor = {[this.prop]:rules};
                const schema =  new Schema(descriptor);
                schema.validate({[this.prop]:value}, error => {
                    if (error) {
                        this.errMessage = error[0].message;
                        this.status = true;
                    } else {
                        this.errMessage = '';
                        this.status = false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>