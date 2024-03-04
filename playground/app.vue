<template>
  <div
    v-for="(key, value) in config.gitInfo"
    :key="key"
  >
    {{ key }}: {{ value }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
