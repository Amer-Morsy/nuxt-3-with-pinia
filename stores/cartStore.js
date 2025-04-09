import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    numberOfProducts() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
  },
  actions: {
    async getCart() {
      const data = await $fetch("http://localhost:4000/cart");
      this.cart = data;
    },
    async deleteFromCart(product) {
      this.cart = this.cart.filter((p) => {
        return p.id !== product.id;
      });

      // make delete request
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "delete",
      });
    },
    async incQuantity(product) {
      let updatedproduct;
      this.cart = this.cart.map((p) => {
        if (p.id === product.id) {
          updatedproduct = { ...p, quantity: p.quantity + 1 };
          return updatedproduct;
        }
        return p;
      });
      // make put request
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "put",
        body: JSON.stringify(updatedproduct),
      });
    },
    async decQuantity(product) {
      let updatedproduct;
      this.cart = this.cart.map((p) => {
        if (p.id === product.id && p.quantity > 1) {
          updatedproduct = { ...p, quantity: p.quantity - 1 };
          return updatedproduct;
        }
        return p;
      });
      // make put request
      await $fetch("http://localhost:4000/cart/" + product.id, {
        method: "put",
        body: JSON.stringify(updatedproduct),
      });
    },
    async addToCart(product) {
      const exist = this.cart.find((p) => p.id === product.id);
      if (exist) {
        this.incQuantity(product);
      } else {
        this.cart.push({ ...product, quantity: 1 });
        // make post request
        await $fetch("http://localhost:4000/cart", {
          method: "post",
          body: JSON.stringify({ ...product, quantity: 1 }),
        });
      }
    },
  },
});
