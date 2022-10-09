<script setup>
const data = reactive({
  username: '',
  password: '',

})

const handleLogin = () => {
  console.log(JSON.stringify(data))
}
</script>
  
<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput v-model="data.username" label="Username" placeholder="@username" />
      <UIInput v-model="data.password" label="Password" placeholder="******" type="password" />

      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>
