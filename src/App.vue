<template>
  <div id="app">
    <h2 class="pageTitle tc">{{ pageTitle }}</h2>
		<p class="tc"><input class="userInput" placeholder="Add a new todo here..." v-model="newTodo" @keyup.enter="addNewTodo"></p>
    <ul>
			<li class="todo-item" v-for="(todo,index) in todolists" 
					v-bind:key="todo.id" 
					>
				<input type="checkbox" v-model="todo.finished"> 
				<span :class="{finished: todo.finished}">{{ todo.label }}</span>
				<span v-show="todo.finished" class="tag-warn">finished</span>
				<span class="deleteBtn" @click="deleteTodo(index)">delete</span>
			</li>
		</ul>
  </div>
</template>

<script>
//引入 store.js 以存储 todolist 到 localstorage
import Store from './store';

//default 后的对象暂时当成 vue 的参数
export default {
  data () {
    return {
			pageTitle: 'TODO LIST',
			newTodo: '',
			todolists: Store.fetch(),
			isShowDeleteBtn: 0
    }
	},
	watch: {
		todolists: {
			handler: function (val, OldVal) {
				Store.save(val);
			},
			deep:true
		}
	},
	methods: {
		toggelFinished: function (todo) {
			todo.finished = !todo.finished;
		},
		addNewTodo: function () {
			this.todolists.push({
				id: Math.random(),
				label: this.newTodo,
				finished: false
			});
			//清空
			this.newTodo = '';
		},
		deleteTodo: function (index) {
			this.todolists.splice(index, 1);
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0;
	width: 450px;
	height: 300px;
	border: 2px solid #f1c9ba;
	border-radius: 4px;
	box-shadow: 5px 5px 5px #f1c9ba;
	
}
body{margin: 0;}
ul{
	list-style: none;
}
.tc{text-align: center;}
.fr{float: right;}
.tag-warn{
	color: #fff;
	background-color: red;
	border-radius: 3px;
	font-size: 12px;
	padding: 1px 5px;
	margin-left: 8px;
	display: inline-block;
	font-family: Arial, Helvetica, sans-serif;
}
.finished{
	text-decoration: line-through;
	color: #888;
}
.pageTitle{
	color: #f7875d;
}
.userInput{
	width: 80%;
	height: 30px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 16px;
	padding-left: 5px;
}

.deleteBtn{
	color: #666;
	text-decoration: underline;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
	padding-left: 5px;
	cursor: pointer;
	display: none;
}
.todo-item:hover .deleteBtn{
	display: inline-block;
}
</style>
