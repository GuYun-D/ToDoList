<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span> <span>已完成{{doneNum}}</span> / 全部{{ allNum }}</span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    allNum() {
      return this.todos.length;
    },

    doneNum() {
      return this.todos.reduce((prev, item) => {
        if(item.isDone){
          prev += 1
        }

        return prev
      }, 0);
    },

    isCheckAll: {
      get() {
        return this.allNum === this.doneNum 
      },

      set(value) {
        this.updataAll(value)
      },
    },
  },

  props: ["todos", "updataAll", "deleteAll"],

  methods: {
    deleteA(){
      this.deleteAll()
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>