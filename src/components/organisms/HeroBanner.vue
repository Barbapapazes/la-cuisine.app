<template>
  <section class="h-screen w-full pt-40 flex flex-col items-center relative">
    <h1
      v-motion
      class="
        text-6xl
        md:text-[9rem]
        font-bold
        text-center
        bg-gradient-to-r
        from-secondary
        to-primary
        bg-clip-text
        text-transparent
      "
      :delay="100"
      :initial="{
        opacity: 0,
        y: -200,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      La Cuisine
    </h1>
    <h2
      v-motion
      class="text-center text-grey text-2xl md:text-4xl mt-5"
      :delay="150"
      :initial="{ opacity: 0, y: -200 }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      Un livre de recettes <br />
      entièrement numériques
    </h2>
    <div
      ref="motion_1"
      class="mt-32 flex justify-center flex-col md:flex-row items-center"
    >
      <a
        href="https://bit.ly/la-cuisine-bienvenue"
        target="_blank"
        rel="noreferrer noopener"
        class="
          text-white
          bg-primary
          text-base
          rounded
          px-3
          py-1
          md:text-2xl md:rounded-lg md:px-6 md:py-3
        "
        >Le Concept</a
      >
      <a
        href="https://bit.ly/la-cuisine-form"
        target="_blank"
        rel="noreferrer noopener"
        class="
          mt-5
          md:mt-0 md:ml-16
          text-primary text-base
          rounded
          px-3
          py-1
          md:text-2xl md:rounded-lg md:px-6 md:py-3
          border border-primary
        "
        >Le Formulaire</a
      >
    </div>
    <div
      v-motion-fade
      :delay="400"
      class="
        absolute
        inset-0
        flex flex-row
        justify-center
        items-end
        pointer-events-none
      "
    >
      <div
        class="
          relative
          left-[12.5%]
          bottom-[-15%]
          w-[400px]
          h-[400px]
          bg-primary/25
          dark:bg-primary/40
          rounded-full
          filter
          blur-3xl
        "
      ></div>
      <div
        class="
          relative
          bottom-[-20%]
          w-[400px]
          h-[400px]
          bg-tertiary/25
          dark:bg-tertiary/40
          rounded-full
          filter
          blur-3xl
        "
      ></div>
      <div
        class="
          relative
          right-[12.5%]
          bottom-[-15%]
          w-[400px]
          h-[400px]
          bg-secondary/25
          dark:bg-secondary/40
          rounded-full
          filter
          blur-3xl
        "
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useMotion } from "@vueuse/motion"
const motion_1 = ref()

useMotion(motion_1, {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 20,
      delay: 400,
    },
  },
})
</script>
