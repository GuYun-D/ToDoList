<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isDone" />
      <!-- 一组数据需要写value，单个不用写value，那么v-model操作的属性就是checked -->
      <!-- <input type="checkbox" v-model="isChecked" /> -->
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  // props第二种写法
  props: {
    // 写成对象更严谨，可以对传递过来的属性值类型进行判定
    todo: Object,
  },

  data(){
    return {
      // todo是组件之间的通信传过来的，所以在执行的时候，可能数据都还没有传过来，data中不要出现this
      // isChecked: this.todo.isDone
      isChecked: ''
    }
  },

  // computed: {
  //   isChecked: {
  //     get(){
  //       return this.todo.isDone
  //     },

  //     set(){

  //     }
  //   }
  // }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>