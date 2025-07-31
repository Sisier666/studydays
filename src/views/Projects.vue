<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
const todo = useTodoStore()

const newText = ref('')
const add = () => {
    if (!newText.value.trim()) return 
    todo.add(newText.value.trim())
    newText.value=''
    
}

function delete_button(item){
    if (item.done == true) {
        todo.remove(item.id);
    } else {
        alert('请勾选要删除的内容！')
    }
}
</script>

<template>
    <h2>我的项目</h2>
    <!-- 键盘回车按下就添加到列表里 -->
    <input v-model="newText" @keyup.enter="add" placeholder="输入待办">
    <ul>
        <li v-for="i in todo.list" :key="i.id">

            <!-- 要么v-model,要么:checked+@change。因为v-model本来就是双向绑定数值，如果加上@change方法取反值，就会反两次，导致复选框看上去没有变化 -->
            <input type="checkbox" v-model="i.done">
            <!-- <input type="checkbox" :checked="i.done" @change="todo.toggle(i.id)"> -->

            {{ i.text }}
            <button class="btn-del" @click="delete_button(i)">删除</button>
        </li>
    </ul>
</template>

<style scoped>
    .btn-del {
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-del:hover {
        background: #ff0000;
        color: #fff;
    }
</style>