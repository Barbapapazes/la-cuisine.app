<template>
  <section class="h-screen w-full p-3 md:p-10 xl:px-0 xl:py-20 flex flex-col">
    <slot name="title"></slot>
    <div class="flex-grow flex flex-col justify-center lg:justify-around">
      <slot name="content"></slot>
    </div>
  </section>
</template>
