<template>
  <div
    v-for="(value, key) in config.public.gitInfo"
    :key="key"
  >
    {{ key }}: {{ value }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
