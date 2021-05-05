<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="content"
      @keyup.enter="addT"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },

  methods: {
    addT() {
      let content = this.content;
      // ====> let {content} = this

      if (content.trim()) {
        let id = Date.now();
        let isDone = false;
        let obj = {
          id,
          content,
          isDone,
        };

        // props组件通信
        // this.addToDo(obj);
        this.$emit('addToDo', obj)
      } else {
        alert("请输入合法数据");
      }
    },
  },

  // props第三种写法
  // props: {
  //   // addToDo: Object  只是限定了传过来的属性值的类型
  //   addToDo: {
  //     type: Function, // 类型
  //     require: true,
  //     // default: 10   与require择其一即可
  //   },
  // },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>