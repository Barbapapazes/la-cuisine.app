<script setup>
const classes = "rounded-2xl shadow-lg border border-black/10"
</script>

<template>
  <slot :attrs="{ class: classes }" />
</template>
