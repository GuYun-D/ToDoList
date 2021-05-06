<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addToDo="addToDo"></Header> -->
      <Header @addToDo="addToDo"></Header>
      <List :todos="todos" :deleteOne="deleteOne" :updataOne="updataOne"></List>
      <Footer
        :todos="todos"
        :deleteAll="deleteAll"
        :updataAll="updataAll"
      ></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    List,
  },
  data() {
    return {
      // todos: [
      //   {
      //     id: 1,
      //     content: "学习javascript",
      //     isDone: false,
      //   },
      //   {
      //     id: 2,
      //     content: "学习java",
      //     isDone: true,
      //   },
      //   {
      //     id: 3,
      //     content: "学习Typescript",
      //     isDone: false,
      //   },
      // ],
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    };
  },
  methods: {
    addToDo(todo) {
      this.todos.unshift(todo);
    },

    updataOne(index) {
      this.todos[index].isDone = !this.todos[index].isDone;
    },

    deleteOne(index) {
      this.todos.splice(index, 1);
    },

    // value就是footer中计算属性接收到的value
    updataAll(value) {
      this.todos.forEach((item) => (item.isDone = value));
    },

    deleteAll() {
      // 过滤出没打勾的过滤出来
      this.todos = this.todos.filter(item => !item.isDone);
    },
  },

  watch: {
    todos: {
      deep: true,  // 深度监视
      /**
       * 一般监视的是数组的数据，但是数组内部的对象数据的变化监视不到
       * 深度监视不仅可以监视到数组数据，同样可监视到数组内部对象的数据
       */
      handler(newValue, oldValue){
        console.log("存储了");
        // 只要todos发生变化，就将变化的数据存储到本地
        localStorage.setItem('TODOS_KEY', JSON.stringify(newValue))
      }
    }
  }
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
