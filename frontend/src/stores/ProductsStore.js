import { defineStore } from "pinia";
import { products, suppliers } from "@/data";

export const useProductsStore = defineStore("ProductsStore", {
    state: () => ({
        allProducts: products,
        currentCart: [
            { name: "Manteiga", price: 4.00, id: '012', quantity: 2 },
            { name: "Presunto", price: 3.00, id: '013', weight: 0.300 },
            { name: "Queijo", price: 5.00, id: '014', weight: 0.300 },
            { name: "Arroz", price: 5.00, id: '001', quantity: 1 },
            { name: "Feijão", price: 4.50, id: '002', quantity: 2 },
            { name: "Café", price: 4.00, id: '009', quantity: 2 },
        ],
        registeredSuppliers: suppliers,
    }),

    actions: {
        
    }
});