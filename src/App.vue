<template>
  <div id="app">
    {{model}}
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
import MyInput from './components/MyInput.vue'
import MyFormItem from './components/MyFormItem.vue'
import MyForm from './components/MyForm.vue'

export default {
  name: 'app',
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
