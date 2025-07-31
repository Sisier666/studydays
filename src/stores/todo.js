import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state: () => ({
        list: []
    }),
    actions: {
        add(text) {
            if (text != '') {
                this.list.push({ id: Date.now(), text, done: false})
            } else {
                alert('请填写待办。')
            }
        },
        remove(id) {
            this.list = this.list.filter(i => i.id !== id)
        },
        toggle(id) {
            const t = this.list.find(i => i.id === id);
            t.done = !t.done
        }
    }
})