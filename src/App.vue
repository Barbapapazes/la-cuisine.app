<template>
  <main class="overflow-hidden relative">
    <HeroBanner />
    <FullContainer></FullContainer>
    <FullContainer></FullContainer>
    <FullContainer></FullContainer>
    <FullContainer></FullContainer>
    <FullContainer></FullContainer>
  </main>
  <Footer></Footer>
</template>

<script setup>
import HeroBanner from "./components/organisms/HeroBanner.vue";
import Footer from "./components/organisms/Footer.vue";
import FullContainer from "./components/atoms/FullContainer.vue";
</script>
