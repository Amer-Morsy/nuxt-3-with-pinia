<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <nuxt-link to="/">
        <h1 class="text-secondary text-5xl">Adventure Store</h1>
      </nuxt-link>
      <nuxt-link to="/cart">
        <span class="material-icons-outlined text-secondary text-5xl">
          shopping_bag
        </span>
        <span class="bg-white py-1 px-2 rounded-2xl font-bold badge">
          {{ cartStore.numberOfProducts }}
        </span>
      </nuxt-link>
    </header>

    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

cartStore.getCart();
</script>

<style scoped>
.badge {
  position: relative;
  left: -15px;
}
</style>
