<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <IconMoon v-show="isDark" class="text-transparent fill-current" />
    <IconSun v-show="!isDark" />
  </a>
</template>

<script setup>
import { isDark } from "../../logics";
import IconSun from "../atoms/icons/IconSun.vue";
import IconMoon from "../atoms/icons/IconMoon.vue";

function toggleDark() {
  isDark.value = !isDark.value;
}
</script>
