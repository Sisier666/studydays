import { defineStore } from 'pinia';

// 读取本地记录
const getSaved = () => {
  try {
    return localStorage.getItem('theme') === 'dark'
  } catch {
    return false
  }
}

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDark: getSaved()
    }),
    actions: {
        toggle() {
            this.isDark = !this.isDark
            document.documentElement.classList.toggle('dark', this.isDark)
            try {
                localStorage.setItem('dark', this.isDark ? 'dark' : 'light')
            } catch {
                
            }
        }
    }
})