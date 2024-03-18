import { defineStore } from "pinia";
import { employees } from "@/data";

export const useEmployeesStore = defineStore("EmployeesStore", {
    state: () => ({
        employees: employees
    }),

    actions: {
        
    }
});