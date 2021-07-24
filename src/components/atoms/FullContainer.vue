<template>
  <section class="h-screen w-full p-3 md:p-10 xl:px-0 xl:py-20 flex flex-col">
    <slot name="title"></slot>
    <div class="flex-grow self-center grid grid-cols-1 lg:grid-cols-2">
      <slot name="content"></slot>
    </div>
  </section>
</template>
