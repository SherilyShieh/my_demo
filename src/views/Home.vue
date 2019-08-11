<template>
  <div id="app">
    <my-form :model="model" :rules="rules">
      <my-form-item label="用户名" prop="name">
        <my-input v-model="model.name"></my-input>
      </my-form-item>
      <my-form-item label="密码" prop="password">
        <my-input v-model="model.password" type="password"></my-input>
      </my-form-item>
    </my-form>
  </div>
</template>

<script>
import MyInput from '../components/MyInput.vue'
import MyFormItem from '../components/MyFormItem.vue'
import MyForm from '../components/MyForm.vue'

export default {
  name: 'home',
  components: {
    MyInput,
    MyFormItem,
    MyForm
  },
  data() {
    return {
      model: {
        name: '',
        password: ''
      },
      value: '',
      rules: {
        name: [
          { required: true, message: 'please input name'},
          { min: 6, max: 10, message: 'info length between 6-10'}
        ],
        password: [
          { required: true, message: 'please input password'}]        
      }
    };
  },
  beforeRouteEnter (to, from, next) {
      // ...
      console.log('beforeRouteEnter')
      next()
  },
  beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate')
      next()
  },
  beforeRouteLeave (to, from, next) {
      // ...
      console.log('beforeRouteLeave')
      next()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>