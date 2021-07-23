<template>
  <footer
    class="
      text-center
      space-y-6
      p-8
      bg-gradient-to-r
      from-secondary/20
      to-primary/20
    "
  >
    <a href="mailto:" class="text-primary text-base">Nous contacter</a>
    <div class="flex flex-row space-x-2 justify-center items-center">
      <div>Fait avec</div>
      <IconHeart />
      <div>par des étudiants</div>
    </div>
    <div class="text-sm font-light">
      <div>Hébergé sur Netlify</div>
      <div>Illustration par unDraw</div>
    </div>
  </footer>
</template>

<script setup>
import IconHeart from "../atoms/icons/IconHeart.vue";
</script>
