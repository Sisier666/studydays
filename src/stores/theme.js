import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        dark: JSON.parse(localStorage.getItem('dark') ?? 'false')
    }),
    actions: {
        toggle() {
            this.dark = !this.dark
            localStorage.setItem('dark', this.dark)
            if (this.dark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
})