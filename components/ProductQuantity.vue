<template>
  <div class="flex">
    <button class="btn" @click="cartStore.decQuantity(product)">-</button>
    <p class="py-1 px-4 rounded-sm text-lg bg-gray-200">
      {{ product.quantity }}
    </p>
    <button class="btn" @click="cartStore.incQuantity(product)">+</button>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

defineProps(["product"]);
</script>

<style scoped></style>
