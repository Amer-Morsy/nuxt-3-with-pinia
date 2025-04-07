<template>
  <div>
    <header>
      <nuxt-link to="/">
        <h1>Adventure Store</h1>
      </nuxt-link>
      <nuxt-link to="/cart">
        <h1>Cart</h1>
      </nuxt-link>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
