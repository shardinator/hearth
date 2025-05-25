<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script setup>
  const { data: message } = await useFetch('http://localhost:3000')
  </script>