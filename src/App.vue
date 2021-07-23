<template>
  <main class="overflow-hidden relative">
    <HeroBanner />
    <FullContainer>
      <FullContainerTitle class="inline">Lorem ipsum</FullContainerTitle>
    </FullContainer>
    <FullContainer>
      <FullContainerTitle class="inline">Lorem ipsum</FullContainerTitle>
    </FullContainer>
    <FullContainer>
      <FullContainerTitle class="inline">Lorem ipsum</FullContainerTitle>
    </FullContainer>
    <FullContainer>
      <FullContainerTitle class="inline">Lorem ipsum</FullContainerTitle>
    </FullContainer>
    <FullContainer>
      <FullContainerTitle class="inline">Lorem ipsum</FullContainerTitle>
    </FullContainer>
  </main>
  <Footer></Footer>
</template>

<script setup>
import HeroBanner from "./components/organisms/HeroBanner.vue";
import Footer from "./components/organisms/Footer.vue";
import FullContainer from "./components/atoms/FullContainer.vue";
import FullContainerTitle from "./components/atoms/FullContainerTitle.vue";
</script>
