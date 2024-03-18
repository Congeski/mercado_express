import { defineStore } from "pinia";
import { users } from '@/data.js';

export const useUsersStore = defineStore("UsersStore", {
    state: () => ({
        loggedUser: false,
        currentUser: '',
        usernameLetter: '',
        admin: Boolean,
    }),

    actions: {
        login(username, password) {
            users.forEach(user => {
                if (username == user.login && password == user.password) {
                    this.loggedUser = true;
                    this.currentUser = user.name;
                    this.usernameLetter = user.name.substring(0, 1).toUpperCase();
                    this.admin = user.admin;
                }
            });

            if (this.loggedUser) {
                return (true);
            } else {
                return (false);
            }
        }
    }
});