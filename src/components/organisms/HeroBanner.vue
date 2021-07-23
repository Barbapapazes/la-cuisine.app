<template>
  <section class="h-screen w-full pt-40 flex flex-col items-center">
    <h1
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
    >
      La Cuisine
    </h1>
    <h2 class="text-center text-grey text-2xl md:text-4xl mt-5">
      Un livre de recettes <br />
      entièrement numériques
    </h2>
    <div class="mt-32 flex justify-center flex-col md:flex-row items-center">
      <a
        href=""
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
        href=""
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
      class="
        absolute
        -bottom-44
        right-1/2
        w-[400px]
        h-[400px]
        bg-primary/25
        rounded-full
        filter
        blur-3xl
        mix-blend-multiply
      "
    ></div>
    <div
      class="
        absolute
        -bottom-64
        right-1/2
        transform
        translate-x-1/2
        w-[400px]
        h-[400px]
        bg-tertiary/25
        rounded-full
        filter
        blur-3xl
        mix-blend-multiply
      "
    ></div>
    <div
      class="
        absolute
        -bottom-44
        left-1/2
        w-[400px]
        h-[400px]
        bg-secondary/25
        rounded-full
        filter
        blur-3xl
        mix-blend-multiply
      "
    ></div>
  </section>
</template>
